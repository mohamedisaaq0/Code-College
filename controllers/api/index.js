const router = require('express').Router();
const userRoutes = require('./userRoutes');
const languageRoutes = require('./languageRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/user', userRoutes);
router.use('/language', languageRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
