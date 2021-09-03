const { response } = require('express');
const { success, failed } = require('../../config/response')
const { Kelas } = require('../models')

exports.getKelas = async(req, res) => {
    try {
        const data = await Kelas.findAll();
        return res.json(success({ message: 'success', data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: "failed", data: data }))
    }
};

exports.createKelas = async({ body }, res) => {
    const payload = {
        id_kelas: body.id_kelas,
        waktu_mulai: body.waktu_mulai,
        waktu_akhir: body.waktu_akhir,
        deskripsi_kelas: body.deskripsi_kelas,
        foto_kelas: body.foto_kelas,

    }
    try {
        const data = await Kelas.create(payload);
        return res.json(success({ message: "success", data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: "failed", data: data }))
    }
}

exports.updateKelas = async({ body }, res) => {
    const payload = {
        waktu_mulai: body.waktu_mulai,
        waktu_akhir: body.waktu_akhir,
        deskripsi_kelas: body.deskripsi_kelas,
        foto_kelas: body.foto_kelas,
    };
    const where = {
        id_kelas: body.id_kelas
    }
    try {
        const data = await Kelas.update(payload, { where });
        return res.json(success({ message: 'update success', data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'update failed' }))
    }
}