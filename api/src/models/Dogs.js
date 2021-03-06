const { database } = require("pg/lib/defaults");
const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dogs', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lifeSpan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        isUrl: true
      }
    },
    createInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }

  });
};
