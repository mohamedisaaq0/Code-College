const router = require('express').Router();
const { Module } = require('../../models');

// get a specific module
router.get('/:id', async (req, res) => {
  try {
    const module = await Module.findbyPK(req.params.id);
    const moduleData = module.get();
    res.json(moduleData);
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
