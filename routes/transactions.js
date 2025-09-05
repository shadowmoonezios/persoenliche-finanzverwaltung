const express = require('express');
const Transaction = require('../models/transaction');
const router = express.Router();

// Einnahmen & Ausgaben hinzufügen
router.post('/', async (req, res) => {
    const transaction = new Transaction(req.body);
    try {
        await transaction.save();
        res.status(201).send(transaction);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Alle Transaktionen abrufen
router.get('/', async (req, res) => {
    const transactions = await Transaction.find();
    res.send(transactions);
});

module.exports = router;