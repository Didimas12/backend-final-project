const { response } = require('express');
const { success, failed } = require('../../config/response');
const { Institusi } = require('../models')

exports.getInstitusi = async(req, res) => {
    try {
        const data = await Institusi.findAll();
        return res.json(success({ message: "success", data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: "failed", data: data }))
    }
}

exports.createInstitusi = async(req, res) => {
    const payload = {

        id_institusi: req.body.id_institusi,
        jenis_institusi: req.body.jenis_institusi

    };
    try {
        const data = await Institusi.create(payload);
        return res.json(success({ message: ' data berhasil dibuat', data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, data: 'gagal tanbah data' }))
    };
}

exports.updateInstitusi = async(req, res) => {
    const payload = {
        id_institusi: req.body.id_institusi,
        jenis_institusi: req.body.jenis_institusi
    }
    const where = {
        id_institusi: req.body.id_institusi
    }
    try {
        const data = await Institusi.update(payload, { where })
        return res.json(success({ message: ' data berhasil dibuat', data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, data: 'gagal tanbah data' }))
    }
}