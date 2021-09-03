'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Institusi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Institusi, Pekerjaan }) {
            // define association here
            Institusi.hasMany(Pekerjaan, { foreignKey: 'id_institusi' })
        }
    };
    Institusi.init({
        id_institusi: {
            type: DataTypes.INTEGER(3),
            primaryKey: true,
            autoIncrement: true,
        },
        jenis_institusi: {
            type: DataTypes.STRING(30),
        }
    }, {
        sequelize,
        modelName: 'Institusi',
    });
    return Institusi;
};