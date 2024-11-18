const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
  sequelize.define('metaVenta', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,      
      allowNull: false,
    },
    nombre:{
      type: DataTypes.STRING ,
      allowNull: false
    },
    monto_min:{
      type: DataTypes.REAL,
      allowNull: false
    },
    monto_max:{
      type: DataTypes.REAL,
      allowNull: false
    },
    porcentaje:{
      type: DataTypes.REAL,
      allowNull: false
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'metaVenta'    
  })
}