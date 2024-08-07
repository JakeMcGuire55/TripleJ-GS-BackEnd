const express = require('express');
const app = express();
const PORT = process.env.HEROKU_POSTGRESQL_CHARCOAL_URL || 3000;
require('dotenv').config();

const gamesRoutes = require('./routes/API/games');
// const usersRoutes = require('./routes/API/users');
app.use(express.json());

app.use('/api', gamesRoutes);
// app.use('/api', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})