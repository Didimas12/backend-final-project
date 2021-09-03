'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Kota_sekarang extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ User, Kota_sekarang, Provinsi }) {
            // define association here
            Kota_sekarang.hasMany(User, { foreignKey: 'id_kota_sekarang' })
            Kota_sekarang.belongsTo(Provinsi, { foreignKey: 'id_provinsi' })
        }
    };
    Kota_sekarang.init({
        id_kota_sekarang: {
            type: DataTypes.INTEGER(3),
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nama_kota_sekarang: {
            type: DataTypes.STRING(30)
        }
    }, {
        sequelize,
        modelName: 'Kota_sekarang',
    });
    return Kota_sekarang;
};