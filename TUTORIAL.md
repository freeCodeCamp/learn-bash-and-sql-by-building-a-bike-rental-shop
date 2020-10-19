# Learn Bash and SQL by Building a Bike Rental Shop

> Welcome to the Bash and SQL lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello terminal` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. Log in to Psql

### 20.1

You are going to build a bike rental shop. It will have a database, and a bash script to interact with the database. Use the terminal to connect to PostgreSQL by entering `psql --username=freecodecamp --dbname=postgres`.

#### HINTS

- Type the above command into the terminal and press enter
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal and press enter

## 30. List Databases

### 30.1

List the databases with `\l` to see what databases are here.

#### HINTS

- Type `\l` into the psql prompt and press enter
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 40. Create Database `bikes`

### 40.1

You need your own database for the bike shop. Create a new database named `bikes`.

#### HINTS

- Use the `CREATE DATABASE` keywords
- Here's an example: `CREATE DATABASE database_name;`
- Type `CREATE DATABASE bikes;` into the psql prompt and press enter
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 50. List Databases

### 50.1

List databases again to make sure your database got created.

#### HINTS

- Use the **l**ist shortcut command
- Type `\l` into the psql prompt
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 60. Connect to `bikes`

### 60.1

Yup, there it is. **C**onnect to it so you can start building the structure of your bike shop database.

#### HINTS

- Use the **c**onnect shortcut command
- Add the database name to the command
- It's the `\c` command
- Here's an example: `\c database_name`
- Try entering `\c bikes` into the psql prompt
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 70. Create table `bikes`

### 70.1

Your database needs three tables. One for your bike inventory, one for your customers, and one for the bikes that are rented out. Create a table named `bikes` in your database for the inventory.

#### HINTS

- Use the `CREATE TABLE` keywords
- Don't forget the parenthesis
- Here's an example: `CREATE TABLE table_name();`
- Try entering `CREATE TABLE bikes();`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 80. Display the tables

### 80.1

**D**isplay the tables to make sure your table got created.

#### HINTS

- Use the **d**isplay shortcut command
- It's the `\d` command
- Type `\d` into the psql prompt and press enter
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 90. Add column `bike_id`

### 90.1

The table will have a few columns for bike information. First, is a unique ID column. Add a column to the `bikes` table named `bike_id`. Give it a type of `SERIAL` and make it a `PRIMARY KEY`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE bikes ADD COLUMN bike_id SERIAL PRIMARY KEY;`
- You can drop a column with `ALTER TABLE bikes DROP COLUMN bike_id;` if you need to try again
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 100. Display `bikes` Details

### 100.1

Use the **d**isplay command to view the details of the `bikes` table.

#### HINTS

- It's the `\d` command
- Add the table name to the command
- Try entering `\d bikes`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 110. Add `type` column

### 110.1

Looks like first column is set. Add a column named `type` for the type of bike. Make it a `VARCHAR(50)` and give it a constraint of `NOT NULL`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR(50)`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE bikes ADD COLUMN type VARCHAR(50) NOT NULL;`
- You can drop a column with `ALTER TABLE bikes DROP COLUMN type;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 120. Display `bikes` details

### 120.1

Display the details of the `bikes` table again.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d bikes`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 130. Add Column `size`

### 130.1

Add a column named `size` to the `bikes` table that is an `INT` and has the `NOT NULL` constraint. This will be for the size of each bike.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `INT`, and `NOT NULL` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE bikes ADD COLUMN size INT NOT NULL;`
- You can drop a column with `ALTER TABLE bikes DROP COLUMN size;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 140. Add Column `available`

### 140.1

Add another column to the table named `available`. Make it a `boolean` and has a constaint of `NOT NULL`. Also give it a default value of `TRUE`. This will be set to `false` when someone rents out a bike.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `BOOLEAN`, and `DEFAULT TRUE` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE DEFAULT;`
- Try entering `ALTER TABLE bikes ADD COLUMN available BOOLEAN DEFAULT TRUE;`
- You can drop a column with `ALTER TABLE bikes DROP COLUMN available;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 150. Display `bikes` details

### 150.1

Display the details of the `bikes` table again so you can make sure it's how you want it.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d bikes`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 160. Create Table `customers`

### 160.1

It's looking good. Create another table named `customers`. It will store a name and phone number for each customer that wants to rent a bike.

#### HINTS

- Use the `CREATE TABLE` keywords
- Don't forget the parenthesis
- Here's an example: `CREATE TABLE table_name();`
- Try entering `CREATE TABLE customers();`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 170. Add Column `customer_id`

### 170.1

Add a `customer_id` column to your new table that is a type of `SERIAL` and make it a `PRIMARY KEY`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE customers ADD COLUMN customer_id SERIAL PRIMARY KEY;`
- You can drop a column with `ALTER TABLE customers DROP COLUMN customer_id;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 180. Display `customers` Details

### 180.1

Display the details of the `customers` table so you can make sure your new column is there.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d customers`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 190. Add Column `phone`

### 190.1

Add a column named `phone` for customers phone numbers. Make it a varying character that has a maximum length of `15` characters. Also make sure it can't be null, and that it has to be unique.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR()`, `NOT NULL`, and `UNIQUE` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE customers ADD COLUMN phone VARCHAR(15) NOT NULL UNIQUE;`
- You can drop a column with `ALTER TABLE customers DROP COLUMN phone;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 200. Add Column `name`

### 200.1

Add the last column. Call it `name` and make it a `VARCHAR(40)` that can't be null.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE customers ADD COLUMN name VARCHAR(40) NOT NULL;`
- You can drop a column with `ALTER TABLE customers DROP COLUMN name;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 210. Display `customers` Details

### 210.1

Display the details of the `customers` table.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d customers`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 220. Create Table `rentals`

### 220.1

I think that table is finished. Lastly, you need a table to store which bikes are rented and to whom. Create a new table named `rentals`.

#### HINTS

- Use the `CREATE TABLE` keywords
- Don't forget the parenthesis
- Here's an example: `CREATE TABLE table_name();`
- Try entering `CREATE TABLE rentals();`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 230. Add Column `rental_id`

### 230.1

Add a `rental_id` column to your new table. Make it automatically increment with `SERIAL` and make it the primary key for this table.

#### HINTS

- The other two properties are `SERIAL` and `PRIMARY KEY`
- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN rental_id SERIAL PRIMARY KEY;`
- You can drop a column with `ALTER TABLE rentals DROP COLUMN rental_id;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 240. Display `rentals` Details

### 240.1

