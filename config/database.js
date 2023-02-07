const Sequelize=require("sequelize")

module.exports=new Sequelize('sequlize', 'postgres', 'unais123', {
    host: 'localhost',
    dialect:'postgres'
  });