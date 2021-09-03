const { success, failed } = require('../../config/response');
const { Provinsi } = require('../models');

exports.getProvinsi = async(req, res) => {
    try {
        const data = await Provinsi.findAll();
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};

exports.createProvinsi = async(req, res) => {
    const payload = {
        id_provinsi: req.body.id_provinsi,
        nama_provinsi: req.body.nama_provinsi,
    };

    try {
        const data = await Provinsi.create(payload);
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};

exports.updateProvinsi = async(req, res) => {
    const payload = {
        nama_provinsi: req.body.nama_provinsi,
    }
    const where = {
        id_provinsi: req.body.id_provinsi,
    }
    try {
        const data = await Provinsi.update(payload, { where })
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};