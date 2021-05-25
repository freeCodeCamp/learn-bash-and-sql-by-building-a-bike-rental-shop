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

## 40. Create Database `bikes`

### 40.1

You need your own database for the bike shop. Create a new database named `bikes`.

#### HINTS

- Use the `CREATE DATABASE` keywords
- Here's an example: `CREATE DATABASE database_name;`
- Type `CREATE DATABASE bikes;` into the psql prompt and press enter
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you aren't logged in first

## 50. List Databases

### 50.1

List databases again to make sure your database got created.

#### HINTS

- Use the **l**ist shortcut command
- Type `\l` into the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 60. Connect to `bikes`

### 60.1

There it is. **C**onnect to it so you can start building the structure of your bike shop database.

#### HINTS

- Use the **c**onnect shortcut command
- Add the database name to the command
- It's the `\c` command
- Here's an example: `\c database_name`
- Try entering `\c bikes` into the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 70. Create table `bikes`

### 70.1

Your database needs three tables. One for your bike inventory, one for your customers, and one for the bikes that are rented out. Create a table named `bikes` in your database for the inventory.

#### HINTS

- Use the `CREATE TABLE` keywords
- Don't forget the parenthesis
- Here's an example: `CREATE TABLE table_name();`
- Try entering `CREATE TABLE bikes();` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 80. Display the tables

### 80.1

**D**isplay the tables to make sure your table got created.

#### HINTS

- Use the **d**isplay shortcut command
- It's the `\d` command
- Type `\d` into the psql prompt and press enter
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 90. Add column `bike_id`

### 90.1

The table will have a few columns for bike information. First, is a unique ID column. Add a column to the `bikes` table named `bike_id`. Give it a type of `SERIAL` and make it a `PRIMARY KEY`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE bikes ADD COLUMN bike_id SERIAL PRIMARY KEY;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 100. Display `bikes` Details

### 100.1

Use the **d**isplay command to view the details of the `bikes` table.

#### HINTS

- It's the `\d` command
- Add the table name to the command
- Try entering `\d bikes` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 110. Add `type` column

### 110.1

The first column is set. Add a column named `type` for the type of bike. Make it a `VARCHAR(50)` and give it a constraint of `NOT NULL`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR(50)`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE bikes ADD COLUMN type VARCHAR(50) NOT NULL;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 120. Display `bikes` details

### 120.1

Display the details of the `bikes` table again.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d bikes` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in

## 130. Add Column `size`

### 130.1

The first two columns look good. Add a column named `size` to the `bikes` table that is an `INT` and has the `NOT NULL` constraint. This will be for the size of each bike.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `INT`, and `NOT NULL` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE bikes ADD COLUMN size INT NOT NULL;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in

## 140. Add Column `available`

### 140.1

Add another column to the table named `available`. Make it a `boolean` and has a constaint of `NOT NULL`. Also give it a default value of `TRUE`. This will be set to `false` when someone rents out a bike.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `BOOLEAN`, and `DEFAULT TRUE` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE DEFAULT;`
- Try entering `ALTER TABLE bikes ADD COLUMN available BOOLEAN DEFAULT TRUE;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in

## 150. Display `bikes` details

### 150.1

Display the details of the `bikes` table again so you can make sure it's how you want it.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d bikes` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 160. Create Table `customers`

### 160.1

That table is done for now. Create another table named `customers`. It will store a name and phone number for each customer that rents a bike.

#### HINTS

- Use the `CREATE TABLE` keywords
- Don't forget the parenthesis
- Here's an example: `CREATE TABLE table_name();`
- Try entering `CREATE TABLE customers();` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 170. Add Column `customer_id`

### 170.1

Add a `customer_id` column to your new table that is a type of `SERIAL` and make it a `PRIMARY KEY`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE customers ADD COLUMN customer_id SERIAL PRIMARY KEY;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 180. Display `customers` Details

### 180.1

Display the details of the `customers` table so you can make sure your new column is there.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d customers` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 190. Add Column `phone`

### 190.1

It is. Add a column named `phone` for customers phone numbers. Make it a varying character that has a maximum length of `15` characters. Also make sure it can't be null, and that it has to be unique.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR()`, `NOT NULL`, and `UNIQUE` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE customers ADD COLUMN phone VARCHAR(15) NOT NULL UNIQUE;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 200. Add Column `name`

### 200.1

Add the last column. Call it `name` and make it a `VARCHAR(40)` that can't be null.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE customers ADD COLUMN name VARCHAR(40) NOT NULL;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 210. Display `customers` Details

### 210.1

Display the details of the `customers` table.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d customers` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 220. Create Table `rentals`

### 220.1

That table is finished. Lastly, you need a table to store which bikes are who has rented them. Create a new table named `rentals`.

#### HINTS

- Use the `CREATE TABLE` keywords
- Don't forget the parenthesis
- Here's an example: `CREATE TABLE table_name();`
- Try entering `CREATE TABLE rentals();` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 230. Add Column `rental_id`

### 230.1

Add a `rental_id` column to your new table. Make it automatically increment with `SERIAL` and make it the primary key for this table.

#### HINTS

- The other two properties are `SERIAL` and `PRIMARY KEY`
- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN rental_id SERIAL PRIMARY KEY;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 240. Display `rentals` Details

### 240.1

Display the details of the `rentals` table.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 250. Add Column `customer_id`

### 250.1

Next, you need a column for the customer who is renting a bike. Add column named `customer_id`. This will have an id of a customer from the customers table. Make the column an `INT` and `NOT NULL` to start.

#### HINTS

- Add the column to the `rentals` table
- Use the `ALTER TABLE`, `ADD COLUMN`, `INT`, and `NOT NULL` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN customer_id INT NOT NULL;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 260. Set `customer_id` Foreign Key

### 260.1

Make the column you just added a foreign key that references the `customer_id` column from the `customers` table. Here's an example of how you can do that:

```sql
ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);
```

#### HINTS

- Without the keywords, it looks like tihs: `rentals customer_id customers(customer_id)`
- Try entering `ALTER TABLE rentals ADD FOREIGN KEY(customer_id) REFERENCES customers(customer_id);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 270. Display `rentals` Details

### 270.1

Display the details of the `rentals` table to make sure your key is set.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 280. Add Column `bike_id`

### 280.1

That foreign key is set. You need another column so you know what bike a customer is renting. Add a column named `bike_id` and make it an `INT` and `NOT NULL`.

#### HINTS

- Add the column to the `rentals` table
- Use the `ALTER TABLE`, `ADD COLUMN`, `INT`, and `NOT NULL` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN bike_id INT NOT NULL;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 290. Add `bike_id` Foreign Key

### 290.1

Make that column a foreign key that references the `bike_id` column from the `bikes` table so you know what bike the id is for.

#### HINTS

- Here's the example again: `ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);`
- Without the keywords, it looks like tihs: `rentals bike_id bikes(bike_id)`
- Try entering `ALTER TABLE rentals ADD FOREIGN KEY(bike_id) REFERENCES bikes(bike_id);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 300. Display `rentals` Details

### 300.1

Display the details of the `rentals` table so you can make sure the key is correct.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 310. Add `date_rented` Column

### 310.1

Moving along. You want to know when a customer rents a bike, and when it gets returned. Add a column to your `rentals` table named `date_rented` that's a type of `DATE`. Make sure the entry can't be null, and give it a default value of `NOW()`.

#### HINTS

- Add the column to the `rentals` table
- Use the `ALTER TABLE`, `ADD COLUMN`, `DATE`, `NOT NULL`, and `DEFAULT NOW()` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN date_rented DATE NOT NULL DEFAULT NOW();` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 320. Display `rentals` Details

### 320.1

Display the details of the `rentals` table again.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 330. Add Column `date_returned`

### 330.1

It looks good. Lastly, you need column for when a customer returns a bike. Add a column named `date_returned` that's a type of `DATE`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `DATE` keywords
- Add the column to the `rentals` table
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE;`
- Try entering `ALTER TABLE rentals ADD COLUMN date_returned DATE;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 340. Display `rentals` Details

### 340.1

View the details of the table again.

#### HINTS

