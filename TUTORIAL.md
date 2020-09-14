# Learn Bash and SQL by Building a Bike Rental Shop

> Welcome to the Bash and SQL lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello terminal` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. Log in to PostgreSQL

### 20.1

You are going to build a bike rental shop for these lessons. It will have a database with bikes, customers, and rentals. Use the terminal to connect to PostgreSQL with Psql. The command is `psql -U freecodecamp postgres`.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 30. List Databases

### 30.1

List databases

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 40. Create Database `bikes`

### 40.1

create database `bikes`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 50. List Databases

### 50.1

List databases

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 60. Connect to `bikes`

### 60.1

Connect to bikes

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 70. Create table `bikes`

### 70.1

Create table `bikes`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 80. Display the tables

### 80.1

Display the tables

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 90. Add column `bike_id`

### 90.1

Add column bike_id serial primary key

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 100. Display `bikes` Details

### 100.1

Display `bikes` details

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 110. Add `type` column

### 110.1

Add type varchar(50) not null

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 120. Display `bikes` details

### 120.1

Display `bikes` details

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 130. Add Column `size`

### 130.1

Add column size int not null

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 140. Add Column `available`

### 140.1

alter table bikes add column available boolean not null default TRUE;

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 150. Display `bikes` details

### 150.1

Display `bikes` details

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 160. Create Table `customers`

### 160.1

Create table `customers`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 170. Add Column `customer_id`

### 170.1

Add column customer_id serial primary key

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 180. Display `customers` Details

### 180.1

Display `customers` details

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 190. Add Column `phone`

### 190.1

Add column phone varchar(15) not null unique;

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 200. Add Column `name`

### 200.1

Add column `name` varchar(40) not null

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 210. Display `customers` Details

### 210.1

Display `customers` details

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 220. Create Table `rentals`

### 220.1

Create table `rentals`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 230. Add Column `rental_id`

### 230.1

Add column rental_id serial primary key

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 240. Display `rentals` Details

### 240.1

Display `rentals` Details

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 250. Add Column `customer_id`

### 250.1

Add column `customer_id` int not null

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 260. Set `customer_id` Foreign Key

### 260.1

alter table rentals add foreign key (customer_id) references customers(customer_id);

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 270. Display `rentals` Details

### 270.1

Display `rentals` Details

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 280. Add Column `bike_id`

### 280.1

Add column bike_id int not null

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 290. Add `bike_id` Foreign Key

### 290.1

alter table rentals add foreign key (bike_id) references bikes(bike_id);

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 300. Display `rentals` Details

### 300.1

Display `rentals` Details

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 310. Add `date_rented` Column

### 310.1

date_rented date not null default = now()

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 320. Display `rentals` Details

### 320.1

Display `rentals` Details

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 330. Add Column `date_returned`

### 330.1

Add column `date_returned` date;

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 340. Display `rentals` Details

### 340.1

Display `rentals` details

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 350. Display Tables

### 350.1

Display Tables

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 360. Insert 27 inch Mountain Bike

### 360.1

I think the structure of your database is set. You have nine bikes in your inventory. Add the first one to your `bikes` table. It has a `type` of `mountain` and a `size` of `27`. The other columns will automatically be filled in, so don't worry about those.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 370. Select all from Bikes

### 370.1

Select * from bikes;

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 380. Insert 28 inch Mountain Bike

### 380.1

Insert 28 inch Mountain Bike

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 390. Insert 29 inch Mountain Bike

### 390.1

Insert 29 inch Mountain Bike

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 400. Insert 27 inch Road Bike

### 400.1

Insert 27 inch Road Bike

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 410. Select all from Bikes

### 410.1

Select * from bikes;

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 420. Insert 28 and 29 inch Road Bikes

### 420.1

Insert 28 and 29 inch Road Bikes

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 430. Insert 19, 20, 21 inch BMX Bikes

### 430.1

Insert 23, 24 and 25 inch BMX Bikes

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 440. Select all from Bikes

### 440.1

Select * from bikes;

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 450. Split Terminal

### 450.1

Open a second terminal, and use touch to create `bike-shop.sh` in the `project` folder.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 460. Add shebang!

### 460.1

Add a `shebang!`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 470. Add Title

### 470.1

Add `echo "~~~~~ Bike Rental Shop ~~~~~"` and save the file

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 480. Change file permissions

### 480.1

chmod +x bike-shop.sh

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 490. Run the file

### 490.1

Run the file with `./bike-shop.sh`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions
