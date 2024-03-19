
import React from 'react';
import Button from './button';

interface TableRowProps {
  cells: React.ReactNode[];
  onRemove: () => void;
  onEdit: (data: any) => void
}

const TableRow: React.FC<TableRowProps> = ({ cells, onRemove, onEdit }) => {
  
    const deleteSvgPath = 'delete.svg'
    const editSvgPath = 'edit.svg'
    const handleEditClick = () => {
        onEdit(cells)
      };
  return (
  <div className="table-row">
    <div className="table-cell">
        <Button svgPath={deleteSvgPath} onClick={onRemove}></Button>
        <Button svgPath={editSvgPath} onClick={handleEditClick}></Button>
    </div>
    {cells.map((cell, cellIndex) => (
      <div key={cellIndex} className="table-cell">
        {cell}
      </div>
    ))}
  </div>
  )
};

export default TableRow;