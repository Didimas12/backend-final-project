const { success, failed } = require('../../config/response');
const { Schedule } = require('../models');

exports.getSchedule = async(req, res) => {
    try {
        const data = Schedule.findAll();
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};

exports.createSchedule = async(req, res) => {
    const payload = {
        id_schedule: req.body.id_schedule,
        waktu_mulai: req.body.waktu_mulai,
        waktu_akhir: req.body.waktu_akhir,
        id_materi: req.body.id_materi,
        id_kelas: req.body.id_kelas
    }
    try {
        const data = await Schedule.create(payload);
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
};

exports.updateSchedule = async(req, res) => {
    const payload = {
        waktu_mulai: req.body.waktu_mulai,
        waktu_akhir: req.body.waktu_akhir,
        id_materi: req.body.id_materi,
        id_kelas: req.body.id_kelas
    }
    const where = {
        waktu_mulai: req.body.waktu_mulai,
    }
    try {
        const data = await Schedule.update(payload, { where });
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed' }));
    }
}