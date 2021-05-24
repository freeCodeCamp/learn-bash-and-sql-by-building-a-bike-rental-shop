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
- Try entering `CREATE TABLE bikes();`
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
- Try entering `ALTER TABLE bikes ADD COLUMN bike_id SERIAL PRIMARY KEY;`
- You can drop a column with `ALTER TABLE bikes DROP COLUMN bike_id;` if you need to try again
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 100. Display `bikes` Details

### 100.1

Use the **d**isplay command to view the details of the `bikes` table.

#### HINTS

- It's the `\d` command
- Add the table name to the command
- Try entering `\d bikes`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 110. Add `type` column

### 110.1

Looks like first column is set. Add a column named `type` for the type of bike. Make it a `VARCHAR(50)` and give it a constraint of `NOT NULL`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR(50)`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE bikes ADD COLUMN type VARCHAR(50) NOT NULL;`
- You can drop a column with `ALTER TABLE bikes DROP COLUMN type;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 120. Display `bikes` details

### 120.1

Display the details of the `bikes` table again.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d bikes`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in

## 130. Add Column `size`

### 130.1

Add a column named `size` to the `bikes` table that is an `INT` and has the `NOT NULL` constraint. This will be for the size of each bike.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `INT`, and `NOT NULL` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE bikes ADD COLUMN size INT NOT NULL;`
- You can drop a column with `ALTER TABLE bikes DROP COLUMN size;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in

## 140. Add Column `available`

### 140.1

Add another column to the table named `available`. Make it a `boolean` and has a constaint of `NOT NULL`. Also give it a default value of `TRUE`. This will be set to `false` when someone rents out a bike.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `BOOLEAN`, and `DEFAULT TRUE` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE DEFAULT;`
- Try entering `ALTER TABLE bikes ADD COLUMN available BOOLEAN DEFAULT TRUE;`
- You can drop a column with `ALTER TABLE bikes DROP COLUMN available;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in

## 150. Display `bikes` details

### 150.1

Display the details of the `bikes` table again so you can make sure it's how you want it.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d bikes`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 160. Create Table `customers`

### 160.1

It's looking good. Create another table named `customers`. It will store a name and phone number for each customer that wants to rent a bike.

#### HINTS

- Use the `CREATE TABLE` keywords
- Don't forget the parenthesis
- Here's an example: `CREATE TABLE table_name();`
- Try entering `CREATE TABLE customers();`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 170. Add Column `customer_id`

### 170.1

Add a `customer_id` column to your new table that is a type of `SERIAL` and make it a `PRIMARY KEY`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE customers ADD COLUMN customer_id SERIAL PRIMARY KEY;`
- You can drop a column with `ALTER TABLE customers DROP COLUMN customer_id;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 180. Display `customers` Details

### 180.1

Display the details of the `customers` table so you can make sure your new column is there.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d customers`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 190. Add Column `phone`

### 190.1

Add a column named `phone` for customers phone numbers. Make it a varying character that has a maximum length of `15` characters. Also make sure it can't be null, and that it has to be unique.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `VARCHAR()`, `NOT NULL`, and `UNIQUE` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE customers ADD COLUMN phone VARCHAR(15) NOT NULL UNIQUE;`
- You can drop a column with `ALTER TABLE customers DROP COLUMN phone;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 200. Add Column `name`

### 200.1

Add the last column. Call it `name` and make it a `VARCHAR(40)` that can't be null.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE customers ADD COLUMN name VARCHAR(40) NOT NULL;`
- You can drop a column with `ALTER TABLE customers DROP COLUMN name;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 210. Display `customers` Details

### 210.1

Display the details of the `customers` table.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d customers`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 220. Create Table `rentals`

### 220.1

I think that table is finished. Lastly, you need a table to store which bikes are rented and to whom. Create a new table named `rentals`.

#### HINTS

- Use the `CREATE TABLE` keywords
- Don't forget the parenthesis
- Here's an example: `CREATE TABLE table_name();`
- Try entering `CREATE TABLE rentals();`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 230. Add Column `rental_id`

### 230.1

