/*
    path: api/login
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { createNewUser } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/new', [
    check('name','The name is required.').not().isEmpty(),
    check('email','The email is required.').not().isEmpty(),
    check('email','Check your email format.').isEmail(),
    check('password','The password is required.').not().isEmpty(),
    check('password','Your password must be at least 6 characters.').isLength({ min: 6 }),
    validateFields
], createNewUser);

module.exports = router;