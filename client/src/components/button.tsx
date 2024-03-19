import React from 'react';

interface ButtonProps {
  text?: string;
  svgPath?: string;
  svgAlt?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, svgPath, svgAlt, onClick }) => {
  if (!text && !svgPath) {
    throw new Error('Either "text" or "svgPath" must be provided');
  }

  return (
    <button onClick={onClick}>
      {svgPath && <img src={svgPath} alt={svgAlt} />}
      {text}
    </button>
  );
};

export default Button;