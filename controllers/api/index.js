const router = require('express').Router();
const userRoutes = require('./userRoutes');
const languageRoutes = require('./languageRoutes');

router.use('/user', userRoutes);
router.use('/language', languageRoutes);

module.exports = router;
