'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Jadwal_kelas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Schedule, Jadwal_kelas, User, Presensi }) {
            // define association here
            Jadwal_kelas.belongsTo(Schedule, { foreignKey: 'id_schedule' })
            Jadwal_kelas.belongsTo(Presensi, { foreignKey: 'id_presensi' })
            Jadwal_kelas.belongsTo(User, { foreignKey: 'id_user' })
        }
    };
    Jadwal_kelas.init({
        id_jadwal: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        jadwal_kegiatan_kelas: {
            type: DataTypes.STRING(60),
        }
    }, {
        sequelize,
        modelName: 'Jadwal_kelas',
    });
    return Jadwal_kelas;
};