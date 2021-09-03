'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Materi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Materi, Schedule }) {
            // define association here
            Materi.hasMany(Schedule, { foreignKey: 'id_materi' })
        }
    };
    Materi.init({
        id_materi: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nama_materi: {
            type: DataTypes.STRING(50),

        },
        file_materi: {
            type: DataTypes.STRING(100)
        }
    }, {
        sequelize,
        modelName: 'Materi',
    });
    return Materi;
};