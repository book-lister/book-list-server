# book-list-server

# Author
Alissa Beddow || Version: 1.0.0 

# Overview
Basic full stack application for a book list that renders books from a PostgreSQL database. 

# Getting Started

# Architecture

# Credits & Collaborations

# Task List
- create express app
    - that connects to a PG database
    - create database with books table
    - seed data
    - design schema for book listing
        - book_id as PRIMARY KEY
        - author
        - title
        - isbn
        - image_url
        - description
    - ROUTES
        - GET api/v1/books
        - GET api/v1/books/:user

# Task List
- Create index.html page
    - to show all books info
    - get data on load
    - add handlebars template for books

- Create script files
    - book.js
    - bookView.js

- Create book object to handle working with data from db
    - give .toHTML() method that returns a filled handlebars template
    - give .fetchAll method that queries api for book data
    - give .loadAll method that loads data from query into Books.all

- Create bookView object that 
    - has function initIndexPage
        - show book-container
        - show all books

- Create aboutView object that
    - has function initAboutPage
        - show about-container
        - Create css files