Add a `rental_id` column to your new table. Make it automatically increment with `SERIAL` and make it the primary key for this table.

#### HINTS

- The other two properties are `SERIAL` and `PRIMARY KEY`
- Use the `ALTER TABLE`, `ADD COLUMN`, `SERIAL`, and `PRIMARY KEY` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN rental_id SERIAL PRIMARY KEY;`
- You can drop a column with `ALTER TABLE rentals DROP COLUMN rental_id;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 240. Display `rentals` Details

### 240.1

Display the details of the `rentals` table.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 250. Add Column `customer_id`

### 250.1

Next, you need a column for the customer who is renting a bike. Add column named `customer_id`. This will have an id of a customer from the customers table. Make the column an `INT` and `NOT NULL` to start.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `INT`, and `NOT NULL` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN customer_id INT NOT NULL;`
- You can drop a column with `ALTER TABLE rentals DROP COLUMN customer_id;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 260. Set `customer_id` Foreign Key

### 260.1

Make the column you just added a foreign key that references the `customer_id` column from the `customers` table. Here's an example of how you can do that:

```sql
ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);
```

#### HINTS

- Without the keywords, it looks like tihs: `rentals customer_id customers(customer_id)`
- Try entering `ALTER TABLE rentals ADD FOREIGN KEY(customer_id) REFERENCES customers(customer_id);`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 270. Display `rentals` Details

### 270.1

Display the details of the `rentals` table to make sure your key is set.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 280. Add Column `bike_id`

### 280.1

Alright, you need another column so you know what bike a customer is renting. Add a column named `bike_id` and make it an `INT` and `NOT NULL`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `INT`, and `NOT NULL` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN bike_id INT NOT NULL;`
- You can drop a column with `ALTER TABLE rentals DROP COLUMN bike_id;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 290. Add `bike_id` Foreign Key

### 290.1

Make that column a foreign key that references the `bike_id` column from the `bikes` table so you know what bike the id is for.

#### HINTS

- Here's the example again: `ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);`
- Without the keywords, it looks like tihs: `rentals bike_id bikes(bike_id)`
- Try entering `ALTER TABLE rentals ADD FOREIGN KEY(customer_id) REFERENCES customers(customer_id);`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 300. Display `rentals` Details

### 300.1

Display the details of the `rentals` table so you can make sure the key is correct.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 310. Add `date_rented` Column

### 310.1

Moving along. You want to know when a customer rents a bike, and when it gets returned. Add a column to your `rentals` table named `date_rented` that's a type of `DATE`. Make sure the entry can't be null, and give it a default value of `NOW()`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `DATE`, `NOT NULL`, and `DEFAULT NOW()` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE CONSTRAINTS;`
- Try entering `ALTER TABLE rentals ADD COLUMN date_rented DATE NOT NULL DEFAULT NOW();`
- You can drop a column with `ALTER TABLE rentals DROP COLUMN date_rented;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 320. Display `rentals` Details

### 320.1

Display the details of the `rentals` table again.

#### HINTS

- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 330. Add Column `date_returned`

### 330.1

Lastly, you need column for when a customer returns a bike. Add a column named `date_returned` that's a type of `DATE`.

#### HINTS

- Use the `ALTER TABLE`, `ADD COLUMN`, `DATE` keywords
- Here's an example: `ALTER TABLE table_name ADD COLUMN column_name TYPE;`
- Try entering `ALTER TABLE rentals ADD COLUMN date_returned DATE;`
- You can drop a column with `ALTER TABLE rentals DROP COLUMN date_rented;` if you need to try again.
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 340. Display `rentals` Details

### 340.1

View the details of the table again.

#### HINTS

- It's the `rentals` table
- Use the **d**isplay shortcut command
- Add the table name to the command
- Here's an example: `\d table_name`
- Try entering `\d rentals`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 350. Display Tables

### 350.1

Okay, I think it looks good. Display all the tables so you can see what you ended up with.

#### HINTS

- Use the **d**isplay shortcut command
- It's the `\d` command
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 360. Insert 27 inch Mountain Bike

### 360.1

