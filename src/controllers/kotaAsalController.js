const { success, failed } = require('../../config/response')
const { Kota_asal } = require('../models')

exports.getKotaAsal = async(req, res) => {
    try {
        const data = await Kota_asal.findAll();
        return res.json(success({ message: 'berhasil ditampilkan', data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }))
    }
}
exports.createKotaAsal = async(req, res) => {
    const payload = {
        id_kota_asal: req.body.id_kota_asal,
        nama_kota_asal: req.body.nama_kota_asal,
        id_provinsi: req.body.id_provinsi
    }
    try {
        const data = await Kota_asal.create(payload);
        return res.json(success({ message: 'berhasil', data: data }))
    } catch (error) {
        failed({ message: error.message, data: "gagal menambahkan data" })
    }
}

exports.updateKotaAsal = async(req, res) => {
    const payload = {

        nama_kota_asal: req.body.nama_kota_asal,
        id_provinsi: req.body.id_provinsi
    }
    const where = {
        id_kota_asal: req.body.id_kota_asal,
    }
    try {
        const data = await Kota_asal.update(payload, { where });
        return res.json(success({ message: "update success", data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: "update failed" }));
    }
}