/*
    path: api/login
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { createNewUser } = require('../controllers/auth');

const router = Router();

router.post('/new', [
    check('name','The name is required.').not().isEmpty(),
], createNewUser);

module.exports = router;