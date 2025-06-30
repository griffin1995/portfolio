import { FC, useCallback } from 'react';
import '../styles/FloatingActionButton.scss';

const FloatingActionButton: FC = () => {

  const handleDownloadCV = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/Jack_Griffin_CV.pdf';
    link.download = 'Jack_Griffin_CV.pdf';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="floating-action-container">
      <button
        className="floating-action-btn"
        onClick={handleDownloadCV}
        aria-label="Download CV"
        title="Download CV"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <polyline
            points="14,2 14,8 20,8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="16"
            y1="13"
            x2="8"
            y2="13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="16"
            y1="17"
            x2="8"
            y2="17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <polyline
            points="10,9 9,9 8,9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="fab-tooltip">Download CV</span>
      </button>
    </div>
  );
};

export default FloatingActionButton;