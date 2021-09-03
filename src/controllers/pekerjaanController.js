const { success, failed } = require('../../config/response');
const { Pekerjaan } = require('../models');

exports.getPekerjaan = async(req, res) => {
    try {
        const data = await Pekerjaan.findAll();
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};

exports.createPekerjaan = async(req, res) => {
    const payload = {
        id_pekerjaan: req.body.id_pekerjaan,
        nama_pekerjaan: req.body.nama_pekerjaan,
        id_institusi: req.body.id_institusi
    };
    try {
        const data = await Pekerjaan.create(payload);
        return res.json(success({ message: 'success', data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }))
    }
};

exports.updatePekerjaan = async(req, res) => {
    const payload = {
        nama_pekerjaan: req.body.nama_pekerjaan,
        id_institusi: req.body.id_institusi
    };
    const where = {
        id_pekerjaan: req.body.id_pekerjaan,
    };
    try {
        const data = await Pekerjaan.update(payload, { where })
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }))
    }
};