I think the structure of your database is set. You have nine bikes in your inventory. Add the first one to your `bikes` table. It has a `type` of `Mountain` and a `size` of `27`. Make sure to put your `VARCHAR` values in single quotes. The `bike_id` and `available` columns should be filled in automatically, so you don't need to worry about those.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Mountain', 27);`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 370. Select all from Bikes

### 370.1

View all the columns in your bikes table with `SELECT`.

#### HINTS

- Use `*` to view all the columns
- Here's an example: `SELECT * FROM table_name;`
- Try entering `SELECT * from bikes;`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 380. Insert 28 inch Mountain Bike

### 380.1

Looks like it's all working, the `bike_id` and `available` columns were filled in automatically. Insert another bike. Give it a `type` of `Mountain` and a `size` of `28`.

#### HINTS

- Make sure to put your `VARCHAR` values in single quotes
- Use the `INSERT INTO` and `VALUES` keywords
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Mountain', 28);`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 390. Insert 29 inch Mountain Bike

### 390.1

Add another `Mountain` bike to your inventory. Make it a `29` inch bike.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Make sure to put your `VARCHAR` values in single quotes
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Mountain', 29);`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 400. Insert 27 inch Road Bike

### 400.1

Add a `27` inch `Road` bike to the table.

#### HINTS

- Use the `INSERT INTO` and `VALUES` keywords
- Make sure to put your `VARCHAR` values in single quotes
- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value);`
- Try entering `INSERT INTO bikes(type, size) VALUES('Road', 27);`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 410. Select all from Bikes

### 410.1

Use `SELECT` to view all the data in the `bikes` table again.

#### HINTS

- Use `*` to view all the columns
- Here's an example: `SELECT * FROM table_name;`
- Try entering `SELECT * from bikes;`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 420. Insert 28 and 29 inch Road Bikes

### 420.1

Add `28` and `29` inch `Road` bikes to your inventory. Try to add them both with one command.

#### HINTS

- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value), (value, value);`
- Make sure to put your `VARCHAR` values in single quotes
- Try entering `INSERT INTO bikes(type, size) VALUES('Road', 28), ('Road', 29);`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 430. Insert 19, 20, 21 inch BMX Bikes

### 430.1

There's three more bikes. Add `19`, `20`, and `21` inch `BMX` bikes to your table. Try to add them with one command.

#### HINTS

- Here's an example: `INSERT INTO table_name(column_name, column_name) VALUES(value, value), (value, value), (value, value);`
- Make sure to put your `VARCHAR` values in single quotes
- Try entering `INSERT INTO bikes(type, size) VALUES('BMX', 19), ('BMX', 20), ('BMX', 21);`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 440. Select all from Bikes

### 440.1

View all the data in your bikes table.

#### HINTS

- Use `SELECT` with `*` to view all the col
- Here's an example: `SELECT * FROM table_name;`
- Try entering `SELECT * from bikes;`
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you aren't logged in first

## 450. touch bike-shop.sh

### 450.1

Okay, you have a database structure and your inventory is added. For the rest of the tutorial, I recommend leaving that terminal open and connected and that you should "split" the terminal so you have a second one that you can use for bash commands. Do that by clicking the "hamburger" menu at the top left of the window, going to the "terminal" section, and clicking "split terminal". After you have opened it, use the `touch` command to create a file named `bike-shop.sh` in the `project` folder.

#### HINTS

- Try entering `touch bike-shop.sh` in the terminal
- Make sure you are in the `project` folder first
- If you opened a new terminal instead of splitting it, you can close it by entering `exit` and try again
- Type `psql --username=freecodecamp --dbname=bikes` into the terminal to log in to psql if you want

## 460. Add shebang!

### 460.1

This `bike-shop.sh` will be the program for your bike rental shop. Open the file in the editor, making it and CodeRoad visible. Then, and add a "shebang" at the top of the file so it uses `bash` when it's executed. If you don't remember, it looks like this: `#!/bin/bash`.

#### HINTS

- Add `#!/bin/bash` to the top of your `bike-shop.sh` file

## 470. Add echo Bike Rental Shop

### 470.1

