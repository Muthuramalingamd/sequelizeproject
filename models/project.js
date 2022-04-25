'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    projectId:DataTypes.STRING,
    name: DataTypes.STRING,
    userId:DataTypes.STRING,
    district:DataTypes.STRING,
    departmentType:DataTypes.STRING,
    budget:DataTypes.STRING,  
  }, 
  {timestamps:true});
  return project;
};