var Sequelize = require("sequelize");
var sequelize = new Sequelize("burger_db", "root", "password", {
  dialect: "mysql",
  "production":{
    use_env_variable: "JAWSDB_URL"
  },
  "development":{
    host: "localhost",
  }
});

const Burger = sequelize.define("sandwich", {
  description: {
    type: Sequelize.STRING,
    validate:{
      len: [01]
    }
  },
  eaten: { type: Sequelize.BOOLEAN, defaultValue: false }
});

Burger.sync();

module.exports = Burger;