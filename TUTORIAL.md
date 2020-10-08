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

Use the terminal (not the psql one) to make your file executable. Do that with the `chmod` command. Add `+x` and `bike-shop.sh` to the command so your file can be executed.

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

- | 
  Here's a start:
  ```sh
  case $MAIN_MENU_SELECTION in
    1) RENT_MENU ;;
  ```
- |
  Add this case statement;
  ```sh
  case $MAIN_MENU_SELECTION in
    1) RENT_MENU ;;
    2) RETURN_MENU ;;
    3) EXIT ;;
    *) MAIN_MENU ;;
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
- |
  It should look like this:
  ```
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

Awesome! It’s all on one line, but I think you can work with that if you can just get rid of titles and that last part that says the number of rows. Check the `psql` help menu again.

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

Run the script again and go to the rent menu to see if those two rows are gone.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 920. Create `PSQL` Variable

### 920.1

You are going to need to query the database many more times so I want you to make a variable for part of the command. At the top of your script, create a variable named `PSQL` and set the value to the part of the command that connects to your database. Basically, it should be everything except the actual query so you can use it like this `$PSQL "SELECT * FROM bikes;"`

#### HINTS

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

Okay, what's next. Instead of echoing all that data, why don't you put it in a variable named `AVAILABLE BIKES`. 

#### HINTS

- Give it another try
- Adjust the suggested line to this: `AVAILABLE_BIKES=$($PSQL "SELECT * FROM bikes;")`

## 980. Echo `AVAILABLE_BIKES`

### 980.1

That actually looks pretty clean. Why don't you echo the variable now below that. This is finicky stuff, so you want to make sure it hasn't broken.

#### HINTS

- `echo $AVAILABLE_BIKES`

## 990. Run your script

### 990.1

Run your script and enter `2` to go to the `RENT_MENU` and make sure it's working.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1000. Select Columns from Bikes in psql Prompt

### 1000.1

You don't want to show all the rows and columns in your script. In your psql prompt that is still connected to the database. Enter a command to get only the columns and rows you would want to show a customer. You only want the rows where the bike is available, and the columns for the id, type, and size.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1010. Add the command to your script

### 1010.1

That's the query you want in your script to only display the info needed. Add that query in place of your query in AVAILABLE_BIKES.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1020. Run the script

### 1020.1

Run the script and go to the rent menu to see the output.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1030. Set available to false

### 1030.1

Okay, now you can see the bike_id and the info you need. Set available to false for all the bikes in the psql prompt.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1040. Run the script

### 1040.1

Run the script and go to the rent menu

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1050. Add if condition

### 1050.1

add 
```sh
if [[ -z $BIKES_AVAILABLE ]]
then 
	MAIN_MENU
fi
```
#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1060. Run the script

### 1060.1

Run the script and go to the rent menu to see if you are sent back to the main menu when there's no bikes available.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1070. Add argument to `MAIN_MENU`

### 1070.1

It looks like it works, but you could use a message there. I would like the `MAIN_MENU` to display a message if there's a problem. I think you should have an option when you go to the main menu to display a message. You can add a parameter after the function.
add `MAIN_MENU "Sorry, we don't have any bikes available right now."`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1080. Add error message to `MAIN_MENU`

### 1080.1

Add this to `MAIN_MENU`
```sh
  if [[ $1 ]]
  then
    echo -e "$1\n"
  fi
```

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1090. Run the script

### 1090.1

Run the script and go to the rent menu. It should take you to the main menu and give a message.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1095. Set bike availiabity to true

### 1095.1

Set bike availability back to true on psql terminal

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1100. Add else to `RENT_MENU`

### 1100.1

Add an else condition to the `RENT_MENU` for when there are bikes available.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1110. Echo Bikes Available Text

### 1110.1

add `echo -e "Here are the bikes we have available:\n"` in your else condition

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1130. Run the script

### 1130.1

Run the script and go to the rent menu to see the bikes.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1140. Pipe Available Bikes into While loop

### 1140.1

That doesn't look very user friendly.
```sh
echo "$AVAILABLE_BIKES" | while IFS="|" read BIKE_ID TYPE SIZE
do
  echo $BIKE_ID $TYPE $SIZE
done
```

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1145. Adjust Available Bikes Display

### 1145.1

echo "$BIKE_ID) $SIZE\" $TYPE Bike"

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1150. Run the script

### 1150.1

Run the script again to see what it looks like now.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1160. Ask for Bike To Rent

### 1160.1

Okay, that seems to be working.
add `echo -e "\nWhich one would you like to rent?"`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 1170. read `BIKE_ID_TO_RENT`

### 1170.1

read `BIKE_ID_TO_RENT`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions
