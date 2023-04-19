-- Create the database
CREATE DATABASE `jardinresa`;

-- Use the database
USE `jardinresa`;

-- Create the role table
CREATE TABLE `role` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Insert default roles
INSERT INTO `role` (`name`) VALUES ('admin'), ('user');

-- Create the user table
CREATE TABLE `user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE
);

-- Create the category table
CREATE TABLE `category` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Create the article table
CREATE TABLE `article` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `quantity` INT UNSIGNED NOT NULL DEFAULT 0,
  `category_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE
);

-- Create the state table
CREATE TABLE `state` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Insert default states
INSERT INTO `state` (`name`) VALUES ('reserved'), ('canceled'), ('fulfilled');

-- Create the reservation table
CREATE TABLE `reservation` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `article_id` INT UNSIGNED NOT NULL,
  `reservation_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `quantity` INT UNSIGNED NOT NULL,
  `state_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`state_id`) REFERENCES `state` (`id`) ON DELETE CASCADE
);