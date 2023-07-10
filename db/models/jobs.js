'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Jobs.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    salary: DataTypes.STRING,
    company: DataTypes.STRING,
    email: DataTypes.STRING,
    new_job: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jobs',
  });
  return Jobs;
};