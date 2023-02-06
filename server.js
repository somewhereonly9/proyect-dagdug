const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('El gordo esta panzon'))

app.listen(3000);
console.log('Server is UP');