- It's the `rentals` table
- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 350. Display Tables

### 350.1

The tables are all finished. Display all the tables so you can see what you ended up with.

#### HINTS

- Use the **d**isplay shortcut command
- It's the `\d` command
- Enter `\d` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 360. Insert 27 inch Mountain Bike

### 360.1

You have nine bikes in your inventory. Add the first one to your `bikes` table. It has a `type` of `Mountain` and a `size` of `27`. Make sure to put your `VARCHAR` values in single quotes. The `bike_id` and `available` columns should be filled in automatically, so you don't need to worry about those.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- View the details of the `bikes` table with `\d bikes` to see what values it expects
- Try entering `INSERT INTO bikes(type, size) VALUES('Mountain', 27);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 370. Select all from Bikes

### 370.1

View all the columns in your bikes table with `SELECT`.

#### HINTS

- Use `*` to view all the columns
- Here's an example: `SELECT * FROM table_name;`
- Try entering `SELECT * from bikes;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 380. Insert 28 inch Mountain Bike

### 380.1

Looks like it's all working, the `bike_id` and `available` columns were filled in automatically. Insert another bike. Give it a `type` of `Mountain` and a `size` of `28`.

#### HINTS

- Make sure to put your `VARCHAR` values in single quotes
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Mountain', 28);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 390. Insert 29 inch Mountain Bike

### 390.1

Add another `Mountain` bike to your inventory. Make it a `29` inch bike.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Make sure to put your `VARCHAR` values in single quotes
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Mountain', 29);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 400. Insert 27 inch Road Bike

### 400.1

Add a `27` inch `Road` bike to the table.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Make sure to put your `VARCHAR` values in single quotes
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Road', 27);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 410. Select all from Bikes

### 410.1

Use `SELECT` to view all the data in the `bikes` table again.

#### HINTS

- Use `*` to view all the columns
- Here's an example: `SELECT * FROM table_name;`
- Try entering `SELECT * from bikes;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 420. Insert 28 and 29 inch Road Bikes

### 420.1

Add the two bikes to your inventory, they are `28` and `29` inch `Road` bikes. Try to add them both with one command.

#### HINTS

- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value), (value, value);`
- Make sure to put your `VARCHAR` values in single quotes
- Try entering `INSERT INTO bikes(type, size) VALUES('Road', 28), ('Road', 29);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 430. Insert 19, 20, 21 inch BMX Bikes

### 430.1

There's three more bikes. Add `19`, `20`, and `21` inch `BMX` bikes to your table. Try to add them with one command.

#### HINTS

- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value), (value, value), (value, value);`
- Make sure to put your `VARCHAR` values in single quotes
- Try entering `INSERT INTO bikes(type, size) VALUES('BMX', 19), ('BMX', 20), ('BMX', 21);` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 440. Select all from Bikes

### 440.1

View all the data in your bikes table.

#### HINTS

- Use `SELECT` with `*` to view all the columns
- Here's an example: `SELECT * FROM table_name;`
- Try entering `SELECT * from bikes;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 450. touch bike-shop.sh

### 450.1

Your current inventory is all added. For the rest of the project, I recommend leaving that terminal open and connected, and that you should "split" the terminal so you have a second one to use for bash commands. Do that by clicking the "hamburger" menu at the top left of the window, going to the "terminal" section, and clicking "split terminal". After you have opened it, use the `touch` command to create a file named `bike-shop.sh` in the `project` folder.

#### HINTS

- Try entering `touch bike-shop.sh` in the terminal
- Make sure it's the regular terminal, and not the psql one
- Make sure you are in the `project` folder first
- If you opened a new terminal instead of splitting it, you can close it by entering `exit` and try again
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you want

## 460. Add shebang!

### 460.1

This file will be the program for your bike rental shop. Open the file and add a "shebang" at the top so it uses `bash` when it's executed. If you don't remember, it looks like this: `#!/bin/bash`.

#### HINTS

- Add `#!/bin/bash` to the top of your `bike-shop.sh` file

## 470. Add echo Bike Rental Shop

### 470.1

In the file, use `echo` with the `-e` flag to print `~~~~~ Bike Rental Shop ~~~~~` with a new line at the beginning and end.

#### HINTS

- The newline character is `\n`
- Use double quotes around the message so the new lines are printed
- Here's an example: `echo -e "\n<message_here>\n"`
- Add `echo -e "\n~~~~~ Bike Rental Shop ~~~~~\n"` to the `bike-shop-sh` file

## 480. chmod +x bike-shop.sh

### 480.1

Use the terminal (not the psql one) and the `chmod` command to make your file executable. Add the `+x` flag and `bike-shop.sh` to the command to do that.

#### HINTS

- Here's an example: `chmod +x <filename>`
- Try entering `chmod +x bike-shop.sh` in the terminal
- Make sure you are in the `project` folder first

## 490. ./bike-shop.sh

### 490.1

Type `./bike-shop.sh` in the terminal to run your script.

#### HINTS

- Make sure to use the regular terminal and not the psql one
- Make sure you are in the `project` folder first

## 510. Add MAIN_MENU

### 510.1

:smile: In the script, create an empty function named `MAIN_MENU`. This will have a few options to enter when the script runs to rent or return a bike.

#### HINTS

- Here's an example:
```sh
FUNCTION_NAME() {

}
```
- Add this to the bottom of the script:
```sh
MAIN_MENU() {

}
```

## 520. Add echo How may I help you?

### 520.1

In your function, echo the text `How may I help you?` so that there's a greeting when you go to the menu.

#### HINTS

- Add `echo "How may I help you?"` in the designated area

## 530. Add MAIN_MENU function call

### 530.1

Call your `MAIN_MENU` at the bottom of the file so the function runs when you start the script.

#### HINTS

- Add `MAIN_MENU` at the bottom of the file

## 540. ./bike-shop.sh

### 540.1

Run the file in the terminal again so you can see what it is outputting.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 630. Add MAIN_MENU Options

### 630.1

It's coming along. Add another `echo` command **in the function** below the other one. Make it output text that looks like this:

```sh

1. Rent a bike
2. Return a bike
3. Exit
```

Note that there's an empty line at the start.

#### HINTS

- Use the `echo` command with the `-e` flag and line breaks (`\n`) to produce the suggested output
- Without the words, it looks like this: `echo -e "\n1. \n2. \n3. "`
- Run your script if you need to see if the output matches
- Add `echo -e "\n1. Rent a bike\n2. Return a bike\n3. Exit"` to your function

## 640. Run the file

### 640.1

Run the file to make sure it worked.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 650. Read MAIN_MENU_SELECTION

### 650.1

You have some options displaying. Next, you need to get input from whoever is using the program. Use the `read` command to read input into a variable called `MAIN_MENU_SELECTION` below the options.

#### HINTS

- Here's an example: `read <VARIABLE_NAME>`
- Here's what the code looks like: `read MAIN_MENU_SELECTION`
- Add the code at the bottom of the `MAIN_MENU` function
- The `MAIN_MENU` function should look like this:
```sh
MAIN_MENU() {
  echo "How may I help you?"
  echo -e "\n1. Rent a bike\n2. Return a bike\n3. Exit"
  read MAIN_MENU_SELECTION
}
```

## 660. Add RENT_MENU

### 660.1

When an option gets entered, you need to take a user to one of those other menus. Add an empty `RENT_MENU` function below the `MAIN_MENU` function.

#### HINTS

- Make sure the `RENT_MENU` function is below the `MAIN_MENU` function and above where you call `MAIN_MENU`
- Add this in the suggested area:
```sh
RENT_MENU() {

}
```

## 670. Add echo Rent Menu

### 670.1

For the time being, just echo `Rent Menu` in the function so you can see if it's working.

#### HINTS

- Don't use any flags with the command
- Add `echo "Rent Menu"` in the `RENT_MENU` function

## 680. Add RETURN_MENU function

### 680.1

Add an empty `RETURN_MENU` function below the `RENT_MENU` function for when a user enters the option to return a bike.

#### HINTS

- Make sure the `RETURN_MENU` function is below the `RENT_MENU` function and above where you call `MAIN_MENU`
- Add this in the suggested area:
```sh
RETURN_MENU() {

}
```

