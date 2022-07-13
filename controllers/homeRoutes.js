const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/login', async (req, res) => {
  res.send(`<h1>this is the login page</h1>`);
  res.render('login');
});

router.get('/language', async (req, res) => {
  res.send(`<h1>this is the language page</h1>`);
});

router.get('/user/:id', async (req, res) => {
  res.send(`<h1>this is the my account</h1>`);
});

module.exports = router;
