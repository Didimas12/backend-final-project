const { success, failed } = require('../../config/response');
const { Materi } = require('../models');

exports.getMateri = async({ body }, res) => {
    try {
        const data = await Materi.findAll();
        return res.json(success({ message: 'success', data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }))
    }
};

exports.createMateri = async({ body }, res) => {
    const payload = {
        id_materi: body.id_materi,
        nama_materi: body.nama_materi,
        file_materi: body.file_materi
    };
    try {
        const data = await Materi.create(payload);
        return res.json(success({ message: 'success', data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }))
    }
}

exports.updateMateri = async({ body }, res) => {
    const payload = {
        nama_materi: body.nama_materi,
        file_materi: body.file_materi
    };
    const where = {
        id_materi: body.id_materi,
    };
    try {
        const data = await Materi.update(payload, { where });
        return res.json(success({ message: 'success', data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }))
    }
}