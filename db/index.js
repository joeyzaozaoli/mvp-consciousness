var Sequelize = require('sequelize');

var ORM = new Sequelize('consciousness', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var Journal = ORM.define('journals', {
  I: {type: Sequelize.TEXT, validate: {notEmpty: true}},
  II: {type: Sequelize.TEXT, validate: {notEmpty: true}},
  III: {type: Sequelize.TEXT, validate: {notEmpty: true}},
  IV: {type: Sequelize.TEXT, validate: {notEmpty: true}},
  V: {type: Sequelize.TEXT, validate: {notEmpty: true}},
  VI: Sequelize.TEXT,
  VII: Sequelize.TEXT,
  VIII: Sequelize.TEXT,
  IX: Sequelize.TEXT,
  X: Sequelize.TEXT,
  XI: Sequelize.TEXT,
  XII: Sequelize.TEXT
});

Journal.sync();

module.exports = {Journal: Journal};
