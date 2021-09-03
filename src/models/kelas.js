'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Kelas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Kelas, Schedule, User }) {
            // define association here
            Kelas.hasMany(Schedule, { foreignKey: 'id_kelas' })
            Kelas.hasMany(User, { foreignKey: 'id_kelas' })

        }
    };
    Kelas.init({
        id_kelas: {
            type: DataTypes.INTEGER(4),
            autoIncrement: true,
            primaryKey: true
        },
        waktu_mulai: {
            type: DataTypes.DATE
        },
        waktu_akhir: {
            type: DataTypes.DATE
        },
        deskripsi_kelas: {
            type: DataTypes.STRING
        },
        foto_kelas: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Kelas',
    });
    return Kelas;
};