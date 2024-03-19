import React from 'react';

interface DropdownProps {
  column: string;
  options: any[];
}

const Dropdown: React.FC<DropdownProps> = ({ column, options }) => {
  const columnData = options.map((item: any) => item[column]);

  return (
    <select>
      {columnData.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;