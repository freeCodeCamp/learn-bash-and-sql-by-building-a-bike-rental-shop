#! /bin/bash

PSQL="psql -X --username=freecodecamp --dbname=bikes --no-align --tuples-only -c"

UPDATE_BIKE_AVAILABILITY() {
  echo $($PSQL "UPDATE bikes SET available=$2 WHERE bike_id=$1;")
}

SHOW_TITLE() {
  clear
  echo -e "\n~~~~~ BIKE RENTAL SHOP ~~~~~\n"
}

MAIN_MENU() {
  SHOW_TITLE

  if [[ $1 ]]
  then
    echo -e "$1\n"
  fi
  
  echo -e "How can I help you?\n"
  echo -e "1. Rent a bike\n2. Return a bike\n3. Exit"
  read MAIN_MENU_SELECTION

  case $MAIN_MENU_SELECTION in
    1) RENT_MENU ;;
    2) RETURN_MENU ;;
    3) EXIT;;
    *) MAIN_MENU;;
  esac
}

RENT_MENU() {
  SHOW_TITLE
  AVAILABLE_BIKES=$($PSQL "SELECT bike_id, type, size FROM bikes WHERE available=TRUE ORDER BY bike_id;")

  if [[ -z $AVAILABLE_BIKES ]]
  then
    MAIN_MENU "Sorry, we don't have any bikes available right now."
  else
    echo -e "Here are the bikes we have available:\n"

    echo "$AVAILABLE_BIKES" | while IFS="|" read BIKE_ID TYPE SIZE
    do
      echo "$BIKE_ID) $SIZE\" $TYPE Bike"
    done
    
    echo -e "\nWhich one would you like to rent?"
    read BIKE_ID_TO_RENT

    BIKE_AVAILABILITY=$($PSQL "SELECT available FROM bikes WHERE bike_id=$BIKE_ID_TO_RENT;")

    # If bike is not available, send to main menu
    if [[ $BIKE_AVAILABILITY == "f" ]]
    then
      MAIN_MENU "That bike is not available."

    # If bike doesn't exist, send to main menu
    elif [[ -z $BIKE_AVAILABILITY ]]
    then
      MAIN_MENU "That bike is not in our inventory."

    # Bike is available
    else
      echo -e "What's your phone number?"
      read PHONE_NUMBER

      CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone='$PHONE_NUMBER';")

      # If customer doesn't exist, create a new customer row
      if [[ -z $CUSTOMER_NAME ]]
      then
        echo -e "What's your name?"
        read CUSTOMER_NAME

        # Insert new customer
        $($PSQL "INSERT INTO customers(name, phone) values('$CUSTOMER_NAME', '$PHONE_NUMBER');")
      fi

      CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone='$PHONE_NUMBER';")
      ADD_RENTAL_RESULT=$($PSQL "INSERT INTO rentals(customer_id, bike_id) values($CUSTOMER_ID, $BIKE_ID_TO_RENT);")
      
      if [[ $ADD_RENTAL_RESULT != "INSERT 0 1" ]]
      then
        MAIN_MENU "Something went wrong trying to add the rental to the database."
      fi 

      UPDATE_AVAILABILITY_RESULT=$(UPDATE_BIKE_AVAILABILITY $BIKE_ID_TO_RENT false)

      if [[ $UPDATE_AVAILABILITY_RESULT != "UPDATE 1" ]]
      then
        MAIN_MENU "Something went wrong trying to update the bike availability"
      fi

      BIKE_TYPE=$($PSQL "SELECT type FROM bikes WHERE bike_id=$BIKE_ID_TO_RENT;")
      BIKE_SIZE=$($PSQL "SELECT size FROM bikes WHERE bike_id=$BIKE_ID_TO_RENT;")

      MAIN_MENU "I have put you down for the $BIKE_SIZE\" $BIKE_TYPE Bike, $CUSTOMER_NAME."
    fi
  fi
}

RETURN_MENU() {
  SHOW_TITLE
  echo "What's your phone number?"
  read PHONE_NUMBER

  CUSTOMERS_RENTALS=$($PSQL "SELECT bikes.bike_id, type, size FROM bikes LEFT OUTER JOIN rentals ON bikes.bike_id = rentals.bike_id LEFT OUTER JOIN customers ON customers.customer_id = rentals.customer_id WHERE phone='$PHONE_NUMBER' AND date_returned is null;")

  if [[ -z $CUSTOMERS_RENTALS ]]
  then
    MAIN_MENU "I could not find any rentals for that phone number."
  else
    echo -e "\nWhich bike would you like to return?"
    echo "$CUSTOMERS_RENTALS"

    read BIKE_ID_TO_RETURN

    # check if bike_id_to_return matches customer_id in rentals
    CUSTOMER_HAS_BIKE=$($PSQL "SELECT * FROM rentals LEFT OUTER JOIN customers ON rentals.customer_id = customers.customer_id WHERE phone='$PHONE_NUMBER' AND date_returned is null AND bike_id=$BIKE_ID_TO_RETURN;")

    if [[ -z $CUSTOMER_HAS_BIKE ]]
    then
      echo "You do not have that bike."
    else
      RETURN_BIKE_RESULT=$($PSQL "UPDATE rentals SET date_returned=now() WHERE bike_id=$BIKE_ID_TO_RETURN;")

      if [[ $RETURN_BIKE_RESULT != "UPDATE 1" ]]
      then
        MAIN_MENU "I could not find that bike."

      else
        UPDATE_AVAILABILITY_RESULT=$(UPDATE_BIKE_AVAILABILITY $BIKE_ID_TO_RETURN true)

        if [[ $UPDATE_AVAILABILITY_RESULT != "UPDATE 1" ]]
        then
          MAIN_MENU "Could not update the bike availability."
        else
          MAIN_MENU "Thank you for returning your bike."
        fi
      fi
    fi
  fi
}

EXIT() {
  SHOW_TITLE
  echo "Thank you for stopping in."
  sleep 2
  clear
  exit
}

MAIN_MENU