You should now have two terminals, your `bike-shop.sh` file, and CodeRoad opened in your environment and they should all be visible. In the file, use `echo` with the `-e` flag to print `~~~~~ Bike Rental Shop ~~~~~` with a new line at the beginning and end.

#### HINTS

- The newline character is `\n`
- Use double quotes around the message so the new lines are printed
- Here's an example: `echo -e "\n<message_here>\n"`
- Add `echo -e "\n~~~~~ Bike Rental Shop ~~~~~\n"` to the `bike-shop-sh` file
- Type `psql --username=freecodecamp --dbname=postgres` into the terminal to log in to psql if you need to

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

- Add `MAIN_MENU() {}` to the bottom of the script

## 520. Add echo How may I help you?

### 520.1

In your function, echo the text `How may I help you?` so that there's a greeting when you go to the menu.

#### HINTS

- Add `echo "How may I help you?"` in the designated area

## 530. Add `MAIN_MENU` function call

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

## 630. Add `MAIN_MENU` Options

### 630.1

It's coming along. Add another `echo` command in the function after the other one. Make it output text that looks like this:

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

You have some options displaying. Next, you need to get input from whoever is using the program. Use the `read` command to read input into a variable called `MAIN_MENU_SELECTION`.

#### HINTS

- Here's an example: `read <VARIABLE_NAME>`
- Here's what the code looks like: `read MAIN_MENU_SELECTION`
- Add the code at the bottom of the `MAIN_MENU` function

## 660. Add `RENT_MENU`

### 660.1

When an option gets entered, you need to take a user to one of those other menus. Add an empty `RENT_MENU` function below the `MAIN_MENU` function.

#### HINTS

- Add `RENT_MENU() {}` between the `MAIN_MENU` function and where you call it

## 670. Add echo Rent Menu

### 670.1

For the time being, just echo `Rent Menu` in the function so you can see if it's working.

#### HINTS

- Don't use any flags with the command
- Add `echo "Rent Menu"` in the `RENT_MENU` function

## 680. Add `RETURN_MENU` function

### 680.1

Add an empty `RETURN_MENU` function to your script for when a user enters the option to return a bike.

#### HINTS

- Add `RETURN_MENU() {}` below the `RENT_MENU` function
- Keep the `MAIN_MENU` function call at the bottom

## 690. Add echo Return Menu

### 690.1

Use `echo` to print `Return Menu` in the function you just added. You will change these later.

#### HINTS

- Don't use any flags with the command
- Add `echo "Return Menu"` in the `RETURN_MENU` function

## 700. Add `EXIT` function

### 700.1

Add an empty `EXIT` fuction to the script for when a user wants to exit the program.

#### HINTS

- Add `EXIT() {}` in the designated area

## 710. Add `EXIT` Message

### 710.1

This one probably doesn't need a placeholder message. Use the same method to print `Thank you for stopping in.` in the `EXIT` function.

#### HINTS

- Don't use any flags with the command
- Add `echo "Thank you for stopping in."` in the `EXIT` function

## 720. Add case statement to `MAIN_MENU`

### 720.1

When a user enters an option at the main menu, you want to take them to the appropraite sub-menu. A `case` statement is perfect for this. Here's an example:

```sh
case EXPRESSION in
  PATTERN) STATEMENTS ;;
  PATTERN) STATEMENTS ;;
  PATTERN) STATEMENTS ;;
  *) STATEMENTS ;;
esac
```

The expression you want is the `$MAIN_MENU_SELECTION` variable. You are expecting it to be a `1`, `2`, or `3` for your various menus. Add a `case` statement that takes users to their corresponding menus, and to the `MAIN_MENU` when the variable isn't a `1`, `2`, or `3`.

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

## 730. ./bike-shop.sh

### 730.1

Run the script a few times and try out the different menus. Be sure to enter something other than one of the options to go to the main menu.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 740. Add arg to MAIN_MENU call in case

### 740.1

Add `*) MAIN_MENU "Please enter a valid option." ;;`

#### HINTS

- Hint

## 750. Add if $1 to MAIN_MENU

### 750.1

Add if
```sh
  if [[ $1 ]]
  then
    echo -e "\n$1"
  fi
```

