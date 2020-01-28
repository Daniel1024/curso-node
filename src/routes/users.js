const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');
// const _ = require('underscore');

router.get('/', async (req, res) => {
    const responde = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await responde.json();

    res.json(users);
});


module.exports = router;
