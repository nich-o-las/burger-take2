var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL){
  var sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  var sequelize = new Sequelize("burger_db", "root", "password", {
    dialect: "mysql",
    host: "localhost"
  });
}


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