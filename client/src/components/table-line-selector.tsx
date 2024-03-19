import React, { useState, useEffect } from 'react';
import Dropdown from './dropdown';
import Button from './button'

interface TableLineSelectorProps {
  onButtonClick : (data: any[]) => void
  initTitle?: string
  initType?: string
  initLocation?: string
  initVendor?: string
  initBuyer?: string
  initStartTime?: string
  initEndTime?: string
}

const TableLineSelector: React.FC<TableLineSelectorProps> = ({ onButtonClick, initTitle, initType, initLocation, initVendor, initBuyer, initStartTime, initEndTime }) => {
  const [buyers, setBuyers] = useState<any[]>([]);
  const [vendors, setVendors] = useState<any[]>([]);
  const [title, setTitle] = useState(initTitle ||'MyEvent');
  const [type, setType] = useState(initType ||'Physical');
  const [location, setLocation] = useState(initLocation || '42 Rue de ModaRésa');
  const [vendor, setVendor] = useState(initVendor || 'Loewe');
  const [buyer, setBuyer] = useState(initBuyer || 'Galeries Lafayette');
  const [startTime, setStartTime] = useState( initStartTime || '2024-01-01T12:12');
  const [endTime, setEndTime] = useState(initEndTime || '2024-01-01T12:42');

  const createSvgPath = 'checkmark.svg'

  const handleButtonClick = () => {
    const data = [ title, type, location, vendor, buyer, startTime, endTime ]
    onButtonClick(data)
  };

  useEffect(() => {
    const fetchBuyers = async () => {
      const responseBuyers = await fetch('/buyers'); // replace with your API endpoint
      const dataBuyers = await responseBuyers.json();
      setBuyers(dataBuyers);
    };

    fetchBuyers();
  }, []);

  useEffect(() => {
    const fetchVendors = async () => {
      const response = await fetch('/vendors'); // replace with your API endpoint
      const dataVendors = await response.json();
      setVendors(dataVendors);
    };

    fetchVendors();
  }, []);

  return (
    <div className='table-row'>
      <div className="table-cell">
        <Button svgPath={createSvgPath} onClick={handleButtonClick}></Button>
      </div>
      <input className='table-cell' type="text" name="title" id="titleInput" value={title} onChange={e => setTitle(e.target.value)} />
      <select className='table-cell' name="type" id="typeSelect" value={type} onChange={e => setType(e.target.value)}>
        <option value="virtual">Virtual</option>
        <option value="physical">Physical</option>
      </select>
      <input className='table-cell' type="text" name="location" id="locationInput" value={location} onChange={e => setLocation(e.target.value)} />
      <Dropdown column="name" options={vendors} value={vendor} onValueChange={setVendor} />
      <Dropdown column="name" options={buyers} value={buyer} onValueChange={setBuyer} />
      <input className='table-cell' type="datetime-local" name="startTime" id="startTimeInput" value={startTime} onChange={e => setStartTime(e.target.value)} />
      <input className='table-cell' type="datetime-local" name="endTime" id="endTimeInput" value={endTime} onChange={e => setEndTime(e.target.value)} />
    </div>
  );
};

export default TableLineSelector;