#### HINTS

- Hint

## 760. ./bike-shop.sh

### 760.1

Run the script and enter an invalid option to see the message.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 850. Delete echo Rent Menu

### 850.1

Looks good. Delete the `echo "Rent Menu"` in the `RENT_MENU` function

#### HINTS

- Hint

## 860. Add comments to RENT_MENU

### 860.1

Add comments to rent menu
```sh
	# get available bikes
	# if no bikes available
	# send to main menu
```

#### HINTS

- Hint

## 920. Add PSQL Variable

### 920.1

Add `PSQL="psql -X --username=freecodecamp --dbname=bikes --tuples-only -c"`

You are going to need to query the database many more times so I want you to make a variable for part of the command. At the top of your script, create a variable named `PSQL` and set the value to the part of the command that connects to your database. Basically, it should be everything except the actual query so you can use it like this `$PSQL "SELECT * FROM bikes;"` Be sure to put the variable in double quotes.

#### HINTS

- You want the variable to be everything from `psql` to `-c`
- Be sure to put it all in double quotes
- The part you want the variable to be is `"psql -X --username=freecodecamp --dbname=bikes --tuples-only -c"`
- Add this at the top of the file: `PSQL="psql -X --username=freecodecamp --dbname=bikes --tuples-only -c"`

## 970. Add AVAILABLE_BIKES

### 970.1

Add
`AVAILABLE_BIKES=$($PSQL "SELECT bike_id, type, size FROM bikes WHERE available = true ORDER BY bike_id")`

Okay, what's next. Instead of echoing all that data, why don't you put it in a variable named `AVAILABLE_BIKES`.

#### HINTS

- Don't use `echo`, put the result in a variable named `AVAILABLE_BIKES`
- Give it another try
- Adjust the suggested line to this: `AVAILABLE_BIKES=$($PSQL "SELECT * FROM bikes;")`

## 980. echo AVAILABLE_BIKES

### 980.1

Add echo "$AVAILABLE_BIKES"

Why don't you echo the variable now below that. This is finicky stuff, so you want to make sure it hasn't broken. Make sure to put it in double quotes.

#### HINTS

- Add this to the suggested area: `echo "$AVAILABLE_BIKES"`

## 990. ./bike-shop.sh

### 990.1

Run your script and go to the rent menu to make sure it's still working.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 993. psql UPDATE bikes SET available = false

### 990.1

psql `UPDATE BIKES set available = false WHERE available = true;`

#### HINTS

- Hint

## 995. ./bike-shop.sh

### 995.1

Run your script to see the output.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1000. Add if -z AVAILABLE_BIKES

### 1000.1

Add 

if [[ -z $AVAILABLE_BIKES ]]
then
send to main menu
fi

#### HINTS

- Hint

## 1010. Add MAIN_MENU Sorry, we don't have any bikes available right now

### 1010.1

Add `MAIN_MENU "Sorry, we don't have any bikes available right now."`

#### HINTS

- Hint

## 1020. ./bike-shop.sh

### 1020.1

Run the script.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1100. Add else to `RENT_MENU` with comments

### 1100.1

Add else with comments:
	display available bikes
	ask for bike to rent
	if input is not a number
	send to main menu

#### HINTS

- Hint

## 1105. Add echo Here are the bikes we have available

### 1105.1

Add     echo -e "\nHere are the bikes we have available:"

#### HINTS

- Hint

## 1110. Move echo AVAILABLE_BIKES

### 1110.1

move echo AVAILABLE BIKES TO below comment

#### HINTS

- Hint

## 1115. psql UPDATE bikes SET all != BMX to TRUE

### 1115.1

psql UPDATE bikes SET all != BMX to TRUE

#### HINTS

- Hint

## 1130. ./bike-shop.sh

### 1130.1

Run the script and go to the rent menu to see the bikes.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1140. pipe AVAILABLE_BIKES into while loop

### 1140.1

This isn't bad. I wonder if you can make this a little prettier. Instead of directly echoing your bikes to the screen, `pipe` the output into a `while` loop that reads each word. Here's how that looks:

