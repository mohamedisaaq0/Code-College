const router = require('express').Router();
const userRoutes = require('./userRoutes');
const languageRoutes = require('./languageRoutes');
const moduleRoutes = require('./moduleRoutes');

router.use('/user', userRoutes);
router.use('/language', languageRoutes);
router.use('/module', moduleRoutes);

module.exports = router;