## 690. Add echo Return Menu

### 690.1

Use `echo` to print `Return Menu` in the function you just added. You will change these later.

#### HINTS

- Don't use any flags with the command
- Add `echo "Return Menu"` in the `RETURN_MENU` function

## 700. Add EXIT function

### 700.1

Add an empty `EXIT` fuction below the `RETURN_MENU` function for when a user wants to exit the program.

#### HINTS

- Make sure the `EXIT` function is below the `RETURN_MENU` function and above where you call `MAIN_MENU`
- Add this in the suggested area:
```sh
EXIT() {

}
```

## 710. Add EXIT Message

### 710.1

This one probably doesn't need a placeholder message. In the `EXIT` function, use `echo` to print `Thank you for stopping in.` with a new line at the beginning and end of the message.

#### HINTS

- The newline character is `\n`
- Use double quotes around the message so the new lines are printed
- Here's an example: `echo -e "\n<message_here>\n"`
- Add `echo -e "\nThank you for stopping in.\n"` to the `EXIT` function

## 720. Add case statement to `MAIN_MENU`

### 720.1

When a user enters an option at the main menu, you want to take them to the appropraite sub-menu. You can use a `case` statement for this. Here's an example:

```sh
case EXPRESSION in
  PATTERN) STATEMENTS ;;
  PATTERN) STATEMENTS ;;
  PATTERN) STATEMENTS ;;
  *) STATEMENTS ;;
esac
```

The expression you want is the `$MAIN_MENU_SELECTION` variable. You are expecting it to be a `1`, `2`, or `3` for your various menus. Add a `case` statement that takes users to their corresponding menus. The `*` is for when anything else is entered. Take users to the `MAIN_MENU` when the variable isn't a `1`, `2`, or `3`.

#### HINTS

- Add the `case` statement in the `MAIN_MENU` function below the `read MAIN_MENU_SELECTION` line
- Here's how it starts:
```sh
case $MAIN_MENU_SELECTION in
  1) RENT_MENU ;;
```
- Add this case statement below the;
```sh
case $MAIN_MENU_SELECTION in
  1) RENT_MENU ;;
  2) RETURN_MENU ;;
  3) EXIT ;;
  *) MAIN_MENU ;;
esac
```

## 730. ./bike-shop.sh

### 730.1

Run the script a few times and try out the different menus. Be sure to enter something other than one of the options to go to the main menu.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 740. Add arg to MAIN_MENU call in case

### 740.1

Add an argument to where you call `MAIN_MENU` in the `case` statement. It should be `Please enter a valid option.`. The next step will adjust the function so the message is printed when a user enters an invalid option.

#### HINTS

- Here's an example: `FUNCTION_CALL "<argument_message>"`
- Here's how it looks:
```sh
  *) MAIN_MENU "Please enter a valid option." ;;
```
- Add this case statement below the;
```sh
case $MAIN_MENU_SELECTION in
  1) RENT_MENU ;;
  2) RETURN_MENU ;;
  3) EXIT ;;
  *) MAIN_MENU "Please enter a valid option." ;;
esac
```

## 750. Add if $1 to MAIN_MENU

### 750.1

At the top of the `MAIN_MENU` function, add an `if` condition that checks if there's an argument (`$1`) passed to the function. If there is, print the message with a new line in front of it.

#### HINTS

- Here's an example of an `if`:
```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
fi
```
- The condition you want is `$1`
- Use `echo` with the `-e` flag and a new line character (`\n`) to print the argument with a new line at the beginning in the `<STATEMENTS>` area
- Here's an example of that part: `echo -e "\n<argument_here>"`
- The `if` statement should look like this:
```sh
if [[ $1 ]]
then
  echo -e "\n$1"
fi
```
- Make sure to put it at the top of the `MAIN_MENU` function

## 760. ./bike-shop.sh

### 760.1

Run the script and enter an invalid option to see the message. Exit the program when you are done.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 850. Delete echo Rent Menu

### 850.1

Looks good. Delete the `echo "Rent Menu"` from the `RENT_MENU` function so you can start adding the rent functionality.

#### HINTS

- The `RENT_MENU` function should be empty
- The `RENT_MENU` function should look like this:
```sh
RENT_MENU() {

}
```

## 860. Add comments to RENT_MENU

### 860.1

In the `RENT_MENU` function, add three single line comments; `get available bikes`, `if no bikes available`, and `send to main menu`, in that order.

#### HINTS

- Here's an example of a single line comment: `# <comment here>`
- The `RENT_MENU` function should look like this:
```sh
RENT_MENU() {
  # get available bikes

  # if no bikes available

  # send to main menu

}
```

## 920. Add PSQL Variable

### 920.1

To get the bikes available, you need to query the database from your script. Below the "shebang", add a `PSQL` variable that looks like this: `PSQL="psql -X --username=freecodecamp --dbname=bikes --tuples-only -c"`. You will then be able to use it to query the database like this: `$($PSQL "<query_here>")`.

#### HINTS

- Add the suggested variable below the "shebang" and above where print the `Bike Rental Shop` line

## 970. Add AVAILABLE_BIKES

### 970.1

Below the `get available bikes` comment. Create an `AVAILABLE_BIKES` variable that gets the `bike_id`, `type`, and `size` columns from the `bikes` table for the bikes that are available. Order the results by their `bike_id` column. Here's an example: `AVAILABLE_BIKES=$($PSQL "<query_here>")`

#### HINTS

- Get the three suggested columns in the same order they are listed; `bike_id, type, size`
- Use the `SELECT`, `FROM`, `WHERE`, and `ORDER BY` keywords in your query
- The condition you want is `WHERE available = true`
- Without the keywords, it looks like this: `AVAILABLE_BIKES=$($PSQL "bike_id, type, size bikes available = true bike_id")`
- Here's how it looks: `AVAILABLE_BIKES=$($PSQL "SELECT bike_id, type, size FROM bikes WHERE available = true ORDER BY bike_id")`

## 980. echo AVAILABLE_BIKES

### 980.1

Below the new variable, use `echo` to print it. Place it in double quotes so it prints any new lines.

#### HINTS

- Here's an example: `echo "<variable_here>"`
- Use the variable with `$AVAILABLE_BIKES`
- Add `echo "$AVAILABLE_BIKES"` to the suggested area

## 990. ./bike-shop.sh

### 990.1

Run your script and go to the rent menu to see if the available bikes are being printed.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 993. psql UPDATE bikes SET available = false

### 990.1

Awesome. In the psql prompt, set the `available` column to `false` for all the bikes so you can see what it prints when there's no bikes available.

#### HINTS

- Use the `UPDATE`, `SET`, and `WHERE` keywords
- Here's an example: `UPDATE <table> SET <column> = <value> WHERE <condition>`
- You want to set `available` to `false` for columns that are `true`
- After the `SET` can look like this: `available = false WHERE available = true`
- Try entering `UPDATE bikes SET available = false WHERE available = true;` in the psql prompt
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in. I recommend "splitting" the terminal so you can have one for bash commands and one for psql commands. You can do that by clicking the "hamburger" menu at the top left of the window, going to the "terminal" section, and clicking "split terminal".

## 995. ./bike-shop.sh

### 995.1

Run your script and go to the rent menu to see the output.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure it's the regular terminal and not the psql one
- Make sure you are in the `project` folder first

## 1000. Add if -z AVAILABLE_BIKES

### 1000.1

So if there's no bike available, the variable will be empty. In the script, below the `if no bikes available` comment, add an `if` condition that checks if the variable is empty. You can use `-z` to check if it's empty. Place the `send to main menu` comment in its `STATEMENTS` area.

#### HINTS

- Use `-z <VARIABLE>` to see if a variable is empty
- Here's an example:
```sh
if [[ -z <VARIABLE> ]]
then
  <STATEMENTS>
fi
```
- The `if` condition should look like this:
```sh
if [[ -z $AVAILABLE_BIKES ]]
then
  # send to main menu
fi
```
- Make sure it's right below the suggested comment

