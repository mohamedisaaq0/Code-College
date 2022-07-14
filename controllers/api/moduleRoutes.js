const router = require('express').Router();
const { Modules } = require('../../models');

// get all modules
router.get('/', async (req, res) => {
  try {
    const modules = await Modules.findAll({
      include: [{ language }],
      raw: true,
    });
    res.render('modules', { Modules });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// get a specific module
router.get('/:id', async (req, res) => {
  try {
    const module = await Modules.findOne({
      where: { id: req.params.id },
      raw: true,
    });
    res.render('module', { module });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// POST a new module
router.put('/:id', async (req, res) => {
  try {
    const module = await Modules.findbyPK(id);
    res.json(module);
  } catch (err) {
    res.status(400).json(err);
  }
});
