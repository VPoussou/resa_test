import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void; // Add this line
}

const TextButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>; // Use the onClick prop here
};

export default TextButton;