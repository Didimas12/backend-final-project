const { success, failed } = require('../../config/response');
const { Social_media } = require('../models');

exports.getSocialMedia = async(req, res) => {
    try {
        const data = await Social_media.findAll();
        return res.json(success({ message: 'success,', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
}

exports.createSocialMedia = async(req, res) => {
    const payload = {
        id_socmed: req.body.id_socmed,
        nama_sosial_media: req.body.nama_sosial_media
    }
    try {
        const data = await Social_media.create(payload);
        return res.json(success({ message: 'success,', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};

exports.updateSocialMedia = async(req, res) => {
    const payload = {

        nama_sosial_media: req.body.nama_sosial_media
    }
    const where = {
        id_socmed: req.body.id_socmed,
    }
    try {
        const data = await Social_media.update(payload, { where });
        return res.json(success({ message: 'success,', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};