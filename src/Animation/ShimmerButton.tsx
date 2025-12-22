import React, { CSSProperties } from 'react';

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  background?: string;
  shimmerDuration?: string;
  onClick?: () => void;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  className = '',
  shimmerColor = 'rgba(255, 255, 255, 0.5)',
  shimmerSize = '200px',
  borderRadius = '0.5rem',
  background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  shimmerDuration = '2s',
  onClick
}) => {
  const buttonStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    background,
    borderRadius,
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  };

  return (
    <button
      onClick={onClick}
      className={`shimmer-button ${className}`}
      style={buttonStyle}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {children}
      <div className="shimmer-overlay" />
      <style>{`
        .shimmer-overlay {
          position: absolute;
          top: -50%;
          left: -50%;
          width: ${shimmerSize};
          height: ${shimmerSize};
          background: ${shimmerColor};
          transform: rotate(45deg);
          animation: shimmer ${shimmerDuration} infinite;
          pointer-events: none;
        }

        @keyframes shimmer {
          0% {
            left: -${shimmerSize};
            top: -${shimmerSize};
          }
          100% {
            left: 150%;
            top: 150%;
          }
        }

        .shimmer-button:active {
          transform: scale(0.98) !important;
        }
      `}</style>
    </button>
  );
};

export default ShimmerButton;
