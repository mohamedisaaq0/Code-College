const router = require('express').Router();
const { Language, Module } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/language', async (req, res) => {
  try {
    const language = await Language.findAll({ raw: true });
    console.log(language);
    res.render('language', { language });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/language/:id/module', async (req, res) => {
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
    const oneLanguage = languageModule.get({ plain: true });
    res.render('module', { oneLanguage });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
