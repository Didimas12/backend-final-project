'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Presensi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Presensi, Jadwal_kelas }) {
            // define association here
            Presensi.hasMany(Jadwal_kelas, { foreignKey: 'id_presensi' })
        }
    };
    Presensi.init({
        id_presensi: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        presensi: {
            type: DataTypes.STRING(10),
        }
    }, {
        sequelize,
        modelName: 'Presensi',
    });
    return Presensi;
};