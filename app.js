const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.json())
const { sequelize } = require('./src/models')
    // sequelize.sync({ force: true })

const userRoute = require('./src/routes/userRoute.js');
app.use('/user', userRoute);

const institusiRoute = require('./src/routes/institusiRoute');
app.use('/institusi', institusiRoute);

const jadwalKelasRoute = require('./src/routes/jadwalKelasRoute');
app.use('/jadwal', jadwalKelasRoute);

const kelasRoute = require('./src/routes/kelasRoute');
app.use('/kelas', kelasRoute);

const kotaAsalRoute = require('./src/routes/kotaAsalRoute');
app.use('/kotaasal', kotaAsalRoute);

const kotaSekarangRoute = require('./src/routes/kotaSekarangRoute');
app.use('/kotasekarang', kotaSekarangRoute);

const materiRoute = require('./src/routes/materiRoute');
app.use('/materi', materiRoute);

const pekerjaanRoute = require('./src/routes/pekerjaanRoute');
app.use('/pekerjaan', pekerjaanRoute);

const pendidikanRoute = require('./src/routes/pendidikanRoute');
app.use('/pendidikan', pendidikanRoute);

const presensiRoute = require('./src/routes/presensiRoute');
app.use('/presensi', presensiRoute);

const provinsiRouter = require('./src/routes/provinsiRouter');
app.use('/provinsi', provinsiRouter);

const roleRoute = require('./src/routes/roleRoute');
app.use('/role', roleRoute);

const scheduleRoute = require('./src/routes/scheduleRoute');
app.use('/schedule', scheduleRoute);

const sosialMediaRoute = require('./src/routes/socialMediaRoute');
app.use('/sosialmedia', sosialMediaRoute);

// server
app.listen(PORT, () => {
    console.log('server from: ' + PORT)
})