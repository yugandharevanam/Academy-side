import React from 'react';

interface GradientTextProps {
  text: string;
  className?: string;
  colors?: string[];
  animate?: boolean;
  speed?: number;
}

export const GradientText: React.FC<GradientTextProps> = ({
  text,
  className = '',
  colors = ['#4F46E5', '#7C3AED', '#DB2777', '#F59E0B'],
  animate = true,
  speed = 3
}) => {
  const gradientColors = colors.join(', ');

  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${gradientColors})`,
        ...(animate && {
          backgroundSize: '200% auto',
          animation: `gradient-shift ${speed}s ease infinite`
        })
      }}
    >
      {text}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
      `}</style>
    </span>
  );
};

export default GradientText;
