const express = require('express');
const cors = require('cors');

const machinesRoute = require('./routes/machines');
const customersRoute = require('./routes/customers');
const partsRoute = require('./routes/parts');
const technicansRoute = require('./routes/technicians');
const locationsRoute = require('./routes/locations');
const interventionsRoute = require('./routes/interventions');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/machines', machinesRoute);
app.use('/api/customers', customersRoute);
app.use('/api/parts', partsRoute);
app.use('/api/technicians', technicansRoute);
app.use('/api/locations', locationsRoute);
app.use('/api/interventions', interventionsRoute);

app.listen(8800, () => {
  console.log('Backend is running on port 8800');
});