Display the details of the `rentals` table.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 250. Add Column `customer_id`

### 250.1

Next, you need a column for the customer who is renting a bike. Add column named `customer_id`. This will have an id of a customer from the customers table. Make the column an `INT` and `NOT NULL` to start.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `INT`, and `NOT NULL` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN customer_id INT NOT NULL;`
- You can drop a column with `ALTER TABLE rentals DROP COLUMN customer_id;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 260. Set `customer_id` Foreign Key

### 260.1

Make the column you just added a foreign key that references the `customer_id` column from the `customers` table. Here's an example of how you can do that:

```sql
ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);
```

#### HINTS

- Without the keywords, it looks like tihs: `rentals customer_id customers(customer_id)`
- Try entering `ALTER TABLE rentals ADD FOREIGN KEY(customer_id) REFERENCES customers(customer_id);`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 270. Display `rentals` Details

### 270.1

Display the details of the `rentals` table to make sure your key is set.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 280. Add Column `bike_id`

### 280.1

Alright, you need another column so you know what bike a customer is renting. Add a column named `bike_id` and make it an `INT` and `NOT NULL`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `INT`, and `NOT NULL` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN bike_id INT NOT NULL;`
- You can drop a column with `ALTER TABLE rentals DROP COLUMN bike_id;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 290. Add `bike_id` Foreign Key

### 290.1

Make that column a foreign key that references the `bike_id` column from the `bikes` table so you know what bike the id is for.

#### HINTS

- Here's the example again: `ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);`
- Without the keywords, it looks like tihs: `rentals bike_id bikes(bike_id)`
- Try entering `ALTER TABLE rentals ADD FOREIGN KEY(customer_id) REFERENCES customers(customer_id);`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 300. Display `rentals` Details

### 300.1

Display the details of the `rentals` table so you can make sure the key is correct.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 310. Add `date_rented` Column

### 310.1

Moving along. You want to know when a customer rents a bike, and when it gets returned. Add a column to your `rentals` table named `date_rented` that's a type of `DATE`. Make sure the entry can't be null, and give it a default value of `NOW()`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `DATE`, `NOT NULL`, and `DEFAULT NOW()` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN date_rented DATE NOT NULL DEFAULT NOW();`
- You can drop a column with `ALTER TABLE rentals DROP COLUMN date_rented;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 320. Display `rentals` Details

### 320.1

Display the details of the `rentals` table again.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 330. Add Column `date_returned`

### 330.1

Lastly, you need column for when a customer returns a bike. Add a column named `date_returned` that's a type of `DATE`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `DATE` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE;`
- Try entering `ALTER TABLE rentals ADD COLUMN date_returned DATE;`
- You can drop a column with `ALTER TABLE rentals DROP COLUMN date_rented;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 340. Display `rentals` Details

### 340.1

View the details of the table again.

#### HINTS

- It's the `rentals` table
- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 350. Display Tables

### 350.1

Okay, I think it looks good. Display all the tables so you can see what you ended up with.

#### HINTS

- Use the **d**isplay shortcut command
- It's the `\d` command
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 360. Insert 27 inch Mountain Bike

### 360.1

I think the structure of your database is set. You have nine bikes in your inventory. Add the first one to your `bikes` table. It has a `type` of `Mountain` and a `size` of `27`. Make sure to put your `VARCHAR` values in single quotes. The `bike_id` and `available` columns should be filled in automatically, so you don't need to worry about those.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Mountain', 27);`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 370. Select all from Bikes

### 370.1

View all the columns in your bikes table with `SELECT`.

#### HINTS

- Use `*` to view all the columns
- Here's an example: `SELECT * FROM table_name;`
- Try entering `SELECT * from bikes;`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 380. Insert 28 inch Mountain Bike

### 380.1

Looks like it's all working, the `bike_id` and `available` columns were filled in automatically. Insert another bike. Give it a `type` of `Mountain` and a `size` of `28`.

#### HINTS

- Make sure to put your `VARCHAR` values in single quotes
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Mountain', 28);`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 390. Insert 29 inch Mountain Bike

### 390.1

Add another `Mountain` bike to your inventory. Make it a `29` inch bike.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Make sure to put your `VARCHAR` values in single quotes
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Mountain', 29);`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 400. Insert 27 inch Road Bike

### 400.1

Add a `27` inch `Road` bike to the table.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Make sure to put your `VARCHAR` values in single quotes
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Road', 27);`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 410. Select all from Bikes

### 410.1

Use `SELECT` to view all the data in the `bikes` table again.

#### HINTS

- Use `*` to view all the columns
- Here's an example: `SELECT * FROM table_name;`
- Try entering `SELECT * from bikes;`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 420. Insert 28 and 29 inch Road Bikes

### 420.1

Add `28` and `29` inch `Road` bikes to your inventory. Try to add them both with one command.

#### HINTS

- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value), (value, value);`
- Make sure to put your `VARCHAR` values in single quotes
- Try entering `INSERT INTO bikes(type, size) VALUES('Road', 28), ('Road', 29);`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 430. Insert 19, 20, 21 inch BMX Bikes

### 430.1

There's three more bikes. Add `19`, `20`, and `21` inch `BMX` bikes to your table. Try to add them with one command.

#### HINTS

- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value), (value, value), (value, value);`
- Make sure to put your `VARCHAR` values in single quotes
- Try entering `INSERT INTO bikes(type, size) VALUES('BMX', 19), ('BMX', 20), ('BMX', 21);`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 440. Select all from Bikes

### 440.1

View all the data in your bikes table.

#### HINTS

- Use `SELECT` with `*` to view all the col
- Here's an example: `SELECT * FROM table_name;`
- Try entering `SELECT * from bikes;`
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first
- If the tests aren't running automatically, quit psql with \q and try logging in again

## 450. Split Terminal

### 450.1

Okay, you have a database structure and your inventory is added. For the rest of the tutorial, I recommend leaving that terminal open and connected and that you should "split" the terminal so you have a second one that you can use for bash commands. Do that by clicking the "hamburger" menu at the top left of the window, going to the "terminal" section, and clicking "split terminal". After you have opened it, use the `touch` command to create a file named `bike-shop.sh` in the `project` folder.

#### HINTS

- Try entering `touch bike-shop.sh` in the terminal
- Make sure you are in the `project` folder first
- If you opened a new terminal instead of splitting it, you can close it by entering `exit` and try again
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you want

## 460. Add shebang!

### 460.1

