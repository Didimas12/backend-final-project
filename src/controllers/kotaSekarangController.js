const { success, failed } = require('../../config/response')
const Kota_sekarang = require('../models')

exports.getKotaSekarang = async(req, res) => {
    try {
        const data = await Kota_sekarang.findAll();
        return res.json(success({ message: 'success', data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }))
    }
}

exports.createKotaSekarang = async(req, res) => {
    const payload = {
        id_kota_sekarang: req.body.id_kota_sekarang,
        nama_kota_sekarang: req.body.nama_kota_sekarang,
        id_provinsi: req.body.id_provinsi
    }
    try {
        const data = await Kota_sekarang.create(payload)
        return res.json(success({ message: 'success', data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }))
    }
}

exports.updateKotaAsal = async(req, res) => {
    const payload = {

        nama_kota_sekarang: req.body.nama_kota_sekarang,
        id_provinsi: req.body.id_provinsi
    }
    const where = {
        id_kota_sekarang: req.body.id_kota_sekarang,
    }
    try {
        const data = await Kota_sekarang(payload, { where })
        return res.json(success({ message: 'success', data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }))
    }
}