## 1010. Add MAIN_MENU Sorry, we don't have any bikes available right now

### 1010.1

Below the comment in the `if` you just added. Send users to the main menu, and give them the message `Sorry, we don't have any bikes available right now.`

#### HINTS

- Here's an example `MAIN MENU "<message_here>"`
- Make sure it's in the `if` condition below the `send to main menu` comment
- The function call should look like this: `MAIN_MENU "Sorry, we don't have any bikes available right now."`
- The `if` condition should look like this:
```sh
if [[ -z $AVAILABLE_BIKES ]]
then
  # send to main menu
  MAIN_MENU "Sorry, we don't have any bikes available right now."
fi
```

## 1020. ./bike-shop.sh

### 1020.1

Run the script and go to the rent menu. When you are done, close the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1100. Add else with comments

### 1100.1

If no bikes are available, you will get that message. Add an `else` to the `if` condition for when there is bikes available. In it, add four single line comments; `display available bikes`, `ask for bike to rent`, `if input is not a number`, and `send to main menu`.

#### HINTS

- Here's an example of a single line comment: `# <comment_here>`
- Make sure the comments are in the same order listed
- The `else` should look like this:
```sh
else
  # display available bikes

  # ask for bike to rent

  # if input is not a number

  # send to main menu

```
- The `if` should look like this:
```sh
if [[ -z $AVILABLE_BIKES ]]
then
  # send to main menu
  MAIN_MENU "Sorry, we don't have any bikes available right now."
else
  # display available bikes

  # ask for bike to rent

  # if input is not a number

  # send to main menu

fi
```

## 1105. Add echo Here are the bikes we have available

### 1105.1

Below the `display available bikes` comment you just added, use `echo` to print `Here are the bike we have available:` with a new line in front of the message

#### HINTS

- Use `echo` with the `-e` flag and the new line character (`\n`) to print the suggested message
- Use double quotes around the message
- Here's an example: `echo -e "\n<message_here>"`
- Add `echo -e "\nHere are the bikes we have available:"` below the suggested comment

## 1110. Move echo AVAILABLE_BIKES

### 1110.1

Move the `echo` command that prints all the available bikes below the message you just added.

#### HINTS

- It's the `echo $AVAILABLE_BIKES` command
- It should be below the `Here are the bikes we have available:` message
- You should only print the bikes available in that one spot
- Place the `echo "$AVAILABLE_BIKES"` line in the suggested spot

## 1115. psql UPDATE bikes SET all != BMX to TRUE

### 1115.1

In the psql prompt, set all the bikes, except for the `BMX` bikes, back to true so you can see a list of bikes to rent.

#### HINTS

- Use the `UPDATE`, `SET`, and `WHERE` keywords
- Here's an example: `UPDATE <table> SET <column> = <value> WHERE <condition>`
- You want to set `available` to `true` for columns that don't have a `type` of `BMX`
- You can use the `!=` operator to check for columns not equal to a value
- After the `SET` can look like this: `available = true WHERE type != 'BMX'`
- Try entering `UPDATE bikes SET available = true WHERE type != 'BMX';` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1130. ./bike-shop.sh

### 1130.1

Run the script and go to the rent menu to see the list of bikes available.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1140. pipe AVAILABLE_BIKES into while loop

### 1140.1

Instead of directly printing the list, `pipe` the output into a `while` loop that reads each word. Here's how that looks:

```sh
echo "$AVAILABLE_BIKES" | while read BIKE_ID BAR TYPE BAR SIZE
do
  echo "$BIKE_ID $TYPE $SIZE"
done
```

It will read the first line of your results into those five variables for you to use in the `do` area. When it gets to a new line, it reads the next five words into the variables again and repeats until there are no new lines left.

#### HINTS

- Make the `echo "$AVAILABLE_BIKES"` line look like the example

## 1142. Run the script

### 1142.1

Run the script and go to the rent menu again to see if it's working.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1145. Adjust Available Bikes Display

### 1145.1

It's working. Adjust the echo command that prints the bike info so that each line looks like this: `<BIKE_ID>) <SIZE>" <TYPE> Bike`. Here's what the first one would look like: `1) 27" Mountain Bike`. Make sure to escape any characters you need to.

#### HINTS

- Be sure to use double quotes and escape the `"` after `SIZE`
- Run your script and check the output if you want to see if it matches the suggestion
- Make the suggested line look like this: `echo "$BIKE_ID) $SIZE\" $TYPE Bike"`
- The whole loop should look like this:
```sh
echo "$AVAILABLE_BIKES" | while read BIKE_ID BAR TYPE BAR SIZE
do
  echo "$BIKE_ID) $SIZE\" $TYPE Bike"
done
```

## 1150. Run the script

### 1150.1

Run the script and go to the rent menu again to see what it looks like now.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1160. Add echo Which one would you like to rent?

### 1160.1

That's better. Below the `ask for bike to rent comment`, print `Which one would you like to rent?` with a new line in front of it.

#### HINTS

- Use `echo` with the `-e` flag and the new line character (`\n`) to print the suggested message
- Use double quotes around the message
- Here's an example: `echo -e "\n<message_here>"`
- Add `echo -e "\nWhich one would you like to rent?"` below the suggested comment

## 1162. read BIKE_ID_TO_RENT

### 1162.1

Just below that, add a command to `read` input into a variable named `BIKE_ID_TO_RENT`.

#### HINTS

- Here's an example: `read <VARIABLE_NAME>`
- Add this to the suggested area: `read BIKE_ID_TO_RENT`

## 1164. [[ a =~ [0-9] ]]; echo $?

### 1164.1

Next, you want to find out how to test if the user input is a number. In the terminal, enter `[[ a =~ [0-9] ]]; echo $?` to see if `a` is a number. The condition expression will run, and `echo $?` will print the exit code of it (the last command).

#### HINTS

- Enter `[[ a =~ [0-9] ]]; echo $?` in the terminal
- It's the regular terminal, not the psql one

## 1165. echo [[ a1 =~ [0-9] ]]; echo $?

### 1165.1

It printed `1` for false. Meaning that `a` did not match the pattern [0-9], or `a` did not contain a number from `0-9`. Enter the same commands, but check if `a1` matches the pattern.

#### HINTS

- The previous command was `[[ a =~ [0-9] ]]; echo $?`
- Enter `[[ a1 =~ [0-9] ]]; echo $?` in the terminal

## 1166. echo [[ a1 =~ ^[0-9]$ ]]; echo $?

### 1166.1

That printed `0` for true. `a1` does contain a number from `0-9`. Enter the same command, but change the pattern to `^[0-9]$`. The `^` signifies the start of the pattern, and `$` means the end. So the input will have to start, contain a number `0-9`, and end.

#### HINTS

- The previous command was `[[ a1 =~ [0-9] ]]; echo $?`
- Enter `[[ a1 =~ ^[0-9]$ ]]; echo $?` in the terminal

## 1167. echo [[ 1 =~ ^[0-9]$ ]]; echo $?

### 1167.1

`1` for false. `a1` does not match the pattern. Using the same syntax, check if `1` matches the pattern.

#### HINTS

- The previous command was `[[ a1 =~ ^[0-9]$ ]]; echo $?`
- Enter `[[ 1 =~ ^[0-9]$ ]]; echo $?` in the terminal

## 1168. echo [[ 11 =~ ^[0-9]$ ]]; echo $?

### 1168.1

`1` does match the pattern. It starts, contains a number, and ends. Check if `11` matches the same pattern.

#### HINTS

- The previous command was `[[ 1 =~ ^[0-9]$ ]]; echo $?`
- Enter `[[ 11 =~ ^[0-9]$ ]]; echo $?` in the terminal

## 1169. echo [[ 11 =~ ^[0-9]+$ ]]; echo $?

### 1169.1

That did not match because the pattern only allows a single number. Add a `+` after the `[0-9]` to allow any strings that start, contain one or more numbers, and end.

#### HINTS

- Enter the previous command with the suggested changed
- The previous command was `[[ 11 =~ ^[0-9]$ ]]; echo $?`
- Enter `[[ 11 =~ ^[0-9]+$ ]]; echo $?` in the terminal

