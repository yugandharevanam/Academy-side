import React, { CSSProperties } from 'react';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  floatIntensity?: number;
  duration?: number;
  delay?: number;
  hoverEffect?: boolean;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className = '',
  floatIntensity = 20,
  duration = 3,
  delay = 0,
  hoverEffect = true
}) => {
  const cardStyle: CSSProperties = {
    animation: `float ${duration}s ease-in-out ${delay}s infinite`,
    transition: hoverEffect ? 'transform 0.3s ease, box-shadow 0.3s ease' : 'none'
  };

  return (
    <div
      className={`floating-card ${className}`}
      style={cardStyle}
      onMouseEnter={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.boxShadow = '';
        }
      }}
    >
      {children}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-${floatIntensity}px);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingCard;
