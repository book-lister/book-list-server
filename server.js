require('dotenv').config(); // allows us to use the environmental variables
const express = require('express');
const app = express();
const pg = require('pg');
const cors = require('cors');
// const fs = require('fs');
// const data = require('./books.json');

const PORT = process.env.PORT;
// const connString = 'postgres://@localhost:5432/book_list';

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();

app.use(cors());

// fs.readFile('./books.json', (err, JSON.stringify(data)) => {
//     if (err) throw (err);
//     console.log(data);
// });

app.get('/api/v1/books', (req, res) => {
    // will query db for all cards
    client.query('SELECT book_id, title, author, image_url FROM books;')
        .then(data => res.send(data.rows));
});

app.get('/api/v1/books/:id', (req, res) => {
    // will query db for cards sent to recipient
    // this is not showing up; need to add info here.
    res.send('will eventually send user book data');
});

app.listen(PORT, () => {
    console.log(`listening for API requests to port ${PORT}`);
});