This `bike-shop.sh` will be the program for your bike rental shop. Open the file in the editor, making it and CodeRoad visible. Then, and add a "shebang" at the top of the file so it uses `bash` when it's executed. If you don't remember, it looks like this: `#! /bin/bash`.

#### HINTS

- Add `#! /bin/bash` to the top of your `bike-shop.sh` file
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you need to

## 470. Add Title

### 470.1

You should now have two terminals open, your `bike-shop.sh` file open, and CodeRoad opened in your environment and they should all be visible. It makes for a lot on the screen, but it will be easier for working with things later on. The first thing you want your program to do is display a title. Use `echo` to output `~~~~~ Bike Rental Shop ~~~~~` in your script file.

#### HINTS

- Add the suggested text to your `bike-shop.sh` file
- Add `echo "~~~~~ Bike Rental Shop ~~~~~"` in the designated area
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you need to

## 480. Change file permissions

### 480.1

Use the terminal (not the psql one) to make your file executable. Do that with the `chmod` command. Add the `+x` flag and `bike-shop.sh` to the command so your file can be executed.

#### HINTS

- Try entering `chmod +x bike-shop.sh` in the terminal
- Make sure you are in the `project` folder first

## 490. Run the file

### 490.1

Type `./bike-shop.sh` in the terminal to run your script.

#### HINTS

- Make sure you are in the `project` folder first

## 510. Create Main Menu

### 510.1

:smile: Create an empty function named `MAIN_MENU` in the specified area. This will have a few options to enter when the script runs to rent or return a bike.

#### HINTS

- Add `MAIN_MENU() {}` to the script

## 520. Add Greeting

### 520.1

In your function, echo the text `How may I help you?` so that there's a greeting when you go to the menu.

#### HINTS

- Add `echo "How may I help you?"` in the designated area

## 530. Call `MAIN_MENU` Function

### 530.1

Call your `MAIN_MENU` at the bottom of the file so the function runs when you start the script.

#### HINTS

- Add `MAIN_MENU` at the bottom of the file

## 540. Run the file

### 540.1

Run the file in the terminal again so you can see what it is outputting.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 550. Add `clear`

### 550.1

Okay, you are getting somewhere. Add `clear` at the top of the file so that when you run the script, you don't see all the old terminal prompts.

#### HINTS

- Add `clear` in the designated area

## 555. Run the file

### 555.1

Run the file in the terminal again to see it now.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 560. Add Line Break

### 560.1

That's pretty slick, but it could use some spacing. Add the line break characters (`\n`) at the end of the title so it adds a space between the title and greeting.

#### HINTS

- Make the title line look like this: `echo "~~~~~ Bike Rental Shop ~~~~~\n"`

## 570. Run the file

### 570.1

Run the file again to see if it worked.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 580. View the `echo` manual

### 580.1

Hmm. That's not what I was hoping for. Use the terminal to view the **man**ual of the `echo` commmand to see if you can find anything to help.

#### HINTS

- Type `man echo` into the terminal and press enter

## 590. Add `-e` Flag

### 590.1

Do you see any flags that might help in there? The `-e` flag says, "enable interpretation of backslash escapes". That sounds promising. Add that flag to the echo command of the title.

#### HINTS

- Make the title line look like this: `echo -e "~~~~~ Bike Rental Shop ~~~~~\n"`

## 600. Run the file

### 600.1

Run the file again to see if it's working now.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 610. Prettify the Greeting

### 610.1

It worked :smile: Add the `-e` flag to the greeting command and put a new line at the end of that text as well. The greeting is the `How may I help you?` line.

#### HINTS

- Make the line look like this: `echo -e "How may I help you?\n"`

## 620. Run the file

### 620.1

Run the file again to see the spacing.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 630. Add `MAIN_MENU` Options

### 630.1

Okay, it's coming along. Add another `echo` command to the function. Make it output text that looks like this:

```sh
1. Rent a bike
2. Return a bike
3. Exit
```

#### HINTS

- Use the `echo` command with the `-e` flag and line breaks (`\n`) to produce the suggested output
- Without the words, it looks like this: `echo -e "1. \n2. \n3. "`
- Run your script if you need to see if the output matches
- Add `echo -e "1. Rent a bike\n2. Return a bike\n3. Exit"` to your function

## 640. Run the file

### 640.1

Run the file to make sure it worked.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 650. Read `MAIN_MENU_SELECTION`

### 650.1

Okay, you have some options displaying. Next, you need to get input from whoever is using the program. Use the `read` command to read input into a variable called `MAIN_MENU_SELECTION`.

#### HINTS

- Here's what the code looks like: `read MAIN_MENU_SELECTION`
- Add the code in the designated area

## 660. Add `RENT_MENU`

### 660.1

When an option gets entered, you need to take a user to one of those other menus. Add an empty `RENT_MENU` function in the designated area for when a user enters the option to rent a bike.

#### HINTS

- Add `RENT_MENU() {}` in the designated area

## 670. Add `RENT_MENU` text

### 670.1

For the time being, just echo out `Rent Menu` in the function so you can see if it's working.

#### HINTS

- Don't use any flags with the command
- Add `echo "Rent Menu"` in the designated area

## 680. Add `RETURN_MENU` function

### 680.1

Add an empty `RETURN_MENU` function to your script for when a user enters the option to return a bike.

#### HINTS

- Add `RETURN_MENU() {}` in the designated area

## 690. Add `RETURN_MENU` text

### 690.1

echo `Return Menu` in the function you just added. You will probably change these later.

#### HINTS

- Don't use any flags with the command
- Add `echo "Return Menu"` in the designated area

## 700. Add `EXIT` function

### 700.1

Add an empty `EXIT` fuction to the script for when a user wants to exit the program.

#### HINTS

- Add `EXIT() {}` in the designated area

## 710. Add `EXIT` Message

### 710.1

This one probably doesn't need a placeholder message. Echo the text `Thank you for stopping in.` in the `EXIT` function.

#### HINTS

- Don't use any flags with the command
- Add `echo "Thank you for stopping in."` in the designated area

## 720. Add case Statement to `MAIN_MENU`

### 720.1

When a user enters an option at the main menu, you want to take them to the appropraite sub-menu. A `case` statement is perfect for this. Here's an example:

```sh
case EXPRESSION in
  PATTERN) STATEMENTS ;;
  PATTERN) STATEMENTS ;;
  *) STATEMENTS ;;
esac
```

The expression you want is the `$MAIN_MENU_SELECTION` variable. You are expecting it to be a `1`, `2`, or `3` for your various menus. Add a `case` statement that takes users to their corresponding menus, and back to the `MAIN_MENU` when the variable isn't a `1`, `2`, or `3`.

