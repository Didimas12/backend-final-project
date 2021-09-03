'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Kota_asal extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Kota_asal, User, Provinsi }) {
            // define association here
            Kota_asal.belongsTo(Provinsi, { foreignKey: 'id_provinsi' })
            Kota_asal.hasMany(User, { foreignKey: 'id_kota_asal' })
        }
    };
    Kota_asal.init({
        id_kota_asal: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nama_kota_asal: {
            type: DataTypes.STRING(30)
        }
    }, {
        sequelize,
        modelName: 'Kota_asal',
    });
    return Kota_asal;
};