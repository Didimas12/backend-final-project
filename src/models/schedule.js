'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Schedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Schedule, Jadwal_kelas, Materi, Kelas }) {
            // define association here
            Schedule.belongsTo(Materi, { foreignKey: 'id_materi' })
            Schedule.belongsTo(Kelas, { foreignKey: 'id_kelas' })
            Schedule.hasMany(Jadwal_kelas, { foreignKey: 'id_schedule' })
        }
    };
    Schedule.init({
        id_schedule: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        waktu_mulai: {
            type: DataTypes.DATE
        },
        waktu_akhir: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'Schedule',
    });
    return Schedule;
};