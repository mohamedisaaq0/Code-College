const router = require('express').Router();
const { Languages } = require('../../models');
const { User } = require('./userRoutes');

// get request all languages

router.get('/', async (req, res) => {
  try {
    const languages = await Languages.findAll({
      include: [{ module }],
      raw: true,
    });
    res.render('languages', { Languages });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// get a specific language

router.get('/:id', async (req, res) => {
  try {
    const language = await Languages.findOne({
      where: { id: req.params.id },
      raw: true,
    });
    res.render('language', { language });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//post language

router.post('/', async (req, res) => {
  try {
    const language = await Languages.create(req.body);
    res.json(language);
  } catch (err) {
    res.status(400).json(err);
  }
});
