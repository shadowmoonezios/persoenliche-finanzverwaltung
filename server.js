const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/persoenliche_finanzverwaltung', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB verbunden'))
    .catch(err => console.error(err));

app.listen(port, () => {
    console.log(`Server läuft auf Port: ${port}`);
});