```sh
echo "$AVAILABLE_BIKES" | while read BIKE_ID BAR TYPE BAR SIZE
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

## 1160. Add echo Which one would you like to rent?

### 1160.1

Add echo -e "\nWhich one would you like to rent?"

#### HINTS

- Use the `echo` command with `-e` flag
- Be sure to add the new line at the beginning of the message
- Add this to the suggested area: `echo -e "\nWhich one would you like to rent?"`

## 1162. read `BIKE_ID_TO_RENT`

### 1162.1

Add a command to `read` input into a variable named `BIKE_ID_TO_RENT`.

#### HINTS

- Use the `read` command to get input
- Add this to the suggested area: `read BIKE_ID_TO_RENT`

## 1164. echo [[ a =~ [0-9] ]]; echo $?

### 1164.1

echo [[ a =~ [0-9] ]]; echo $?

#### HINTS

- Hint

## 1165. echo [[ a1 =~ [0-9] ]]; echo $?

### 1165.1

echo [[ a1 =~ [0-9] ]]; echo $?

#### HINTS

- Hint

## 1166. echo [[ a1 =~ ^[0-9]$ ]]; echo $?

### 1166.1

echo [[ a1 =~ ^[0-9]$ ]]; echo $?

#### HINTS

- Hint

## 1167. echo [[ 1 =~ ^[0-9]$ ]]; echo $?

### 1167.1

echo [[ 1 =~ ^[0-9]$ ]]; echo $?

#### HINTS

- Hint

## 1168. echo [[ 11 =~ ^[0-9]$ ]]; echo $?

### 1168.1

echo [[ 11 =~ ^[0-9]$ ]]; echo $?

#### HINTS

- Hint

## 1169. echo [[ 11 =~ ^[0-9]+$ ]]; echo $?

### 1169.1

echo [[ 11 =~ ^[0-9]+$ ]]; echo $?

#### HINTS

- Hint

## 1170. echo [[ ! 11 =~ ^[0-9]+$ ]]; echo $?

### 1170.1

echo [[ ! 11 =~ ^[0-9]+$ ]]; echo $?

#### HINTS

- Hint

## 1176. Add if [[ ! $BIKE_ID_TO_RENT =~ ^[0-9]+$ ]]

### 1176.1

Add if [[ ! $BIKE_ID_TO_RENT =~ ^[0-9]+$ ]]
then
send to main menu
fi

#### HINTS

- Hint

## 1177. Add MAIN_MENU "That is not a valid number"

### 1177.1

Add MAIN_MENU "That is not a valid number"

#### HINTS

- Hint

## 1178. ./bike-shop.sh

### 1178.1

Run the script, go to rent, enter a non number

#### HINTS

- Hint

## 1179. Add else with comments

### 1179.1

Add else with comments
	get bike availability
	if not available
	send to main menu

#### HINTS

- Hint

## 1180. Add BIKE_AVAILABILITY

### 1180.1

Add `BIKE_AVAILABILITY=$($PSQL "SELECT available FROM bikes WHERE bike_id = $BIKE_ID_TO_RENT AND available = true")`

A user could enter anything they want there. You need to make sure that what is entered is a `bike_id` and that the bike is available to rent. Create a new variable named `BIKE_AVAILABILITY`. Use it to make a query to your database that selects the `available` column from the `bikes` table for the bike with the id of your `$BIKE_ID_TO_RENT` variable. Use your `$PSQL` variable and a subprocess like you did for your other queries.

#### HINTS

- Create a query like you did for the others
- Here's an hint: `BIKE_AVAILABILITY=$($PSQL "QUERY HERE")`
- Use the `SELECT`, `FROM` and `WHERE` keywords
- You only want the `available` column
- Use the where condition `bike_id=$BIKE_ID_TO_RENT`
- Add this to the suggested area: `BIKE_AVAILABILITY=$($PSQL "SELECT available FROM bikes WHERE bike_id=$BIKE_ID_TO_RENT;")`

## 1190. Add echo BIKE_AVAILABILITY

### 1190.1

Echo your variable so you can see what you are getting.

#### HINTS

- Add `echo $BIKE_AVAILABILITY` in the suggested area

## 1200. ./bike-shop.sh

### 1200.1

Run the script, go to the rent menu, and enter a bike that is available to see if that variable is set to something.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1210. Add if -z BIKE_AVAILABILITY

### 1210.1

Add 
      if [[ -z $BIKE_AVAILABILITY ]]
      then
send to main menu
fi

#### HINTS

- Hint

## 1215. Add MAIN_MENU That bike is not available

### 1215.1

Add MAIN_MENU "That bike is not available."

#### HINTS

- Hint

## 1220. Remove echo BIKE_AVAILABILITY

### 1220.1

Remove the line where you echo if the bike is available or not since you don't actually want to display that.

#### HINTS

- Remove the `echo $BIKE_AVAILABILITY` line

## 1230. ./bike-shop.sh

### 1230.1

Run the script and go to the rent menu, put in a bike that doesn't exist.

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1233. psql UPDATE bikes SET add to true

### 1233.1

psql Update bikes set all to true

#### HINTS

- Hint

## 1236. Add else with comments

### 1236.1

Add else with comments:
	get customer info
  if customer doesn't exist
  get new customer name
  insert new customer

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1240. Add echo What's your phone number?

### 1240.1

Add `echo -e "\nWhat's your phone number?"`
If a bike isn't available or doesn't exist, they will be sent to the main menu. If they enter a bike that is available, you need to find out their phone number so you can see if they are an existing customer or not. Echo the text `"What's your phone number?"`

#### HINTS

- Put the command in double quotes so that apostrophe shows up
- Add this to the suggested area: `echo "What's your phone number?"`

## 1250. read PHONE_NUMBER

### 1250.1

Read user input into a `PHONE_NUMBER` variable.

#### HINTS

- Use the `read` command to get input
- Add this to the suggested area: `read PHONE_NUMBER`

## 1260. Add CUSTOMER_NAME

### 1260.1

Add `CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone = '$PHONE_NUMBER'")`

