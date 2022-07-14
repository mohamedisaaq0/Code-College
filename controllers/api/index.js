const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/language', languageRoutes);
router.use('/module', moduleRoutes);

module.exports = router;