#### HINTS

- Here's a start:
  ```sh
  case $MAIN_MENU_SELECTION in
    1) RENT_MENU ;;
  ```
- Add this case statement;
  ```sh
  case $MAIN_MENU_SELECTION in
    1) RENT_MENU ;;
    2) RETURN_MENU ;;
    3) EXIT ;;
    *) MAIN_MENU ;;
  esac
  ```

## 730. Test the `MAIN_MENU` Options

### 730.1

Run the script a few times and try out the different menus.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 740. Create `SHOW_TITLE` function

### 740.1

It’s looking good :smile: I want to clear the text at each menu so the old options aren’t there, but still display the title. Wrap the two commands to clear the screen and show the title in a function named `SHOW_TITLE`.

#### HINTS

- Put the `clear` and `echo` commands at the top in a function named `SHOW_TITLE`
- It should look like this:
  ```sh
  SHOW_TITLE() {
    clear
    echo -e "~~~~~ Bike Rental Shop ~~~~~\n"
  }
  ```

## 750. Add title screen to all menus

### 750.1

Call the `SHOW_TITLE` function at the top of each of the four menus so it clear the screen at each menu.

#### HINTS

- The four functions are `MAIN_MENU`, `RENT_MENU`, `RETURN_MENU`, and `EXIT`
- Place the text `SHOW_TITLE` at the top of each function to display the title screen

## 760. Run the script

### 760.1

Run the script to make sure the title is showing up in the menus. Be sure to check the `EXIT` option.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 770. Make your exit function sleep

### 770.1

I want you to add a few commands to make exiting a little more pleasant. First, make the `EXIT` function pause for `2` seconds with the `sleep` command.

#### HINTS

- Use the `sleep` command
- Add the number of seconds to the command
- Add `sleep 2` at the bottom of the `EXIT` function

## 780. Clear before exiting

### 780.1

Next, `clear` the screen after sleep commmand you just entered.

#### HINTS

- Add the `clear` command in the designated area

## 790. Make your exit function sleep

### 790.1

Finally, run the `exit` command at the end of the function to make the program exit.

#### HINTS

- Add `exit` in the designated area

## 800. Test the `EXIT` function

### 800.1

Run the script and test out the `EXIT` menu. It should give a nicer experience now :smile:

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 810. View the psql help menu

### 810.1

Okay, the exit menu looks good. Now you need to finish up the other two menus. When you go to the "rent" menu, you will need to display the bikes available so you can pick one to rent. How on earth can you do that? In your bash terminal, view the `help` menu of the `psql` command to see if there's anything in there.

#### HINTS

- Use the `--help` flag with the command
- Enter `psql --help` into the terminal

## 820. Enter a psql command from the terminal

### 820.1

At the top of the menu there's a `-c` option to run a command and exit. That might help you out. Why don't you try it in the terminal first. Here's how I think that might look:

```sh
psql --username=your_username --dbname=database_name -c "SQL COMMAND;"
```

Your username is `freecodecamp` and the database name is `bikes`. In the terminal (not the psql one), run the command `SELECT * FROM bikes;` using the example above to see if you can get all the bikes from your database.

#### HINTS

- Enter `psql --username=freecodecamp --dbname=bikes -c "select * from bikes;"` into the terminal

## 823. Enter a psql command from the terminal

### 823.1

Impressive. Except there's some settings or something that came back with the result at the top there. I saw a `-X` flag in that menu. Run the same command except add that flag right after `psql`. It should ignore those settings.

#### HINTS

- That's a capital `X`
- Enter `psql -X --username=freecodecamp --dbname=bikes -c "SELECT * FROM bikes;"` in the terminal

## 830. Enter a psql command from your script

### 830.1

Okay, that's the command you can use to get data from the database. Back in your script file, `echo` that command instead of `Rent Menu`. Put the command in a subprocess, like this: `$(COMMAND)`, so it will run the command and then echo the result.

#### HINTS

- Change the suggested line to this: `echo $(psql -X --username=freecodecamp --dbname=bikes -c "select * from bikes;")`

## 840. Run your script

### 840.1

Run your script and go to the rent menu to see what you get.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 845. View the psql Help Menu

### 845.1

Awesome! It’s all on one line, but I think you can work with that if you can just get rid of the column titles and that last part that says the number of rows. Check the `psql` help menu again.

#### HINTS

- Enter `psql --help` in the terminal

## 850. Add tuples-only Flag

### 850.1

There's a flag that says "print rows only". Add that flag to your command.

#### HINTS

- The flag is `--tuples-only`
- Add the flag between your database and `-c`
- Make it look like this: `echo $(psql -X --username=freecodecamp --dbname=bikes --tuples-only -c "select * from bikes;")`

## 860. Run your script

### 860.1

Run the script again and go to the rent menu to see if those two pieces of information are gone.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 920. Create `PSQL` Variable

### 920.1

You are going to need to query the database many more times so I want you to make a variable for part of the command. At the top of your script, create a variable named `PSQL` and set the value to the part of the command that connects to your database. Basically, it should be everything except the actual query so you can use it like this `$PSQL "SELECT * FROM bikes;"` Be sure to put the variable in double quotes.

#### HINTS

- You want the variable to be everything from `psql` to `-c`
- Be sure to put it all in double quotes
- The part you want the variable to be is `"psql -X --username=freecodecamp --dbname=bikes --tuples-only -c"`
- Add this at the top of the file: `PSQL="psql -X --username=freecodecamp --dbname=bikes --tuples-only -c"`

## 930. Use `PSQL` Variable

### 930.1

In your script, replace the first part of your `psql` command with your new variable.

#### HINTS

- It should look like this: `$($PSQL "SELECT * FROM bikes;")`

## 940. Run the script

### 940.1

Run the script and go to the rent menu to make sure it's still working.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 970. Create `AVAILABLE_BIKES` Variable

### 970.1

Okay, what's next. Instead of echoing all that data, why don't you put it in a variable named `AVAILABLE_BIKES`.

#### HINTS

- Don't use `echo`, put the result in a variable named `AVAILABLE_BIKES`
- Give it another try
- Adjust the suggested line to this: `AVAILABLE_BIKES=$($PSQL "SELECT * FROM bikes;")`

## 980. Echo `AVAILABLE_BIKES`

### 980.1

Why don't you echo the variable now below that. This is finicky stuff, so you want to make sure it hasn't broken. Make sure to put it in double quotes.