Okay, you have their phone number, now you need to see if they are an existing customer. Create a `CUSTOMER_NAME` variable that queries the database. You want to get the `name` column from the `customers` table where `phone` is equal to the phone number they input, so use the `PHONE_NUMBER` variable. Be sure to put the variable in single quotes since it is a `VARCHAR` in the database.

#### HINTS

- Make a query with the structure you used for the other ones
- Here's an example: `CUSTOMER_NAME=$($PSQL "COMMAND HERE")`
- Use the `SELECT`, `FROM` and `WHERE` keywords for your command
- The condition you want is `phone='$PHONE_NUMBER'`
- You only want the `name` column from the `customers` table
- Add this to the suggested area: `CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone='$PHONE_NUMBER';")`

## 1265. Add if -z CUSTOMER_NAME

### 1265.1

Add if -z CUSTOMER_NAME with two comments in it
get new customer name
insert new customer

#### HINTS

- Hint

## 1270. Add echo What's your name?

### 1270.1

Add           `echo -e "\nWhat's your name?"`

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

## 1280. read CUSTOMER_NAME

### 1280.1

Add read CUSTOMER_NAME
Get their name by reading it into a `CUSTOMER_NAME` variable.

#### HINTS

- Use the `read` command
- Add `read CUSTOMER_NAME` to the suggested area

## 1290. Add INSERT_CUSTOMER_RESULT

### 1290.1

Add `INSERT_CUSTOMER_RESULT=$($PSQL "INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME', '$PHONE_NUMBER')")`

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

Run your script and go to the rent menu. rent+1+555-5555

#### HINTS

- Enter `./bike-shop.sh` in the terminal and press enter
- Follow the instructions closely
- Make sure to use `555-5555` for the phone number
- Make sure you are in the `project` folder first

## 1310. psql SELECT * FROM customers

### 1310.1

psql SELECT * FROM customers

You should now have a new customer in the database. In your psql terminal, view all the data in the `customers` table to see if it's there.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Use `*` to view all the columns
- Enter `SELECT * FROM customers;` in the psql prompt
- If you don't have a psql prompt open, I recommend "splitting" the terminal and reconnecting
- You can reconnect with `psql -U freecodecamp bikes`

