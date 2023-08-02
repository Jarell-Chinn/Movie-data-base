-- ADD DATABASE(Drop old one)
DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

-- Access database with USE
USE movies_db;
-- Create table for movies 
CREATE TABLE movies (
    -- id of movie
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- name of movie
    movie_name VARCHAR(30)

);
-- Create table for reviews
CREATE TABLE reviews (
    -- id of review
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    review_text TEXT,

    -- movie id(foreign key)

    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL 
);