## 1170. echo [[ ! 11 =~ ^[0-9]+$ ]]; echo $?

### 1170.1

So that pattern will match any positive integers. You want to check if the input is not a number. Add `!` in front of the string in the previous command to do that.

#### HINTS

- Enter the previous command with the suggested changed
- The previous command was `[[ 11 =~ ^[0-9]+$ ]]; echo $?`
- Enter `[[ ! 11 =~ ^[0-9]+$ ]]; echo $?` in the terminal

## 1176. Add if [[ ! $BIKE_ID_TO_RENT =~ ^[0-9]+$ ]]

### 1176.1

Back in your script, below the `if input is not a number` comment, add an `if` condition that checks if the input is not a number using the method you just practiced. Add the `send to main menu` comment in the `then` area of the `if`.

#### HINTS

- You want to check if the `$BIKE_ID_TO_RENT` variable is not a number
- You entered `[[ ! 11 =~ ^[0-9]+$ ]]; echo $?` in the terminal on the last step
- Here's an example:
```sh
if [[ <CONDITION> ]]
then
  # send to main menu
fi
```
- The condition you want is `[[ ! $BIKE_ID_TO_RENT =~ ^[0-9]+$ ]]`
- Add this in the suggestion area:
```sh
if [[ ! $BIKE_ID_TO_RENT =~ ^[0-9]+$ ]]
then
  # send to main menu
fi
```

## 1177. Add MAIN_MENU That is not a valid bike number

### 1177.1

If the `$BIKE_ID_TO_RENT` variable is not a number, add the code to send users to the main menu with the message, `That is not a valid bike number.`

#### HINTS

- You want to call the `MAIN_MENU` function with the message as an argument
- Here's an example: `MAIN_MENU "<message_here>"`
- Add `MAIN_MENU "That is not a valid bike number."` below the `send to main menu` comment

## 1178. ./bike-shop.sh

### 1178.1

Run the script, go to the rent menu, and enter something that isn't a number to make sure it is working. When you are done, close the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1179. Add else with comments

### 1179.1

Add an `else` area for when the input is a number. Add these three single line comments in it; `get bike availability`, `if not available`, `send to main menu`.

#### HINTS

- Here's an example of a single line comment: `# <comment_here>`
- Make sure the comments are in the same order listed
- The `else` area should look like this:
```sh
else
  # get bike availability

  # if not available

  # send to main menu

```
- The `if` should look like this:
```sh
if [[ ! $BIKE_ID_TO_RENT =~ ^[0-9]+$ ]]
then
  # send to main menu
  MAIN_MENU "That is not a valid bike number."
else
  # get bike availability

  # if not available

  # send to main menu

fi
```

## 1180. Add BIKE_AVAILABILITY

### 1180.1

Below the `get bike availability` comment you just added, create a `BIKE_AVAILABILITY` variable. Set it equal to a query that gets the `available` column from the `bikes` table for the input. Also, make sure to only get the row if it is available.

#### HINTS

- Here's an example: `BIKE_AVAILABILITY=$($PSQL "<query_here>")`
- Use the `SELECT`, `FROM`, `WHERE`, and `AND` keywords
- Here's an example of the query: `SELECT <column> FROM <table> WHERE <condition1> AND <condition2>`
- You only want the `available` column for the bike with a `bike_id` equal to the `$BIKE_ID_TO_RENT` variable and only if the bike is available
- You want two conditions, `WHERE bike_id = $BIKE_ID_TO_RENT AND available = true`
- Add this to the suggested area: `BIKE_AVAILABILITY=$($PSQL "SELECT available FROM bikes WHERE bike_id = $BIKE_ID_TO_RENT")`

## 1190. Add echo BIKE_AVAILABILITY

### 1190.1

Right below the variable you just created, use echo to print it so you can see what it looks like.

#### HINTS

- Print a variable like this: `echo $<VARIABLE_NAME>`
- The variable you want is `BIKE_AVAILABILITY`
- Add `echo $BIKE_AVAILABILITY` in the suggested area

## 1200. ./bike-shop.sh

### 1200.1

Run the script a few times, go to the rent menu, enter a bike that is available and one that isn't. You should have some `BMX` bikes that aren't available.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1210. Add if -z BIKE_AVAILABILITY

### 1210.1

The variable will be `t` or empty. Below the `if not available` comment, add an `if` condition that checks if it's empty. Put the `send to main menu` comment in it's statements area.

#### HINTS

- Here's an example:
```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
fi
```
- The condition you want is `-z $BIKE_AVAILABILITY`
- Place the `# send to main menu` comment in the `<STATEMENTS>` area
- The `if` condition should look like this:
```sh
if [[ -z $BIKE_AVAILABILITY ]]
then
  # send to main menu
fi
```

## 1215. Add MAIN_MENU That bike is not available

### 1215.1

In the `if` condition you just added, send users to the main menu with the message `That bike is not available.` if they input a number that isn't available.

#### HINTS

- You want to call the `MAIN_MENU` function with the message as an argument
- Here's an example: `MAIN_MENU "<message_here>"`
- Add `MAIN_MENU "That bike is not available."` below the `send to main menu` comment

## 1220. Remove echo BIKE_AVAILABILITY

### 1220.1

Remove the line where you print the `BIKE_AVAILABILITY` variable. You are done with it.

#### HINTS

- Remove the `echo $BIKE_AVAILABILITY` line

## 1230. ./bike-shop.sh

### 1230.1

Run the script and go to the rent menu, enter a bike that isn't available to make sure it's working. When you are done, close the program.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1233. psql UPDATE bikes SET add to true

### 1233.1

In the psql prompt, set all the bikes availability to true.

#### HINTS

- Use the `UPDATE`, `SET`, and `WHERE` keywords
- Here's an example: `UPDATE <table> SET <column> = <value> WHERE <condition>`
- You want to set `available` to `true` for all the bikes
- After the `SET` can look like this: `available = true WHERE available = false`
- Try entering `UPDATE bikes SET available = true WHERE available = false;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1236. Add else with comments

### 1236.1

In your script, add an `else` for when a bike is available. Add these four comments in the `else` area `get customer info`, `if customer doesn't exist`, `get new customer name`, and `insert new customer`.

#### HINTS

- Here's an example of a single line comment: `# <comment_here>`
- Make sure the comments are in the same order listed
- The `else` area should look like this:
```sh
else
  # get customer info

  # if customer doesn't exist

  # get new customer name

  # insert new customer

```
- The `if` should look like this:
```sh
if [[ -z $BIKE_AVAILABILITY  ]]
then
  # send to main menu
  MAIN_MENU "That bike is not available."
else
  # get customer info

  # if customer doesn't exist

  # get new customer name

  # insert new customer

fi
```

## 1240. Add echo What's your phone number?

### 1240.1

As the comments say, you need to get the customer info and find out if they are an existing customer. Below the `get customer info` comment, print `What's your phone number?` with a new line in front of it. 

#### HINTS

- Use `echo` with the `-e` flag and the new line character (`\n`) to print the suggested message
- Use double quotes around the message
- Here's an example: `echo -e "\n<message_here>"`
- Add `echo -e "\nWhat's your phone number?"` below the suggested comment

## 1250. read PHONE_NUMBER

### 1250.1

Below the line you just printed, read input into a `PHONE_NUMBER` variable. Since the phone number is unique, you can use it to identify a customer.

#### HINTS

- Here's an example: `read <VARIABLE_NAME>`
- Add `read PHONE_NUMBER` to the suggested area
- Add it below where you print `What's your phone number?`

## 1260. Add CUSTOMER_NAME

### 1260.1

With the customer's phone number, you can get their name. Below where you get the phone number, create a `CUSTOMER_NAME` variable that gets the customers name using the phone number.

#### HINTS

- Query the database to set the `CUSTOMER_NAME` variable
- Here's an example: `CUSTOMER_NAME=$($PSQL "<query_here>")`
- Use the `SELECT`, `FROM` and `WHERE` keywords for your command
- The condition you want is `phone = '$PHONE_NUMBER'`
- You only want the `name` column from the `customers` table
- Add this to the suggested area: `CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone = '$PHONE_NUMBER'")`