## 1315. Add comments

### 1315.1

Add comments
	get customer_id
	insert bike rental
	set bike availability to false
	get bike info
	send to main menu

#### HINTS

- Hint

## 1320. Add CUSTOMER_ID

### 1320.1

add `CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone = '$PHONE_NUMBER'")`

Looks like the customer got inserted. Back in your script, now that you know a customer has been created, you need to find out their ID so you can add the bike they rented to the `rentals` table. Create a variable named `CUSTOMER_ID` that queries the database to get the `customer_id` column for the customer with `$PHONE_NUMBER`.

#### HINTS

- Use same structure for the command that you have used for the other commands
- Here's an example: `CUSTOMER_ID=$($PSQL "COMMAND HERE")`
- The command looks similar to this: `SELECT column FROM table WHERE phone='$PHONE_NUMBER';`
- Add this to the suggested area: `CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone='$PHONE_NUMBER';")`

## 1330. Add INSERT_RENTAL_RESULT

### 1330.1

Add `INSERT_RENTAL_RESULT=$($PSQL "INSERT INTO rentals(customer_id, bike_id) VALUES($CUSTOMER_ID, $BIKE_ID_TO_RENT)")
`
You need the `customer_id` and `bike_id` to add a rental to the table. You have two variables that contain those. In your script, create a `ADD_RENTAL_RESULT` variable that adds a new rental to the database.

#### HINTS

- Use same structure for the command that you have used for the other commands
- Here's an example: `ADD_RENTAL_RESULT=$($PSQL "COMMAND HERE")`
- The command looks similar to this: `INSERT INTO rentals(column1, column2) VALUES(value1, value2);`
- You don't need any single quotes for integers
- Add this to the suggested area: `ADD_RENTAL_RESULT=$($PSQL "INSERT INTO rentals(customer_id, bike_id) VALUES($CUSTOMER_ID, $BIKE_ID_TO_RENT);")`

## 1370. Add SET_TO_FALSE_RESULT

### 1370.1

Add `SET_TO_FALSE_RESULT=$($PSQL "UPDATE bikes SET available = false WHERE bike_id = $BIKE_ID_TO_RENT")`

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

## 1390. psql SELECT * FROM rentals

### 1390.1

psql SELECT * FROM rentals

In the psql prompt, take a look at all the data in your rentals table. There should be another new rental.

#### HINTS

- Enter `SELECT * FROM rentals;` in the psql prompt
- If you don't have a psql prompt open, I recommend "splitting" the terminal and reconnecting
- You can reconnect with `psql -U freecodecamp bikes`

## 1400. psql SELECT * FROM bikes ORDER BY bike_id

### 1400.1

psql SELECT * FROM bikes ORDER BY bike_id

In the psql prompt, take a look at all the data in your bikes table. There should now be a bike that's false.

#### HINTS

- Enter `SELECT * FROM bikes;` in the psql prompt
- If you don't have a psql prompt open, I recommend "splitting" the terminal and reconnecting
- You can reconnect with `psql -U freecodecamp bikes`

## 1401. Add BIKE_INFO

### 1401.1

Add `BIKE_INFO=$($PSQL "SELECT size, type FROM bikes WHERE bike_id = $BIKE_ID_TO_RENT")`

#### HINTS

- Hint

## 1402. Add echo BIKE_INFO

### 1402.1

Add echo BIKE_INFO

#### HINTS

- Hint

## 1403. ./bike-shop.sj

### 1403.1

Run the script again and go to the rent menu, there should now be one less bike that is displayed, since it is not available. Be sure to exit the script when you are done.

#### HINTS

- Hint

## 1404. echo '28 | Mountain' | sed 's/ /=/'

### 1404.1

terminal:
echo '28 | Mountain' | sed 's/ /=/'

#### HINTS

- Hint

## 1405. echo '28 | Mountain' | sed 's/ /=/g'

### 1405.1

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

- Hint

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

## 1470. Read `PHONE_NUMBER`

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

- Hint

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

- Hint

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

- Hint

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

- Hint
