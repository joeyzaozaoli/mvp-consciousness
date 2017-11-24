var Sequelize = require('sequelize');

var ORM = new Sequelize('consciousness', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var Quote = ORM.define('quotes', {
  quote: {type: Sequelize.TEXT, validate: {notEmpty: true}},
  author: {type: Sequelize.STRING, validate: {notEmpty: true}},
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

var Goal = ORM.define('goals', {
  1: Sequelize.TEXT,
  2: Sequelize.TEXT,
  3: Sequelize.TEXT,
  4: Sequelize.TEXT,
  5: Sequelize.TEXT,
  6: Sequelize.TEXT
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

Quote.sync();
Goal.sync();
Journal.sync();

module.exports = {Quote, Goal, Journal};
