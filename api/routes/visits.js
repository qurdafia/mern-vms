const express = require('express');
const router = express.Router();
const Visit = require('../models/Visit');

router.get('/', async (req, res) => {
    try {
        const visits = await Visit.find();
        res.json(visits);
    } catch(err) {
        res.json({message: err});
    }
});


router.get('/:visitId', async (req, res) => {
    try {
        const visit = await Visit.findById(req.params.visitId);
        res.json(visit);
    } catch(err) {
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    const visit = new Visit({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        company: req.body.company,
        mobile: req.body.mobile,
        temperature: req.body.temperature,
        contactPerson: req.body.contactPerson,
        face: req.body.face
    });
    try {
        const savedVisit = await visit.save();
        res.json(savedVisit);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;