const router = require('express').Router();
const { Language, Module } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const language = await Language.findAll({
      raw: true,
    });
    res.render('homepage', { language });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/module', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    const module = await Module.findAll({
      where: {
        user_id: req.session.user_id,
      },
      raw: true,
    });

    console.log('User languages', module);
    res.render('module', { module });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
