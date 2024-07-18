const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const gamesRoutes = require('./routes/API/games');
const userRoutes = require('./routes/API/users');
app.use(express.json());

app.use('/api', gamesRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})