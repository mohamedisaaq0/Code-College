const router = require('express').Router();
const { Language, Module } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  let logged_in = req.session.logged_in;
  res.render('homepage', { logged_in });
});

router.get('/profile', (req, res) => {
  res.render('profile');
});

router.get('/language/:id', withAuth, async (req, res) => {
  // res.send('its working');
  try {
    const languageModule = await Language.findByPk(req.params.id, {
      include: [
        {
          model: Module,
          attributes: ['id', 'name', 'progress'],
        },
      ],
    });
    const language = languageModule.get({ plain: true });
    console.log(language);
    res.render('language', { language, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/language', async (req, res) => {
  try {
    const language = await Language.findAll({ raw: true });

    res.render('languages', { language });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