## 1265. Add if -z CUSTOMER_NAME

### 1265.1

If the customer is in the database with the phone number used, the variable will be set to the name. If not, it will be empty. Add an `if` condition below the `if customer doesn't exist` comment that checks if the variable is empty. Place the next two comments in the `then` area.

#### HINTS

- Here's an example:
```sh
if [[ <CONDITION> ]]
then
  <STATEMENTS>
fi
```
- The condition you want is `-z $CUSTOMER_NAME`
- Place the `# get new customer name` and `# insert new customer` comments in the `<STATEMENTS>` area
- The `if` condition should look like this:
```sh
if [[ -z $CUSTOMER_NAME ]]
then
  # get new customer name

  # insert new customer

fi
```

## 1270. Add echo What's your name?

### 1270.1

Below the `get new customer name` comment, print `What's your name?` with a new line in front of the message.

#### HINTS

- Use `echo` with the `-e` flag and the new line character (`\n`) to print the suggested message
- Use double quotes around the message
- Here's an example: `echo -e "\n<message_here>"`
- Add `echo -e "\nWhat's your name?"` below the suggested comment

## 1280. read CUSTOMER_NAME

### 1280.1

Below the question you just printed, read input into a variable named `CUSTOMER_NAME`.

#### HINTS

- Here's an example: `read <VARIABLE_NAME>`
- Add `read CUSTOMER_NAME` to the suggested area
- Add it below where you print `What's your name?`

## 1290. Add INSERT_CUSTOMER_RESULT

### 1290.1

You have the two pieces of information you need. Below the `insert new customer` comment, create an `INSERT_CUSTOMER_RESULT` variable that inserts the customer into the database.

#### HINTS

- Here's an example: `INSERT_CUSTOMER_RESULT=$($PSQL "<query_here>")`
- View the `customers` table in the psql prompt with `\d customers` to see the columns you need to add data to
- Be sure to use single quotes around `VARCHAR` values
- The query looks similar to this: `INSERT INTO customers(column1, column2) VALUES('value1', 'value2')`
- You want to use the `CUSTOMER_NAME` and `PHONE_NUMBER` variables for the values
- Here's the query: `INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME', '$PHONE_NUMBER')`
- Add `INSERT_CUSTOMER_RESULT=$($PSQL "INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME', '$PHONE_NUMBER')")` below the `insert new customer` comment

## 1300. Run the script

### 1300.1

Run your script and go to the rent menu. Pick a bike to rent, then enter `555-5555` when it asks for a phone number, and `Me` when it asks for your name.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Follow the instructions closely
- Make sure to use `555-5555` for the phone number and `Me` for the name
- The database should have a customer with `555-5555` as their phone number, and `Me` as their name in it

## 1310. psql SELECT * FROM customers

### 1310.1

That should have added a new customer to the database. In the psql prompt, view all the data in the `customers` table to see if it's working.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM customers;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1311. psql SELECT * FROM rentals

### 1311.1

Excellent. View all the data in the rentals table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM rentals;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1312. psql SELECT * FROM bikes

### 1312.1

So you still need to add the rental to the rentals table when a bike is picked out. View all the data in the `bikes` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM bikes;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1315. Add comments

### 1315.1

And you still need to set the `available` column to false for the bike after it's rented. Below the `if` statement that inserts a new customer, add five more comments: `get customer_id`, `insert bike rental`, `set bike availability to false`, `get bike info`, and `send to main menu`

#### HINTS

- Here's an example of a single line comment: `# <comment_here>`
- Make sure the comments are in the same order listed
- The comments should be below (not in) the `if [[ -z $CUSTOMER_NAME ]]` `if` statement
- The comments should look like this:
```sh
  if [[ -z $CUSTOMER_NAME ]]
  then
    # get new customer name
    echo -e "\nWhat's your name?"
    read CUSTOMER_NAME

    # insert new customer
    INSERT_CUSTOMER_RESULT=$($PSQL "INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME', '$PHONE_NUMBER')")
  fi

  # get customer_id

  # insert bike rental

  # set bike availability to false

  # get bike info

  # send to main menu

```

## 1320. Add CUSTOMER_ID

### 1320.1

Getting close to done with the rent function. To add a rental to the database, you need the customer ID. Below the `get customer_id` comment, create a `CUSTOMER_ID` variable that gets the `customer_id` using the phone number.

#### HINTS

- Here's an example: `CUSTOMER_ID=$($PSQL "<query_here>")`
- You want to get the `customer_id` column from the customers table using the `PHONE_NUMBER` variable in your condition to get it
- The condition you want is `WHERE phone = '$PHONE_NUMBER'`
- The query looks like this: `SELECT customer_id FROM customers WHERE phone = '$PHONE_NUMBER'`
- Add `CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone='$PHONE_NUMBER'")` below the `get customer_id` comment

## 1330. Add INSERT_RENTAL_RESULT

### 1330.1

Now that you have the bike ID and customer ID, you can add the rental to the database. Below the `insert bike rental` comment, create a `INSERT_RENTAL_RESULT` variable that adds the rental to the database.

#### HINTS

- Here's an example: `INSERT_RENTAL_RESULT=$($PSQL "<query_here>")`
- View the `rentals` table by entering `\d rentals` in the psql prompt to see what the columns are
- The query looks similar to this: `INSERT INTO rentals(column1, column2) VALUES(value1, value2)`
- You want to insert the `BIKE_ID_TO_RENT` and `CUSTOMER_ID` variables into the `bike_id` and `customer_id` columns
- The query should look like this: `INSERT INTO rentals(bike_id, customer_id) VALUES($BIKE_ID_TO_RENT, $CUSTOMER_ID)`
- Add this to the suggested area: `ADD_RENTAL_RESULT=$($PSQL "INSERT INTO rentals(customer_id, bike_id) VALUES($CUSTOMER_ID, $BIKE_ID_TO_RENT);")`

## 1370. Add SET_TO_FALSE_RESULT

### 1370.1

That should add the row to the rentals table. The last thing to change in the database is to set `available` to false for the bike. Below the `set bike availability to false` comment, create a `SET_TO_FALSE_RESULT` variable that does that.


Add `SET_TO_FALSE_RESULT=$($PSQL "UPDATE bikes SET available = false WHERE bike_id = $BIKE_ID_TO_RENT")`

The available row didn't get set to false for the bike you rented so you need to set that to false next. In your script, create a `SET_TO_FALSE_RESULT` variable that sets `available` column in the `bikes` table to `false` for the bike with the `$BIKE_ID_TO_RENT` value.

#### HINTS

- Here's an example: `SET_TO_FALSE_RESULT=$($PSQL "<query_here>")`
- You want to use the `UPDATE`, `SET`, and `WHERE` keywords
- You want to set the `available` column to `false` for the `bike_id` of `BIKE_ID_TO_RENT`
- The query looks similar to this: `UPDATE <table> SET <column> = <value> WHERE <condition>`
- The query looks like this: `UPDATE bikes SET available = false WHERE bike_id = $BIKE_ID_TO_RENT`
- Add `SET_TO_FALSE_RESULT=$($PSQL "UPDATE bikes SET available = false WHERE bike_id = $BIKE_ID_TO_RENT")` below the `set bike availability to false` comment

## 1380. Run the script

### 1380.1

Run the script and go to the rent menu. Pick the first bike to rent, enter `555-5555` when it asks for a phone number again. That phone number should already be in the database, so it won't ask for a name or insert a customer.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure to enter the correct bike number and phone number

## 1390. psql SELECT * FROM rentals

### 1390.1

In the psql prompt, view all the data in the `rentals` table. There should be a new rental.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM bikes;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1400. psql SELECT * FROM bikes ORDER BY bike_id

### 1400.1

The rental was added and the `date_rented` was filled in automatically. :smile: Next, view all the data in the `bikes` table. Order the results by `bike_id`

#### HINTS

- Use the `SELECT`, `FROM`, and `ORDER BY` keywords with `*` to view all the data
- Enter `SELECT * FROM bikes ORDER BY bike_id;` in the psql prompt
- You can type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in.