#### HINTS

- Add this to the suggested area: `echo "$AVAILABLE_BIKES"`

## 990. Run your script

### 990.1

Run your script and go to the rent menu to make sure it's still working.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1000. Select Columns from Bikes in psql Prompt

### 1000.1

I guess the double quotes made it display better :smile: You only want to show the rows and columns that matter. In your psql prompt that is still connected to the database. Enter a command to get only the columns and rows you would want to show a customer. You only want the rows where the bike is available, and the columns for the `bike_id`, `type`, and `size`.

#### HINTS

- If you don't have a psql prompt open, I recommend "splitting" the terminal and reconnecting
- You can reconnect with `psql -U freecodecamp bikes`
- Use the `SELECT`, `FROM`, and `WHERE` keywords
- The `WHERE` condition should be `available='t'`
- Enter `SELECT bike_id, type, size FROM bikes WHERE available='t';` in the psql prompt

## 1010. Add the command to your script

### 1010.1

That's the query you want in your script to only display the info needed. Add it in place of your query for the `AVAILABLE_BIKES`.

#### HINTS

- Change the query in the `AVAILABLE_BIKES` variable to the one you just entered
- Make the suggested line look like this: `AVAILABLE_BIKES=$($PSQL "SELECT bike_id, type, size FROM bikes WHERE available='t';")`

## 1020. Run the script

### 1020.1

Run the script and go to the rent menu to see the output.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1030. Set available to false

### 1030.1

Okay, now when you show the available bikes, you don't see the `available` column. Back in the psql terminal, set `available` to `false` for all the bikes so you can see what happens if there's no bikes available.

#### HINTS

- Use the `UPDATE`, `SET` and `WHERE` keywords
- You want to `SET` available to false `WHERE` available is true
- Enter `UPDATE bikes SET available='f' WHERE available='t';` in the psql prompt
- If you don't have a psql prompt open, I recommend "splitting" the terminal and reconnecting
- You can reconnect with `psql -U freecodecamp bikes`

## 1040. Run the script

### 1040.1

Run the script and go to the rent menu.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1050. Add if condition

### 1050.1

Now there's nothing showing. You could probably add a condition for when there's no bikes available. Add an `if` condition that checks if the `AVAILABLE_BIKES` variable is empty and, if it is, go to the `MAIN_MENU`. Here's an example:

```sh
if [[ CONDITION ]]
then
  STATEMENTS
fi
```

Use the `-z` operator to check if your variable is empty.

#### HINTS

- The condition looks like this `if [[ -z $AVAILABLE_BIKES ]]`
- You want to run `MAIN_MENU` if the condition is true
- Run your script to see if it's working
- Add this code in the suggested area:
  ```sh
  if [[ -z $AVAILABLE_BIKES ]]
  then
    MAIN_MENU
  fi
  ```

## 1060. Run the script

### 1060.1

Run the script and go to the rent menu to see if you are sent back to the main menu when there's no bikes available. Stop the script when you are done with `control+c` or using the `Exit` option.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1070. Add argument to `MAIN_MENU`

### 1070.1

It looks like it works, but I think you should have an option when you go to the main menu to display a message. Add a paramenter to where you call `MAIN_MENU` that says `"Sorry, we don't have any bikes available right now."`. Basically, just put that text after the call. You will adjust the function to print that parameter in the next step.

#### HINTS

- Make the suggested line look like this: `MAIN_MENU "Sorry, we don't have any bikes available right now."`

## 1080. Add error message to `MAIN_MENU`

### 1080.1

Parameters can be accessed with `$`. The first one would be `$1`. Add an `if` condition to your `MAIN_MENU` function that checks if there's a parameter. If there is, `echo` it. Don't use any quotes or flags in the echo command.

#### HINTS

- The condition you want is `if [[ $1 ]]`
- In the `then`, echo `$1`
- Run your script and go to the rent menu if you want to see if it's working
- Add this code in the suggested area:
  ```sh
  if [[ $1 ]]
  then
    echo $1
  fi
  ```

## 1090. Run the script

### 1090.1

Run the script and go to the rent menu. It should take you to the main menu and give your message, be sure to close the script when you are done.

#### HINTS

- You can use `ctrl+c` to close a running script
- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1095. Set bike availiabity to true

### 1095.1

Excellent :smile: In the psql prompt, set the bike availability back to true for all the bikes so you can continue on with the rest of the renting functionality.

#### HINTS

- Use the `UPDATE`, `SET` and `WHERE` keywords
- You want to `SET` available to true `WHERE` available is false
- Enter `UPDATE bikes SET available='t' WHERE available='f';` in the psql prompt
- If you don't have a psql prompt open, I recommend "splitting" the terminal and reconnecting
- You can reconnect with `psql -U freecodecamp bikes`

## 1100. Add else to `RENT_MENU`

### 1100.1

So you added an `if` to send people to the main menu if there's no bikes. Add an `else` to that `if` statement for when there is bikes. Put that existing command to echo the bikes in the else area.

#### HINTS

- Here's an example:
  ```sh
  if [[ CONDITION ]]
  then
    STATEMENTS
  else
    STATEMENTS
  fi
- Make the else area look like this:
  ```sh
  else
    echo "$AVAILABLE_BIKES"
  fi
  ```

## 1110. Echo Bikes Available Text

### 1110.1

Right before you echo all the bikes, echo this message `Here are the bikes we have available:`. Put a new line at the end of messsage.

#### HINTS

- Don't forget the `-e` flag and the new line at the end
- Add this code in the suggested area: `echo -e "Here are the bikes we have available:\n"`

## 1130. Run the script

### 1130.1

Run the script and go to the rent menu to see the bikes.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1140. Pipe Available Bikes into While loop

### 1140.1

Okay, this isn't bad. I wonder if you can make this a little prettier. Instead of directly echoing your bikes to the screen, `pipe` the output into a `while` loop that reads each word. Here's how that looks:

```sh
echo "$AVAILABLE_BIKES" | while read BIKE_ID BAR1 TYPE BAR2 SIZE
do
  echo $BIKE_ID $TYPE $SIZE
