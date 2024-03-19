import express from 'express';
import { Op } from 'sequelize';

import Appointment from '../models/appointment';
import Vendor from '../models/vendor';
import Buyer from '../models/buyer';

const router = express.Router();

// Get all vendors
router.get('/vendors', async (req, res) => {
    const vendors = await Vendor.findAll();
    res.json(vendors);
  });
  
  // Get all buyers
  router.get('/buyers', async (req, res) => {
    const buyers = await Buyer.findAll();
    res.json(buyers);
  });
// Get all appointments
router.get('/', async (req, res) => {
  const appointments = await Appointment.findAll();
  res.json(appointments);
});

router.get('/search', async (req, res) => {
    const { vendorId, buyerId, location, startTime, endTime } = req.query;
  
    const whereClause: any = {};
    if (vendorId) whereClause['vendorId'] = vendorId;
    if (buyerId) whereClause['buyerId'] = buyerId;
    if (location) whereClause['location'] = location;
    if (startTime && endTime) {
      whereClause['startTime'] = { [Op.lt]: new Date(endTime as string) };
      whereClause['endTime'] = { [Op.gt]: new Date(startTime as string) };
    }
  
    const appointments = await Appointment.findAll({ where: whereClause });
    res.json(appointments);
  });

// Create a new appointment
router.post('/', async (req, res) => {
  const newAppointment = await Appointment.create(req.body);
  res.json(newAppointment);
});

// Update an appointment
router.put('/:id', async (req, res) => {
  const updatedAppointment = await Appointment.update(req.body, {
    where: { id: req.params.id },
  });
  if (updatedAppointment[0] === 1) { // If the number of updated entities is 1
    res.status(200).send('Appointment updated successfully');
  } else {
    res.status(404).send('Appointment not found');
  }
});

// Delete an appointment
router.delete('/:id', async (req, res) => {
  const deletedAppointment = await Appointment.destroy({
    where: { id: req.params.id },
  });
  if (deletedAppointment === 1) { // If the number of deleted entities is 1
    res.status(200).send('Appointment deleted successfully');
  } else {
    res.status(404).send('Appointment not found');
  }
});

export default router;