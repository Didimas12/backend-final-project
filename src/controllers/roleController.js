const { success, failed } = require('../../config/response');
const { Role } = require('../models');

exports.getRole = async(req, res) => {
    try {
        const data = await Role.findAll();
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};

exports.createRole = async(req, res) => {
    const payload = {
        id_role: req.body.id_role,
        jenis_role: req.body.jenis_role,
    }
    try {
        const data = await Role.create(payload);
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};

exports.updateRole = async(req, res) => {
    const payload = {
        jenis_role: req.body.jenis_role,
    }
    const where = {
        id_role: req.body.id_role,
    }
    try {
        const data = await Role.update(payload, { where })
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};