done
```

It will read the first line of your results into those five variables for you to use in the `do` area. When it gets to a new line, it reads the next five words into the variables again and repeats until there are no new lines left.

#### HINTS

- Add the code above to the suggested area

## 1142. Run the script

### 1142.1

Run the script to see if your information is being printed to the screen.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1145. Adjust Available Bikes Display

### 1145.1

That looks pretty good. Adjust the echo command so that each line looks like this: `BIKE_ID) SIZE" TYPE Bike`. Here's what the first one would look like: `1) 27" Mountain Bike`. You need to use double quotes so you can escape a certain character.

#### HINTS

- Be sure to use double quotes and escape the `"` after `SIZE`
- Run your script and check the output if you want to see if it matches the suggestion
- You can do this! Give it another try
- Make the suggested line look like this: `echo "$BIKE_ID) $SIZE\" $TYPE Bike"`

## 1150. Run the script

### 1150.1

Run the script again to see what it looks like now.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1160. Ask for Bike To Rent

### 1160.1

Much better. Add another echo command after your loop with the message: `"Which one would you like to rent?"`. Put a new line character at the beginning of the message.

#### HINTS

- Use the `echo` command with `-e` flag
- Be sure to add the new line at the beginning of the message
- Add this to the suggested area: `echo -e "\nWhich one would you like to rent?"`

## 1170. read `BIKE_ID_TO_RENT`

### 1170.1

Add a command to `read` input into a variable named `BIKE_ID_TO_RENT`.

#### HINTS

- Use the `read` command to get input
- Add this to the suggested area: `read BIKE_ID_TO_RENT`

## 1180. Create `BIKE_AVAILABILITY` Variable

### 1180.1

A user could enter anything they want there. You need to make sure that what is entered is a `bike_id` and that the bike is available to rent. Create a new variable named `BIKE_AVAILABILITY`. Use it to make a query to your database that selects the `available` column from the `bikes` table for the bike with the id of your `$BIKE_ID_TO_RENT` variable. Use your `$PSQL` variable and a subprocess like you did for your other queries.

#### HINTS

- Create a query like you did for the others
- Here's an hint: `BIKE_AVAILABILITY=$($PSQL "QUERY HERE")`
- Use the `SELECT`, `FROM` and `WHERE` keywords
- You only want the `available` column
- Use the where condition `bike_id=$BIKE_ID_TO_RENT`
- Add this to the suggested area: `BIKE_AVAILABILITY=$($PSQL "SELECT available FROM bikes WHERE bike_id=$BIKE_ID_TO_RENT;")`

## 1190. Echo `BIKE_AVAILABILITY` Variable

### 1190.1

Echo your variable so you can see what you are getting.

#### HINTS

- Add `echo $BIKE_AVAILABILITY` in the suggested area

## 1200. Run the script

### 1200.1

Run the script, go to the rent menu, and enter a bike that is available to see if that variable is set to something.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1210. Add catch for unavailable bikes

### 1210.1

So if a bike is available, the variable will be `t`. It will be `f` if it's not available and empty if you enter something that doesn't exist. Add an `if` statement that sends users to the `MAIN_MAIN` with the message `"That bike is not available."` when your variable `== "f"` or is empty. Here's an example:

```sh
if [[ CONDITION1 || CONDITION2 ]]
then
  STATEMENTS
fi
```

#### HINTS

- Use the `-z` operator to see if something is empty
- Use `== "f"` operator to see if something equals `f`
- Send users to the main menu with the suggested message if one of the conditions is met
- The conditions can look like this: `if [[ $BIKE_AVAILABILITY == "f" || -z $BIKE_AVAILABILITY ]]`
- Add this to the suggested area:
  ```sh
  if [[ $BIKE_AVAILABILITY == "f" || -z $BIKE_AVAILABILITY ]]
  then
    MAIN_MENU "That bike is not available."
  fi
  ```

## 1220. Remove echo `BIKE_AVAILABILITY`

### 1220.1

Remove the line where you echo if the bike is available or not since you don't actually want to display that.

#### HINTS

- Remove the `echo $BIKE_AVAILABILITY` line

## 1230. Run the script

### 1230.1

Run the script and go to the rent menu, put in a bike that doesn't exist.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1240. Ask for phone number

### 1240.1

If a bike isn't available or doesn't exist, they will be sent to the main menu. If they enter a bike that is available, you need to find out their phone number so you can see if they are an existing customer or not. Echo the text `"What's your phone number?"`

#### HINTS

- Put the command in double quotes so that apostrophe shows up
- Add this to the suggested area: `echo "What's your phone number?"`

## 1250. read `PHONE_NUMBER`

### 1250.1

Read user input into a `PHONE_NUMBER` variable.

#### HINTS

- Use the `read` command to get input
- Add this to the suggested area: `read PHONE_NUMBER`

## 1260. Look for customer name

### 1260.1

Okay, you have their phone number, now you need to see if they are an existing customer. Create a `CUSTOMER_NAME` variable that queries the database. You want to get the `name` column from the `customers` table where `phone` is equal to the phone number they input, so use the `PHONE_NUMBER` variable. Be sure to put the variable in single quotes since it is a `VARCHAR` in the database.

#### HINTS

- Make a query with the structure you used for the other ones
- Here's an example: `CUSTOMER_NAME=$($PSQL "COMMAND HERE")`
- Use the `SELECT`, `FROM` and `WHERE` keywords for your command
- The condition you want is `phone='$PHONE_NUMBER'`
- You only want the `name` column from the `customers` table
- Add this to the suggested area: `CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone='$PHONE_NUMBER';")`

## 1270. Ask for new customers name

### 1270.1

If they aren't an existing customer, you need to find out their name so you can add them in the database. Add an if condition that echo's `"What's your name?"` if your `$CUSTOMER_NAME` variable is empty.

#### HINTS

- Add an `if` condition the checks if `-z $CUSTOMER_NAME`
- Your `echo` command doesn't need any flags
- It does need double quote though so the apostrophe works
- Here's an example:
  ```sh
  if [[ CONDITION ]]
  then
    STATEMENTS
  fi
  ```
- Echo the suggested message in the statements area
- Add this to the suggested area:
  ```sh
  if [[ -z $CUSTOMER_NAME ]]
  then
    echo "What's your name?"
  fi
  ```

## 1280. read `CUSTOMER_NAME`

### 1280.1

Get their name by reading it into a `CUSTOMER_NAME` variable.

#### HINTS

- Use the `read` command
- Add `read CUSTOMER_NAME` to the suggested area

## 1290. Insert new customer into the database

### 1290.1

Now that you know their name and phone number, you can add them to the database. Create a `INSERT_CUSTOMER_RESULT` variable that inserts a new customer using the `$CUSTOMER_NAME` and `$PHONE_NUMBER` variables. Be sure to put them both in single quotes.

#### HINTS

