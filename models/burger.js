module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("sandwich", {
    description: {
      type: DataTypes.STRING,
      validate: {
        len: [01]
      }
    },
    eaten: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};
