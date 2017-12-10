const express = require('express');
const app = express();
const pg = require('pg');
// const fs = require('fs');
// const data = require('./books.json');

const PORT = 3000;
const connString = 'postgres://@localhost:5432/book_list';
const client = new pg.Client(connString);
client.connect();

// fs.readFile('./books.json', (err, JSON.stringify(data)) => {
//     if (err) throw (err);
//     console.log(data);
// });

app.get('/api/v1/books', (req, res) => {
    // will query db for all cards
    client.query('SELECT book_id, title, author, image_url FROM books;')
        .then(data => res.send(data.rows));
});

app.get('api/v1/books/:user', (req, res) => {
    // will query db for cards sent to recipient
    // this is not showing up; need to add info here.
    res.send('will eventually send user book data');
});

app.listen(PORT, () => {
    console.log(`listening for API requests to port ${PORT}`);
});