- Use same structure for the command that you have used for the other commands
- Here's an example: `INSERT_CUSTOMER_RESULT=$($PSQL "COMMAND HERE")`
- The command looks similar to this: `INSERT INTO customers(column1, column2) VALUES('value1', 'value2')`
- Use your varables to insert their data
- Here's the command: `INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME', '$PHONE_NUMBER')`
- Add this to the suggested area: `INSERT_CUSTOMER_RESULT=$($PSQL "INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME', '$PHONE_NUMBER');")`

## 1300. Run the script

### 1300.1

Run your script and go to the rent menu. Then, enter `1` to rent that bike. Enter `555-5555` for the phone number, and a customer name of your choosing after that.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Follow the instructions closely
- Make sure to use `555-5555` for the phone number
- Make sure you are in the `project` folder first

## 1310. Check for new customer in psql prompt

### 1310.1

You should now have a new customer in the database. In your psql terminal, view all the data in the `customers` table to see if it's there.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Use `*` to view all the columns
- Enter `SELECT * FROM customers;` in the psql prompt
- If you don't have a psql prompt open, I recommend "splitting" the terminal and reconnecting
- You can reconnect with `psql -U freecodecamp bikes`

## 1320. Get `CUSTOMER_ID`

### 1320.1

Looks like the customer got inserted. Back in your script, now that you know a customer has been created, you need to find out their ID so you can add the bike they rented to the `rentals` table. Create a variable named `CUSTOMER_ID` that queries the database to get the `customer_id` column for the customer with `$PHONE_NUMBER`.

#### HINTS

- Use same structure for the command that you have used for the other commands
- Here's an example: `CUSTOMER_ID=$($PSQL "COMMAND HERE")`
- The command looks similar to this: `SELECT column FROM table WHERE phone='$PHONE_NUMBER';`
- Add this to the suggested area: `CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone='$PHONE_NUMBER';")`

## 1330. Add rental to the database

### 1330.1

You need the `customer_id` and `bike_id` to add a rental to the table. You have two variables that contain those. In your script, create a `ADD_RENTAL_RESULT` variable that adds a new rental to the database.

#### HINTS

- Use same structure for the command that you have used for the other commands
- Here's an example: `ADD_RENTAL_RESULT=$($PSQL "COMMAND HERE")`
- The command looks similar to this: `INSERT INTO rentals(column1, column2) VALUES(value1, value2);`
- You don't need any single quotes for integers
- Add this to the suggested area: `ADD_RENTAL_RESULT=$($PSQL "INSERT INTO rentals(customer_id, bike_id) VALUES($CUSTOMER_ID, $BIKE_ID_TO_RENT);")`

## 1340. Run the script

### 1340.1

Run the script and go to the rent menu again. Enter `1` for the bike you want to rent, and `555-5555` for the phone number again. You should have a customer for that number now, so it won't ask for a name.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1350. Check database for new rental

### 1350.1

In the psql prompt, take a look at all the data in the `rentals` table to make sure your new rental is there.

#### HINTS

- Use the `SELECT` and `FROM` keywords in the psql prompt
- Use `*` to view all the columns
- Enter `SELECT * FROM rentals;` in the psql prompt
- If you don't have a psql prompt open, I recommend "splitting" the terminal and reconnecting
- You can reconnect with `psql -U freecodecamp bikes`

## 1360. View all in bikes table

### 1360.1

Looks like the rental got added and the date was automatically set. Check all the data in the `bikes` table.

#### HINTS

- Use the psql prompt to view all the data in the bikes table
- Enter `SELECT * FROM bikes;` in the psql prompt
- If you don't have a psql prompt open, I recommend "splitting" the terminal and reconnecting
- You can reconnect with `psql -U freecodecamp bikes`

## 1370. Set available to false

### 1370.1

The available row didn't get set to false for the bike you rented so you need to set that to false next. In your script, create a `SET_TO_FALSE_RESULT` variable that sets `available` column in the `bikes` table to `false` for the bike with the `$BIKE_ID_TO_RENT` value.

#### HINTS

- Use same structure for the command that you have used for the other commands
- Here's an example: `SET_TO_FALSE_RESULT=$($PSQL "COMMAND HERE")`
- Use the `UPDATE`, `SET`, and `WHERE` keywords
- The command looks similar to this: `UPDATE table SET column1=value1 WHERE column2=value2;`
- You want to set `available=false` where `bike_id=$BIKE_ID_TO_RENT`
- Add this to the suggested area: `SET_TO_FALSE_RESULT=$($PSQL "UPDATE bikes SET available=false WHERE bike_id=$BIKE_ID_TO_RENT;")`

## 1380. Run the script

### 1380.1

Run the script and go to the rent menu. Rent bike number `1`. Enter `555-5555` when it asks for a phone number again.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure to enter the correct bike number and phone number

## 1390. Select all from rentals

### 1390.1

In the psql prompt, take a look at all the data in your rentals table. There should be another new rental.

#### HINTS

- Enter `SELECT * FROM rentals;` in the psql prompt
- If you don't have a psql prompt open, I recommend "splitting" the terminal and reconnecting
- You can reconnect with `psql -U freecodecamp bikes`

## 1400. Select all from bikes

### 1400.1

In the psql prompt, take a look at all the data in your bikes table. There should now be a bike that's false.

#### HINTS

- Enter `SELECT * FROM bikes;` in the psql prompt
- If you don't have a psql prompt open, I recommend "splitting" the terminal and reconnecting
- You can reconnect with `psql -U freecodecamp bikes`

## 1410. Run the script

### 1410.1

Run the script again and go to the rent menu, there should now be one less bike that is displayed, since it is not available. Be sure to exit the script when you are done.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1420. Get `BIKE_TYPE`

### 1420.1

Okay, it looks like the ability to rent a bike is working :smile: One last thing to do is send users to the `MAIN_MENU` with a message. I want message to say what bike someone rented so you need to know the type of bike and the size of the bike. Create a new variable named 
Get `BIKE_TYPE=$($PSQL "SELECT type FROM bikes WHERE bike_id=$BIKE_ID_TO_RENT;"`

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1430. Get `BIKE_SIZE`

### 1430.1

Get `BIKE_SIZE=$($PSQL "SELECT size FROM bikes WHERE bike_id=$BIKE_ID_TO_RENT;")`

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1440. Successful rent message

### 1440.1

add: `MAIN_MENU "I have put you down for the $BIKE_SIZE\" $BIKE_TYPE Bike, $CUSTOMER_NAME."`

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1450. Run the script

### 1450.1

