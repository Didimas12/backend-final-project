'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pendidikan extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Pendidikan, User }) {
            // define association here
            Pendidikan.hasMany(User, { foreignKey: "id_pendidikan" })
        }
    };
    Pendidikan.init({
        id_pendidikan: {
            type: DataTypes.INTEGER(3),
            autoIncrement: true,
            primaryKey: true,
        },
        jenjang_pendidikan: {
            type: DataTypes.STRING(30)
        }
    }, {
        sequelize,
        modelName: 'Pendidikan',
    });
    return Pendidikan;
};