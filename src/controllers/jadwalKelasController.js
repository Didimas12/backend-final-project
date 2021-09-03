const { response } = require('express');
const { success, failed } = require('../../config/response');
const { Jadwal_kelas } = require('../models');

exports.getJadwalKelas = async(req, res) => {
    try {
        const data = await Jadwal_kelas.findAll();
        return res.json(success({ message: 'success', data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed', data: data }))
    }

}

exports.createJadwalKelas = async({ body }, res) => {
    const payload = {
        id_jadwal: body.id_jadwal,
        jadwal_kegiatan_kelas: body.jadwal_kegiatan_kelas,
        id_schedule: body.id_schedule,
        id_presensi: body.id_presensi,
        id_user: body.id_user
    }
    try {
        const data = await Jadwal_kelas.create(payload);
        return res.json(success({ message: 'success', data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed', data: data }))
    }
}

exports.updateJadwalKelas = async({ body }, res) => {
    const payload = {

        jadwal_kegiatan_kelas: body.jadwal_kegiatan_kelas,
        id_schedule: body.id_schedule,
        id_presensi: body.id_presensi,
        id_user: body.id_user

    }
    const where = {
        id_jadwal: body.id_jadwal
    }
    try {
        const data = await updateJadwalKelas.update(payload, { where })
        return res.json(success({ message: 'success', data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: 'failed', data: data }))
    }
}