const Language = require('./language');
const Module = require('./module');
const User = require('./user');

Language.hasMany(Module, {
  foreignKey: 'language_id',
});

Module.belongsTo(Language, {
  foreignKey: 'language_id',
});

User.hasMany(Language, {
  foreignKey: 'user_id',
});

module.exports = { Language, Module, User };
