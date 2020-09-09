# Learn Bash Scripting by Building Five Programs

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

Add column customer_id serial not null primary key

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

Add column phone varchar(15) unique;

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 200. Add Column `name`

### 200.1

Add column `name` varchar(40)

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

Add column rental_id serial not null primary key

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

## 330. Display Tables

### 330.1

Display Tables

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions
