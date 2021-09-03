'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Social_media extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Social_media, User }) {
            // define association here
            Social_media.hasMany(User, { foreignKey: "id_socmed" })
        }
    };
    Social_media.init({
        id_socmed: {
            type: DataTypes.INTEGER(3),
            autoIncrement: true,
            primaryKey: true
        },
        nama_sosial_media: {
            type: DataTypes.STRING(30)
        }
    }, {
        sequelize,
        modelName: 'Social_media',
    });
    return Social_media;
};