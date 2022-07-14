const router = require('express').Router();
const { Modules } = require('../../models');

// get a specific module
router.get('/:id', async (req, res) => {
  try {
    const module = await Modules.findbyPK(req.params.id);
    const moduleData = module.get();
    res.json(module);
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
