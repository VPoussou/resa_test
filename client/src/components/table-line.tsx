import React, { useState, useEffect } from 'react';
import Dropdown from './dropdown';

const TableLine: React.FC = () => {
  const [buyers, setBuyers] = useState<any[]>([]);
  const [vendors, setVendors] = useState<any[]>([]);

  useEffect(() => {
    const fetchBuyers = async () => {
      const response = await fetch('/buyers'); // replace with your API endpoint
      const data = await response.json();
      setBuyers(data);
    };

    fetchBuyers();
  }, []);

  useEffect(() => {
    const fetchVendors = async () => {
      const response = await fetch('/vendors'); // replace with your API endpoint
      const data = await response.json();
      setVendors(data);
    };

    fetchVendors();
  }, []);

  return (
    <div>
      <input type="text" name="title" id="titleInput" />
      <select name="type" id="typeSelect">
        <option value="virtual">Virtual</option>
        <option value="physical">Physical</option>
      </select>
      <input type="text" name="location" id="locationInput" />
      <Dropdown column="name" options={vendors} />
      <Dropdown column="name" options={buyers} />
      <input type="datetime-local" name="startTime" id="startTimeInput" />
      <input type="datetime-local" name="endTime" id="endTimeInput" />
    </div>
  );
};

export default TableLine;