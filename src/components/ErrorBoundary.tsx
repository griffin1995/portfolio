import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorBoundaryState } from "../types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ErrorBoundary.scss";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

class ErrorBoundary extends Component<Props, ErrorBoundaryState> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  public state: ErrorBoundaryState = {
    hasError: false,
    retryCount: 0,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, retryCount: 0 };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Enhanced error logging with user agent and timestamp
    const errorReport = {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      retryCount: this.state.retryCount
    };

    console.error("Error caught by boundary:", errorReport);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report to error tracking service in production
    if (process.env.NODE_ENV === 'production') {
      // TODO: Integrate with error tracking service (e.g., Sentry)
      // this.reportToErrorTracking(errorReport);
    }
  }

  public componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  private handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: undefined,
      retryCount: prevState.retryCount + 1
    }));
  };

  private handleRefresh = () => {
    // Clear any timeouts before refresh
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div 
            className="error-boundary d-flex justify-content-center align-items-center"
            role="alert"
            aria-live="assertive"
          >
            <div className="error-content text-center">
              <h2 className="text-danger mb-3">Something went wrong</h2>
              <p className="text-muted mb-4">
                We're sorry, but something unexpected happened. 
                {this.state.retryCount > 0 && (
                  <span className="d-block mt-2">
                    Retry attempt: {this.state.retryCount}
                  </span>
                )}
              </p>
              <div className="error-actions">
                <button
                  onClick={this.handleRetry}
                  className="btn btn-outline-primary me-2"
                  aria-label="Try to recover from error"
                >
                  Try Again
                </button>
                <button
                  onClick={this.handleRefresh}
                  className="btn btn-primary"
                  aria-label="Refresh the entire page"
                >
                  Refresh Page
                </button>
              </div>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="error-details mt-4 text-start">
                  <summary className="btn btn-sm btn-outline-secondary">
                    View Error Details
                  </summary>
                  <pre className="error-stack mt-2 p-3 bg-light rounded">
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
