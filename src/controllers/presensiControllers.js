const { success, failed } = require('../../config/response');
const { Presensi } = require('../models');

exports.getPresensi = async(req, res) => {
    try {
        const data = await Presensi.findAll();
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};

exports.createPresensi = async(req, res) => {
    const payload = {
        id_presensi: req.body.id_presensi,
        presensi: req.body.presensi
    }
    try {
        const data = await Presensi.create(payload);
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};

exports.updatePresensi = async(req, res) => {
    const payload = {
        presensi: req.body.presensi
    }
    const where = {
        id_presensi: req.body.id_presensi,
    }
    try {
        const data = await Presensi.update(payload, { where });
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};