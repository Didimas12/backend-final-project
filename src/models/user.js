'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({
            User,
            Pendidikan,
            Kota_asal,
            Kota_sekarang,
            Pekerjaan,
            Social_media,
            Role,
            Kelas,
            Jadwal_kelas

        }) {
            // define association here
            User.belongsTo(Pendidikan, { foreignKey: "id_pendidikan" })
            User.belongsTo(Kota_asal, { foreignKey: "id_kota_asal" })
            User.belongsTo(Kota_sekarang, { foreignKey: 'id_kota_sekarang' })
            User.belongsTo(Pekerjaan, { foreignKey: 'id_pekerjaan' })
            User.belongsTo(Social_media, { foreignKey: "id_socmed" })
            User.belongsTo(Role, { foreignKey: "id_role" })
            User.hasMany(Jadwal_kelas, { foreignKey: 'id_user' })
            User.belongsTo(Kelas, { foreignKey: "id_kelas" })


        }
    };
    User.init({
        id_user: {
            type: DataTypes.INTEGER(3),
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nama: {
            type: DataTypes.STRING(30)
        },
        tgl_lahir: {
            type: DataTypes.DATEONLY
        },
        deskripsi: {
            type: DataTypes.STRING(100)
        },
        alamat_sekarang: {
            type: DataTypes.STRING(50)
        },
        alamat_asal: {
            type: DataTypes.STRING(50)
        },
        no_hp: {
            type: DataTypes.INTEGER(20)
        },
        email: {
            type: DataTypes.STRING(20)
        },
        password: {
            type: DataTypes.STRING(16)
        },
        foto: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};