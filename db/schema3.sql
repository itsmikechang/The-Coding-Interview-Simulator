DROP DATABASE IF EXISTS javascript_db;

CREATE DATABASE javascript_db;

USE javascript_db;

CREATE TABLE javascript (
  id INT(255) NOT NULL,
  que TEXT NOT NULL,
  a VARCHAR(222) NOT NULL,
  b VARCHAR(222) NOT NULL,
  ans VARCHAR(222) NOT NULL
);