Run the script and rent bike number `2` this time. Use `555-5555` for the phone number again. Make sure it takes you to the main menu and gives the message. When you're done, exit the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1460. Start the Return Bike Functionality

### 1460.1

Okay, I think the renting part is looking good. Last is the ability to return a bike. I suppose the logic for that would be to get their phone number, check if they have any rentals, ask them what bike to return, and update the rental and bike records. First, change that placeholder message still in your `RETURN_MENU` function with `What's your phone number?` 

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1470. Read `PHONE_NUMBER`

### 1470.1

Use `read` to get input into a `PHONE_NUMBER` variable.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1480. Select All from bikes

### 1480.1

Okay, so how can you find out what rentals a person has from their phone number? You need their `customer_id` since that's what is stored in the `rentals` table to find out what rentals they have. And once you find that out, you need to get the bike info for the bikes they have rented. :astonished: :cold_sweat: In the psql prompt, enter a command to select all the rows and columns from the bikes table.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1490. Left outer join bikes on rentals

### 1490.1

You need to use `JOIN` to add info from another table to that command. Add this to the end of the command you just entered: `LEFT OUTER JOIN rentals ON bikes.bike_id = rentals.bike_id;`. That will get all the columns from the bikes and rentals table.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1500. Left outer join bikes on rentals

### 1500.1

So you can get info from those two tables, but you need the column for the customers phone number from the third table. You can add another join for that. `Add LEFT OUTER JOIN customers ON customers.customer_id = rentals.customer_id` to the end of the last command. You may need to make the window a little wider to see the output.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1510. Add conditions to the query

### 1510.1

Now you're getting the info from all three tables :smile: But you only need the current rentals for the customer who's phone number you are looking for. Add two `WHERE` conditions to the end of the last command. One should phone number, use one of the phone numbers shown. The second should be to only show items where the bike hasn't been returned yet. You can do that with `date_returned IS NULL`
`SELECT * FROM bikes LEFT OUTER JOIN rentals ON bikes.bike_id = rentals.bike_id LEFT OUTER JOIN customers ON customers.customer_id = rentals.customer_id WHERE phone='$PHONE_NUMBER' AND date_returned is null;`

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1520. Select only specific columns

### 1520.1

That's a big query, but you're not done yet. You only need a few of those columns, select just the `bike_id`, `type`, and `size` columns. Since there's two `bike_id` columns, PostgreSQL needs to know what table you want that column from. Tell it to use the bikes table like this: `bikes.bike_id`

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1530. Add `CUSTOMER_RENTALS`

### 1530.1

Take that giant query and put it in a variable named `CUSTOMER_RENTALS` in your `RETURN_MENU` function. In the condition of the query, use the `PHONE_NUMBER` variable instead of the hard-coded value.

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1540. Echo `CUSTOMER_RENTALS`

### 1540.1

Echo the `CUSTOMER_RENTALS` variable.

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1550. Run the script

### 1550.1

Run the script and go to the return menu. Enter `555-5555` for the phone number to see the rentals for me.

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1560. Add `if` for no rentals found

### 1560.1

Okay, it looks like it's working. Add and `if` condition after your variable that sends users to the main menu if the variable is empty. Add the message, `I could not find any rentals for that phone number`

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1570. Add else to the if

### 1570.1

Add an `else` to the if statement. Keep the echo in it.
```sh
else
    echo "$CUSTOMERS_RENTALS"
fi
```

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1580. Pipe and Loop

### 1580.1

You need to pipe those results into a while loop again and read the info into a variable so you can make it pretty.
add
```sh
echo "$CUSTOMERS_RENTALS" | while read BIKE_ID BAR1 TYPE BAR2 SIZE
do
  echo "$BIKE_ID) $SIZE\" $TYPE Bike"
done
```

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1590. Ask which bike to return

### 1590.1

```sh
    echo -e "\nWhich bike would you like to return?"
```

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1600. read `BIKE_ID_TO_RETURN`

### 1600.1

```sh
read BIKE_ID_TO_RETURN
```

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1610. Select with Left outer join

### 1610.1

```sql
SELECT * FROM rentals LEFT OUTER JOIN customers ON rentals.customer_id = customers.customer_id;
```

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1620. Add conditions to the query

### 1620.1

```sh
WHERE phone='555-5555' AND date_returned IS NULL AND bike_id=1;")
```

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1630. Create BIKE_RENTED

### 1630.1

```sh
BIKE_IS_RENTED=$($PSQL "SELECT * FROM rentals LEFT OUTER JOIN customers ON rentals.customer_id = customers.customer_id WHERE phone='$PHONE_NUMBER' AND date_returned is null AND bike_id=$BIKE_ID_TO_RETURN;")
```

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1640. echo BIKE_RENTED

### 1640.1

echo `BIKE_RENTED`

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1650. Run the script

### 1650.1

Run the script and go to the return menu. Enter 555-5555 when asked for a phone number and pick a bike to return. so you can see if the query is working.

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1660. Run the script

### 1660.1

Run the script and go to the return menu. Enter 555-5555 when asked for a phone number so you can see if the query is working. Try running it twice, once with the bike I have rented and once without.

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1670. Add if for when customer enters wrong bike to return

### 1670.1

Add if for when customer enters wrong bike to return.
```sh
MAIN_MENU "You do not have that bike."
```

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1680. Add Else

### 1680.1

add else.

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1690. Add `RETURN_BIKE_RESULT`

### 1690.1

Remove the echo, and add RETURN_BIKE_RESULT
```sh
RETURN_BIKE_RESULT=$($PSQL "UPDATE rentals SET date_returned=now() WHERE bike_id=$BIKE_ID_TO_RETURN;")
```

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1700. Add `RETURN_BIKE_RESULT`

### 1700.1

Remove the echo, and add RETURN_BIKE_RESULT
```sh
RETURN_BIKE_RESULT=$($PSQL "UPDATE rentals SET date_returned=now() WHERE bike_id=$BIKE_ID_TO_RETURN;")
```

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1710. Add `SET_TO_TRUE_RESULT`

### 1710.1

Add
```sh
SET_TO_TRUE_RESULT=$($PSQL "UPDATE bikes SET available=true WHERE $BIKE_ID_TO_RETURN)
```

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1720. Add `SET_TO_TRUE_RESULT`

### 1720.1

Finally, send them to the main menu with the message "Thank you for returning your bike."

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1730. Add `SET_TO_TRUE_RESULT`

### 1730.1

This is the last step :smile: Run the script, try renting a bike and returning a bike. Verify that it's all working.

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first
