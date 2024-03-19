
import React, { useState, useEffect } from 'react';
import TableLineSelector from './table-line-selector';
import TableRow from './table-line';

const Table: React.FC = () => {
    const [tableLines, setTableLines] = useState<any[]>([]);

    const addTableLine = (line: any) => {
      setTableLines(prevLines => [...prevLines, line]);
    };
  
    const removeTableLine = (lineIndex: number) => {
      setTableLines(prevLines => prevLines.filter((_, index) => index !== lineIndex));
    };

    return (
        <div className="table">
          <div className="table-row table-header">
                <div className="table-cell"></div>
                <div className="table-cell">Title</div>
                <div className="table-cell">Type</div>
                <div className="table-cell">Location</div>
                <div className="table-cell">Vendor</div>
                <div className="table-cell">Buyer</div>
                <div className="table-cell">Start Time</div>
                <div className="table-cell">End Time</div>
          </div>
          <TableLineSelector onButtonClick={addTableLine} />
          {tableLines.map((line, index) => (
            <TableRow key={index} cells={line} onRemove={() => removeTableLine(index)} onEdit={() =>{}}/>
          ))}
        </div>
      );
};

export default Table;