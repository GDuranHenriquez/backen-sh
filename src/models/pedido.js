const {DataTypes} = require('sequelize');

/* descripcion:[{nombre:'nombre', cantidad:2, precio:10}, ...]
} */
/* abonos:[{efectivoUsd:10, efectivoMlc: 10, pagoDigitalMlc:10, pagoDigitalUsd:10, tasa: 45 }, ...]
} */

module.exports = (sequelize) => {
  sequelize.define('pedido', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,      
      allowNull: false,
    },
    fecha:{
      type: DataTypes.STRING,
      allowNull: false
    },
    comentario:{
      type:DataTypes.STRING,
      allowNull: true
    },
    descripcion:{
      type:DataTypes.JSON,
      allowNull: false
    },
    deuda:{
      type: DataTypes.REAL,
      allowNull: false
    },
    abono:{
      type: DataTypes.JSON,
      allowNull: false
    },
    totalAbono: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0
    },
    pendiente:{
      type: DataTypes.REAL,
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('nuevo', 'proceso', 'entregado', 'declinado'),
      allowNull: false,
      defaultValue: 'nuevo',
    }
  },   
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'pedido',
  }
)}