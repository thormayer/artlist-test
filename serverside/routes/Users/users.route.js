const express = require('express');
const router = express.Router();
const usersList = require('../../mock');

router.get('/users', (req, res) => {
    res.json(usersList);
})

router.get('/users/:id', (req, res) => {
    console.log(req.params)
    let term = req.params.id;
    const result = usersList.filter(t => t.name.toLowerCase().indexOf(term) !== -1);
    res.json(result)
})

module.exports = router;