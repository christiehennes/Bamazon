DROP DATABASE IF EXISTS bamazon2;

CREATE DATABASE bamazon2;

USE bamazon2;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price INT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chocolate", "Food", 2.50, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chair", "Home", 75, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dress", "Clothing", 50, 100);
