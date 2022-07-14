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

// change the progress of a module
router.put('/:id', async (req, res) => {
  try {
    const module = await Module.findbyPK(req.params.id);
    module.progress = req.body.progress;
    if (req.body.progress === 1) {
      module.completed = true;
    } else {
      module.completed = false;
    }
    await module.save();
    res.json(module);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
