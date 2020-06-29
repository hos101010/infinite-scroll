module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define(
    "items",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      review: DataTypes.INTEGER,
      img: DataTypes.STRING,
    },
    {}
  );
  return items;
};
