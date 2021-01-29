/*
    path: api/login
*/

const {Router} = require('express');
const { createNewUser } = require('../controllers/auth');

const router = Router();

router.post('/new', createNewUser);

module.exports = router;