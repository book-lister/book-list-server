require('dotenv').config(); // allows us to use the environmental variables
const express = require('express');
const app = express();
const pg = require('pg');
const cors = require('cors');

const PORT = process.env.PORT;
// const connString = 'postgres://@localhost:5432/book_list';

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();

app.use(cors());
// add in body parser

app.get('/api/v1/books/:id', (req, res) => {
    client.query('SELECT * FROM books WHERE book_id = $1', [req.params.book_id])
        .then(data => res.send(data.rows))
        .catch(console.error);
});

// app.get('/', (req, res) => {
//     res.sendFile('index.html',{root:'.'});
// });

app.get('/api/v1/books', (req, res) => {
    // will query db for all cards
    client.query('SELECT book_id, title, author, image_url FROM books;')
        .then(data => res.send(data.rows));
});

app.get('/api/v1/books/:id', (req, res) => {
    // will query db for books by id
    // this is not showing up; need to add info here.
    client.query('SELECT book_id, title, author, image_url FROM books WHERE ;')
        .then(data => res.send(data.rows));
});

app.listen(PORT, () => {
    console.log(`listening for API requests to port ${PORT}`);
});