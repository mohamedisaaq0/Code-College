const sequelize = require('../config/connection');
const seedModule = require('./module');
//const seedLanguage = require('./language');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  //await seedLanguage();
  await seedModule();
  process.exit(0);
};

seedAll();
