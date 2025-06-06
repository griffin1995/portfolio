import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorBoundaryState } from "../types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ErrorBoundary.scss";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

class ErrorBoundary extends Component<Props, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="error-boundary d-flex justify-content-center align-items-center">
            <div className="error-content text-center">
              <h2 className="text-danger mb-3">Something went wrong</h2>
              <p className="text-muted mb-4">
                We're sorry, but something unexpected happened.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-primary"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
