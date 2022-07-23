const router = require('express').Router();
const { User } = require('../../models');

router.post('/profile', async (req, res) => {
  try {
    const id = req.session.user_id;
    const userData = await User.findByPk(id);
    const data = userData.get({ plain: true });
    console.log(data);
    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
