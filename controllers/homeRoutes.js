const router = require('express').Router();
const Langauges = require('../../models/Languages');

router.get('/', async (req, res) => {
  try {
    const languages = await Languages.findAll({
      raw: true,
    });
    res.render('languages', { Languages });
  } catch (error) {
    ç;
    res.status(500).json(error);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/languages', async (req, res) => {
  if (req.session.logged_in) {
    const projects = await Languages.findAll({
      where: {
        user_id: req.session.user_id,
      },
      raw: true,
    });

    console.log('User languages', languages);
    res.render('profile', { Languages });
  } else {
    res.redirect('/login');
  }
});
