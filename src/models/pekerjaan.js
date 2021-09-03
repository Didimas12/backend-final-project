'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pekerjaan extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Pekerjaan, User, Institusi }) {
            // define association here
            Pekerjaan.hasMany(User, { foreignKey: "id_pekerjaan" })
            Pekerjaan.belongsTo(Institusi, { foreignKey: "id_institusi" })
        }
    };
    Pekerjaan.init({
        id_pekerjaan: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            autoIncrement: true
        },
        nama_pekerjaan: {
            type: DataTypes.STRING(30)
        }
    }, {
        sequelize,
        modelName: 'Pekerjaan',
    });
    return Pekerjaan;
};