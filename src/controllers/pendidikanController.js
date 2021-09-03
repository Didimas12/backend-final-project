const { success, failed } = require('../../config/response');
const { Pendidikan } = require('../models');

exports.getPendidikan = async(req, res) => {
    try {
        const data = await Pendidikan.findAll();
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};

exports.createPendidikan = async(req, res) => {
    const payload = {
        id_pendidikan: req.body.id_pendidikan,
        jenjang_pendidikan: req.body.jenjang_pndidikan
    }

    try {
        const data = await Pendidikan.create(payload)
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};

exports.updatePendidikan = async(req, res) => {
    const payload = {
        jenjang_pendidikan: req.body.jenjang_pndidikan
    }
    const where = {
        id_pendidikan: req.body.id_pendidikan,
    }
    try {
        const data = await Pendidikan.update(payload, { where });
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};