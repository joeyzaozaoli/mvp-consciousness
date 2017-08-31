var Sequelize = require('sequelize');

var ORM = new Sequelize('consciousness', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var Journal = ORM.define('journals', {
  I: {type: Sequelize.TEXT, allowNull: false},
  II: {type: Sequelize.TEXT, allowNull: false},
  III: {type: Sequelize.TEXT, allowNull: false},
  IV: {type: Sequelize.TEXT, allowNull: false},
  V: {type: Sequelize.TEXT, allowNull: false},
  VI: Sequelize.TEXT,
  VII: Sequelize.TEXT,
  VIII: Sequelize.TEXT,
  IX: Sequelize.TEXT,
  X: Sequelize.TEXT,
  XI: Sequelize.TEXT,
  XII: Sequelize.TEXT
});

Journal.sync();
