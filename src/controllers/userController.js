// const { response } = require('express');
const { success, failed } = require('../../config/response');
const { User } = require('../models');

exports.getUser = async(req, res) => {
    try {
        const data = await User.findAll();
        return res.json(success({ message: "success", data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }))
    }
}
exports.createUser = async(req, res) => {
        const payload = {
            nama: req.body.nama,
            tgl_lahir: req.body.tgl_lahir,
            deskripsi: req.body.deskripsi,
            alamat_sekarang: req.body.alamat_sekarang,
            alamat_asal: req.body.alamat_asal,
            no_hp: req.body.no_hp,
            email: req.body.email,
            password: req.body.password,
            foto: req.body.foto,
            id_pendidikan: req.body.id_pendidikan,
            id_kota_asal: req.body.id_kota_asal,
            id_kota_sekarang: req.body.id_kota_sekarang,
            id_pekerjaan: req.body.id_pekerjaan,
            id_socmed: req.body.id_socmed,
            id_role: req.body.id_role,
            id_kelas: req.body.id_kelas
        };
        try {
            const data = await User.create(payload);
            return res.json(success({ message: "success", data: data }))
        } catch (error) {
            return res.json(failed({ message: error.message, message: 'failed' }))
        }
    },
    exports.updateUser = async({ body }, res) => {
        const payload = {
            nama: body.nama,
            tgl_lahir: body.tgl_lahir,
            deskripsi: body.deskripsi,
            alamat_sekarang: body.alamat_sekarang,
            no_hp: body.no_hp,
            email: body.email,
            password: body.password,
            foto: body.foto,
            id_pendidikan: body.id_pendidikan,
            id_kota_asal: body.id_kota_asal,
            id_kota_sekarang: body.id_kota_sekarang,
            id_kota_sekarang: body.id_kota_sekarang,
            id_pekerjaan: body.id_pekerjaan,
            id_socmed: body.id_socmed,
            id_role: body.id_role,
            id_kelas: body.id_kelas,

        }
        const where = {
            id_user: body.id_user
        };
        try {
            const data = await User.update(payload, { where });
            return res.json(success({ message: "data berhasil diupdate" }))
        } catch (error) {
            return res.json(failed({ message: error.message, message: 'update failed' }))
        }
    }