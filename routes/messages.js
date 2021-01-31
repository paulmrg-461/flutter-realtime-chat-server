/*
    Path: /api/messages
*/

const { Router } = require('express');
const { getChat } = require('../controllers/messages');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

//validateJWT,
router.get('/:from', validateJWT, getChat);

module.exports = router;
