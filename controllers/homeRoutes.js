const router = require('express').Router();
const { Language } = require('../models');
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

// router.get('/module', withAuth, async (req, res) => {
//   if (req.session.logged_in) {
//     const module = await Module.findAll({
//       where: {
//         user_id: req.session.user_id,
//       },
//       raw: true,
//     });

//     console.log('modules', module);
//     res.render('module', { module });
//   } else {
//     res.redirect('/login');
//   }
// });

module.exports = router;