## 1401. Add BIKE_INFO

### 1401.1

The bike at the top was set to false. The last thing you want to do is give a nice message about the rental. Below the `get bike info` comment, create a `BIKE_INFO` variable that gets the `size` and `type`, in that order, of the bike rented.

Add `BIKE_INFO=$($PSQL "SELECT size, type FROM bikes WHERE bike_id = $BIKE_ID_TO_RENT")`

#### HINTS

- Here's an example: `BIKE_INFO=$($PSQL "<query_here>")`
- You want to use the `SELECT`, `FROM`, and `WHERE` keywords
- Use the `BIKE_ID_TO_RENT` variable to find the needed info for the bike
- The query looks similar to this: `SELECT size, type FROM <table> WHERE <condition>`
- The condition you want is `WHERE bike_id = $BIKE_ID_TO_RENT`
- The query looks like this: `SELECT size, type FROM bikes WHERE bike_id = $BIKE_ID_TO_RENT`
- Add `BIKE_INFO=$($PSQL "SELECT size, type FROM bikes WHERE bike_id = $BIKE_ID_TO_RENT")` below the `get bike info` comment

## 1402. Add echo BIKE_INFO

### 1402.1

Below the variable you just created, use `echo` to print it.

#### HINTS

- Print a variable like this: `echo $<VARIABLE_NAME>`
- The variable you want is `BIKE_AVAILABILITY`
- Add `echo $BIKE_AVAILABILITY` in the suggested area

## 1403. ./bike-shop.sh

### 1403.1

Run the script again and go to the rent menu, there should now be one less bike displayed. Pick the next bike on the list and rent it with the same customer so you can see the variable.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure to rent a second bike using the customer with the phone number `555-5555`

## 1404. echo '28 | Mountain' | sed 's/ /=/'

### 1404.1

The message you want to print will say something like, `I have put you down for the 28" Mountain Bike, Me.`. You need to format that variable for the message. In the terminal, enter `echo '28 | Mountain' | sed 's/ /=/'`

#### HINTS

- Enter the suggested command in the terminal
- Not the psql one

## 1405. echo '28 | Mountain' | sed 's/ /=/g'

### 1405.1

The `sed` command can be used to replace characters and patterns in a string. It looks like this: `sed s/<pattern_to_replace>/<characters_to_replace_with>/`. The `sed s/ /=/` you used in the last command, replaced the first space in the string you passed to it with `=`.

terminal:
echo '28 | Mountain' | sed 's/ /=/g'

#### HINTS

- Hint

## 1407. echo '28 | Mountain' | sed 's/ //g'

### 1407.1

terminal:
echo '28 | Mountain' | sed 's/ //g'

#### HINTS

- Hint

## 1408. echo '28 | Mountain' | sed 's/ |//g'

### 1408.1

terminal:
echo '28 | Mountain' | sed 's/ |//g'

#### HINTS

- Hint

## 1410. echo '28 | Mountain' | sed 's/ |/"/'

### 1410.1

terminal:
echo '28 | Mountain' | sed 's/ |/"/'

#### HINTS

- Hint

## 1411. Add echo BIKE_INFO | sed 's/ |/"/'

### 1411.1

Add echo BIKE_INFO | sed 's/ |/"/'

#### HINTS

- Hint

## 1413. ./bike-shop.sh

### 1413.1

run script. rent a bike

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1415. Add BIKE_INFO_FORMATTED

### 1415.1

Add BIKE_INFO_FORMATTED=$(...)

#### HINTS

- Hint

## 1417. Add MAIN_MENU I have put you down for bike

### 1417.1

add `MAIN_MENU "I have put you down for the $BIKE_INFO_FORMATTED Bike, $CUSTOMER_NAME."`

#### HINTS

- Hint

## 1418. ./bike-shop.sh

### 1418.1

run script. rent a bike

#### HINTS

- Hint

## 1420. echo ' M e '

### 1420.1

terminal echo ' M e '

#### HINTS

- Hint

## 1422. echo "$(echo ' M e ')."

### 1422.1

terminal
echo "$(echo ' M e ')."

#### HINTS

- Hint

## 1424. echo "$(echo ' M e ' | sed 's/ //')."

### 1424.1

terminal
echo "$(echo ' M e ' | sed 's/ //')."

#### HINTS

- Hint

## 1425. echo "$(echo ' M e ' | sed 's/ //g')."

### 1425.1

echo "$(echo ' M e ' | sed 's/ //g')."

#### HINTS

- Hint

## 1427. echo "$(echo ' M e ' | sed 's/^ //g')."

### 1427.1

terminal
echo "$(echo ' M e ' | sed 's/^ //g')."

#### HINTS

- Hint

## 1428. echo "$(echo '   M e ' | sed 's/^ //g')."

### 1428.1

terminal 
echo "$(echo '   M e ' | sed 's/^ //g')."

#### HINTS

- Hint

## 1430. echo "$(echo '   M e ' | sed 's/^ *//g')."

### 1430.1

echo "$(echo '   M e ' | sed 's/^ *//g')."

#### HINTS

- Hint

## 1432. echo "$(echo '   M e ' | sed 's/ $//g')."

### 1432.1

echo "$(echo '   M e ' | sed 's/ $//g')."

#### HINTS

- Hint

## 1433. echo "$(echo '   M e   ' | sed 's/ $//g')."

### 1433.1

echo "$(echo '   M e   ' | sed 's/ $//g')."

#### HINTS

- Hint

## 1435. echo "$(echo '   M e   ' | sed 's/ *$//g')."

### 1435.1

echo "$(echo '   M e   ' | sed 's/ *$//g')."

#### HINTS

- Hint

## 1436. echo "$(echo '   M e   ' | sed 's/^ *| *$//g')."

### 1436.1

echo "$(echo '   M e   ' | sed 's/^ *| *$//g')."

#### HINTS

- Hint

## 1438. echo "$(echo '   M e   ' | sed -r 's/^ *| *$//g')."

### 1438.1

echo "$(echo '   M e   ' | sed -r 's/^ *| *$//g')."

#### HINTS

- Hint

## 1440. Change to trim CUSTOMER_NAME

### 1440.1

change $CUSTOMER_NAME to $(echo $CUSTOMER_NAME | sed -r 's/^ *| *$//g')

#### HINTS

- Hint

## 1450. Run the script

### 1450.1

Run the script and rent a bike.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1453. Delete echo Return Menu

### 1453.1

Delete echo Return Menu

#### HINTS

- Hint

## 1457. Add comments to RETURN_MENU

### 1457.1

Add comments to RETURN_MENU:
get customer info
if not found
send to main menu

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1460. Start the Return Bike Functionality

### 1460.1

Add `echo -e "\nWhat's your phone number?"`

Okay, I think the renting part is looking good. Last is the ability to return a bike. I suppose the logic for that would be to get their phone number, check if they have any rentals, ask them what bike to return, and update the rental and bike records. First, change that placeholder message still in your `RETURN_MENU` function with `What's your phone number?` 

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1470. Read PHONE_NUMBER

### 1470.1

Use `read` to get input into a `PHONE_NUMBER` variable.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1472. Add CUSTOMER_ID

### 1472.1

Add `CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone = '$PHONE_NUMBER'")`

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1474. Add if -z CUSTOMER_ID

### 1474.1

Add if -z CUSTOMER_ID
then
send to main menu
fi

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1475. Add MAIN_MENU I could not find a recond for that phone number

### 1475.1

Add MAIN_MENU "I could not find a record for that phone number."

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1476. ./bike-shop.sh

### 1476.1

Run script. return menu. enter a number not in the database

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1478. Add else with comments

### 1478.1

Add else with comments:
	get customer’s rentals
	if no rentals
	send to main menu

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1480. psql SELECT * FROM bikes

### 1480.1

psql SELECT * FROM bikes

Okay, so how can you find out what rentals a person has from their phone number? You need their `customer_id` since that's what is stored in the `rentals` table to find out what rentals they have. And once you find that out, you need to get the bike info for the bikes they have rented. :astonished: :cold_sweat: In the psql prompt, enter a command to select all the rows and columns from the bikes table.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1490. psql SELECT bikes INNER JOIN rentals

