import React from 'react';

interface DropdownProps {
  column: string;
  options: any[];
  value: any;
  onValueChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ column, options, value, onValueChange }) => {
  const columnData = options.map((item: any) => item[column]);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onValueChange(event.target.value)
  }

  return (
    <select value={value} onChange={handleChange}>
      {columnData.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;