'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Provinsi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Provinsi, Kota_asal, Kota_sekarang }) {
            // define association here
            Provinsi.hasOne(Kota_asal, { foreignKey: "id_provinsi" })
            Provinsi.hasOne(Kota_sekarang, { foreignKey: 'id_provinsi' })
        }
    };
    Provinsi.init({
        id_provinsi: {
            type: DataTypes.INTEGER(3),
            autoIncrement: true,
            primaryKey: true,
        },
        nama_provinsi: {
            type: DataTypes.STRING(30)
        },
    }, {
        sequelize,
        modelName: 'Provinsi',
    });
    return Provinsi;
};