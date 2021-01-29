/*
    path: api/login
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { createNewUser, login, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post('/new', [
    check('name','The name is required.').not().isEmpty(),
    check('email','The email is required.').not().isEmpty(),
    check('email','Check your email format.').isEmail(),
    check('password','The password is required.').not().isEmpty(),
    check('password','Your password must be at least 6 characters.').isLength({ min: 6 }),
    validateFields
], createNewUser);

router.post('/', [
    check('email','The email is required.').not().isEmpty(),
    check('email','Check your email format.').isEmail(),
    check('password','The password is required.').not().isEmpty(),
    check('password','Your password must be at least 6 characters.').isLength({ min: 6 }),
    validateFields
], login );

//validateJWT,
router.get('/renew', validateJWT, renewToken);

module.exports = router;