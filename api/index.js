const express = require('express');

const machinesRoute = require('./routes/machines');
const customersRoute = require('./routes/customers');
const partsRoute = require('./routes/parts');

const app = express();

app.use(express.json());

app.use('/api/machines', machinesRoute);
app.use('/api/customers', customersRoute);
app.use('/api/parts', partsRoute);

app.listen(8800, () => {
  console.log('Backend is running on port 8800');
});
