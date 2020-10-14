#! /bin/bash

PSQL="psql -X --username=freecodecamp --dbname=bikes --tuples-only -c"

SHOW_TITLE() {
	clear
	echo -e "~~~~~ Bike Rental Shop ~~~~~\n"
}

MAIN_MENU () {
  SHOW_TITLE

  if [[ $1 ]]
  then
    echo $1
  fi

	echo -e "How may I help you?\n"
	echo -e "1. Rent a bike\n2. Return a bike\n3. Exit"

	read MAIN_MENU_SELECTION

  case $MAIN_MENU_SELECTION in
    1) RENT_MENU ;;
    2) RETURN_MENU ;;
    3) EXIT ;;
    *) MAIN_MENU ;;
  esac
}

RENT_MENU () {
  SHOW_TITLE
  AVAILABLE_BIKES=$($PSQL "SELECT bike_id, type, size FROM bikes WHERE available='t';")

  if [[ -z $AVAILABLE_BIKES ]]
  then
    MAIN_MENU "Sorry, we don't have any bikes available right now."
  else
    echo -e "Here are the bikes we have available:\n"

		echo "$AVAILABLE_BIKES" | while read BIKE_ID BAR1 TYPE BAR2 SIZE
		do
			echo "$BIKE_ID) $SIZE\" $TYPE Bike"
		done

		echo -e "\nWhich one would you like to rent?"
    read BIKE_ID_TO_RENT

    BIKE_AVAILABILITY=$($PSQL "SELECT available FROM bikes WHERE bike_id=$BIKE_ID_TO_RENT;")

    if [[ $BIKE_AVAILABILITY == "f" || -z $BIKE_AVAILABILITY ]]
    then
      MAIN_MENU "That bike is not available."
    fi

    echo "What's your phone number?"
    read PHONE_NUMBER

    CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone='$PHONE_NUMBER';")
    
    if [[ -z $CUSTOMER_NAME ]]
    then
      echo -e "What's your name?"
      read CUSTOMER_NAME

      INSERT_CUSTOMER_RESULT=$($PSQL "INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME', '$PHONE_NUMBER');")
    fi

    CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone='$PHONE_NUMBER';")
    ADD_RENTAL_RESULT=$($PSQL "INSERT INTO rentals(customer_id, bike_id) values($CUSTOMER_ID, $BIKE_ID_TO_RENT);")
    SET_TO_FALSE_RESULT=$($PSQL "UPDATE bikes SET available=false WHERE bike_id=$BIKE_ID_TO_RENT;")
    # Add your code below this line


    # Add your code above this line
  fi
}

RETURN_MENU () {
  SHOW_TITLE

	echo "Return Menu"
}

EXIT () {
  SHOW_TITLE

	echo "Thank you for stopping in."
	sleep 2
  clear
  exit
}

MAIN_MENU