### 1490.1

psql SELECT * FROM bikes INNER JOIN rentals USING(bike_id)

You need to use `JOIN` to add info from another table to that command. Add this to the end of the command you just entered: `LEFT OUTER JOIN rentals ON bikes.bike_id = rentals.bike_id;`. That will get all the columns from the bikes and rentals table.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1500. psql SELECT bikes INNER JOIN rentals INNER JOIN customers

### 1500.1

psql SELECT * FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id)

So you can get info from those two tables, but you need the column for the customers phone number from the third table. You can add another join for that. `Add LEFT OUTER JOIN customers ON customers.customer_id = rentals.customer_id` to the end of the last command. You may need to make the window a little wider to see the output.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1510. psql Add conditions to the query

### 1510.1

Add conditions to last query

Now you're getting the info from all three tables :smile: But you only need the current rentals for the customer who's phone number you are looking for. Add two `WHERE` conditions to the end of the last command. One should phone number, use one of the phone numbers shown. The second should be to only show items where the bike hasn't been returned yet. You can do that with `date_returned IS NULL`
`SELECT * FROM bikes LEFT OUTER JOIN rentals ON bikes.bike_id = rentals.bike_id LEFT OUTER JOIN customers ON customers.customer_id = rentals.customer_id WHERE phone='$PHONE_NUMBER' AND date_returned is null;`

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1520. psql SELECT only columns

### 1520.1

only get the columns you need

That's a big query, but you're not done yet. You only need a few of those columns, select just the `bike_id`, `type`, and `size` columns. Since there's two `bike_id` columns, PostgreSQL needs to know what table you want that column from. Tell it to use the bikes table like this: `bikes.bike_id`

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1525. psql SELECT ORDER BY

### 1525.1

order the results by bike_id

That's a big query, but you're not done yet. You only need a few of those columns, select just the `bike_id`, `type`, and `size` columns. Since there's two `bike_id` columns, PostgreSQL needs to know what table you want that column from. Tell it to use the bikes table like this: `bikes.bike_id`

#### HINTS

- Hint

## 1530. Add CUSTOMER_RENTALS

### 1530.1

Add `CUSTOMER_RENTALS=$($PSQL "SELECT bike_id, type, size FROM customers INNER JOIN rentals USING(customer_id) INNER JOIN bikes USING(bike_id) WHERE customer_id = $CUSTOMER_ID AND date_returned IS NULL ORDER BY bike_id")`

Take that giant query and put it in a variable named `CUSTOMER_RENTALS` in your `RETURN_MENU` function. In the condition of the query, use the `PHONE_NUMBER` variable instead of the hard-coded value.

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1540. Add echo CUSTOMER_RENTALS

### 1540.1

Add echo "$CUSTOMER_RENTALS"

#### HINTS

- Hint

## 1550. ./bike-shop.sh

### 1550.1

Run the script and go to the return menu. Enter `555-5555` for the phone number to see the rentals for me.

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1560. Add if -z CUSTOMER_RENTALS

### 1560.1

Add if -z CUSTOMER_RENTALS
send to main menu

Okay, it looks like it's working. Add and `if` condition after your variable that sends users to the main menu if the variable is empty. Add the message, `I could not find any rentals for that phone number`

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1563. Add MAIN_MENU You do not have any bikes rented

### 1563.1

add MAIN_MENU "You do not have any bikes rented."

#### HINTS

- Hint

## 1570. Add else with comments

### 1570.1

Add else with comments:
	display rented bikes
	ask for bike to return
	if not a number
	send to main menu

#### HINTS

- Hint

## 1572. Add echo Here are your rentals

### 1572.1

Add echo -e "\nHere are your rentals:\n"

#### HINTS

- Hint

## 1575. Add echo CUSTOMER_RENTALS

### 1575.1

move the echo "$CUSTOMER_RENTALS"

#### HINTS

- Hint

## 1578. ./bike-shop.sh

### 1578.1

run the script, go to return menu

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1580. Add pipe and while loop

### 1580.1

add
```sh
      echo "$CUSTOMER_RENTALS" | while read BIKE_ID BAR TYPE BAR SIZE
      do
        echo "$BIKE_ID) $SIZE\" $TYPE Bike"
      done
```
You need to pipe those results into a while loop again and read the info into a variable so you can make it pretty.

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1585. ./bike-shop.sh

### 1585.1

run the script, go to return menu

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1590. Add echo Which bike would you like to return?

### 1590.1

Add `echo -e "\nWhich one would you like to return?"`

#### HINTS

- Hint

## 1600. read BIKE_ID_TO_RETURN

### 1600.1

add read BIKE_ID_TO_RETURN

#### HINTS

- Hint

## 1602. Add if BIKE_ID_TO_RETURN not a number

### 1602.1

Add if [[ ! $BIKE_ID_TO_RETURN =~ ^[0-9]+$ ]]
then
send to main menu
fi

#### HINTS

- Hint

## 1605. Add MAIN_MENU That is not a valid bike number

### 1605.1

Add MAIN_MENU "That is not a valid bike number."

#### HINTS

- Hint

## 1607. Add else with comments

### 1607.1

Add else with comments
	check if input is rented
	if input not rented
	send to main menu

#### HINTS

- Hint

## 1610. psql SELECT rentals INNER JOIN customers

### 1610.1

psql rentals INNER JOIN customers

#### HINTS

- Hint

## 1620. psql Add conditions to the query

### 1620.1

```sh
WHERE phone='555-5555' AND date_returned IS NULL AND bike_id=1;")
```

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1625. psql Only get columns needed

### 1625.1

psql only get rental_id column needed

#### HINTS

- Hint

## 1630. Add RENTAL_ID

### 1630.1

Add `RENTAL_ID=$($PSQL "SELECT rental_id FROM rentals INNER JOIN customers USING(customer_id) WHERE customer_id = $CUSTOMER_ID AND bike_id = $BIKE_ID_TO_RETURN AND date_returned IS NULL")`

#### HINTS

- Hint

## 1640. Add if -z RENTAL_ID

### 1640.1

add if [[ -z $RENTAL_ID ]]
then
send to main menu
fi

#### HINTS

- Hint

## 1645. Add MAIN_MENU You do not have that bike rented

### 1645.1

add MAIN_MENU "You do not have that bike rented."

#### HINTS

- Hint

## 1650. Run the script

### 1650.1

go to return, enter the phone, input a bike that doesn’t exist - close the program

Run the script and go to the return menu. Enter 555-5555 when asked for a phone number and pick a bike to return. so you can see if the query is working.

#### HINTS

- Hint

## 1680. Add else with comments

### 1680.1

add else with comments:
	update date_returned
	set bike availability to true
	send to main menu

#### HINTS

- Hint

## 1690. Add RETURN_BIKE_RESULT

### 1690.1

Add `RETURN_BIKE_RESULT=$($PSQL "UPDATE rentals SET date_returned = NOW() WHERE rental_id=$RENTAL_ID")`


#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1710. Add SET_TO_TRUE_RESULT

### 1710.1

Add `SET_TO_TRUE_RESULT=$($PSQL "UPDATE bikes SET available = true WHERE bike_id = $BIKE_ID_TO_RETURN")`

#### HINTS

- Be sure to use a subprocess and your `PSQL` variable like the other queries
- Make sure you are in the `project` folder first

## 1730. Add MAIN_MENU Thank you for returning your bike

### 1730.1

add `MAIN_MENU "Thank you for returning your bike."`

#### HINTS

- Hint

## 1740. ./bike-shop.sh

### 1740.1

run the script, return the bike you rented

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1750. psql SELECT * FROM rentals

### 1750.1

psql SELECT * FROM rentals - order by date returned?

#### HINTS

- Hint

## 1760. psql SELECT * FROM bikes ORDER BY bike_id

### 1760.1

psql select * from bikes order by bike_id

#### HINTS

- Hint

## 1770. ./bike-shop.sh

### 1770.1

This is the last step. Run the script once more. Feel free to play around, rent and return some bikes. When you are ready to be done, return all the bikes you rented.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
