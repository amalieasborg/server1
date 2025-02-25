require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Serveren kører på port ${port}!. Api nøglen er: ${process.env.API_KEY}`);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})