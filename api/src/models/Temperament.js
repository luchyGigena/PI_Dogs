const { DataTypes } = require("sequelize");

module.exports= (Sequelize) =>{
    Sequelize.define('temperament',{
        name:{
            type:DataTypes.STRING,
            allowNull: false
        }
    })
}