#! /bin/bash

CONNECT="psql --username=freecodecamp --dbname=bikes --no-align --tuples-only -c"

GET_AVAILABLE_BIKES() {
  echo "`$CONNECT "SELECT bike_id, type, size FROM bikes WHERE available=TRUE ORDER BY type;"`"
}

GET_CUSTOMER_NAME() {
  echo "`$CONNECT "SELECT name FROM customers WHERE phone='$1';"`"
}

GET_CUSTOMER_ID() {
  echo "`$CONNECT "SELECT customer_id FROM customers WHERE phone='$1';"`"
}

ADD_NEW_CUSTOMER() {
  echo "`$CONNECT "INSERT INTO customers(name, phone) values('$1', '$2');"`"
}

GET_BIKE_AVAILABILITY() {
  echo "`$CONNECT "SELECT available FROM bikes WHERE bike_id=$1"`"
}

UPDATE_BIKE_AVAILABILITY() {
  echo "`$CONNECT "UPDATE bikes SET available=$2 WHERE bike_id=$1"`"
}

ADD_RENTAL() {
  echo "`$CONNECT "INSERT INTO rentals(customer_id, bike_id) values($1, $2)"`"
}

GET_BIKE_TYPE() {
  echo "`$CONNECT "SELECT type FROM bikes WHERE bike_id=$1"`"
}

GET_BIKE_SIZE() {
  echo "`$CONNECT "SELECT size FROM bikes WHERE bike_id=$1"`"
}

GET_CUSTOMER_RENTALS() {
  echo "`$CONNECT "SELECT bikes.bike_id, type, size FROM bikes LEFT OUTER JOIN rentals ON bikes.bike_id = rentals.bike_id LEFT OUTER JOIN customers ON customers.customer_id = rentals.customer_id WHERE phone='$1' AND date_returned is null;"`"
}

CHECK_IF_CUSTOMER_HAS_BIKE() {
  echo "`$CONNECT "SELECT * FROM rentals LEFT OUTER JOIN customers ON rentals.customer_id = customers.customer_id WHERE phone='$1' AND date_returned is null AND bike_id=$2;"`"
}

RETURN_BIKE() {
  echo "`$CONNECT "UPDATE rentals SET date_returned=now() WHERE bike_id=$1"`"
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
  AVAILABLE_BIKES=$(GET_AVAILABLE_BIKES)

  if [[ -z $AVAILABLE_BIKES ]]
  then
    MAIN_MENU "Sorry, we don't have any bikes available right now."
  else
    echo -e "Here are the bikes we have available:\n"
    echo "$AVAILABLE_BIKES"
    echo -e "\nWhich one would you like to rent?"
    read BIKE_ID_TO_RENT

    # Check if menu option is a bike_id
    BIKE_AVAILABILITY=$(GET_BIKE_AVAILABILITY $BIKE_ID_TO_RENT)

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

      CUSTOMER_NAME=$(GET_CUSTOMER_NAME $PHONE_NUMBER)

      # If customer doesn't exist, create a new customer row
      if [[ -z $CUSTOMER_NAME ]]
      then
        echo -e "What's your name?"
        read CUSTOMER_NAME

        ADD_NEW_CUSTOMER_RESULT=$(ADD_NEW_CUSTOMER $CUSTOMER_NAME $PHONE_NUMBER)

        # If the customer didn't get added to the database
        if [[ $ADD_NEW_CUSTOMER_RESULT != "INSERT 0 1" ]]
        then
          MAIN_MENU "Something went wrong trying to add the customer to the database."
        fi
      fi

      CUSTOMER_ID=$(GET_CUSTOMER_ID $PHONE_NUMBER)
      ADD_RENTAL_RESULT=$(ADD_RENTAL $CUSTOMER_ID $BIKE_ID_TO_RENT)
      
      if [[ $ADD_RENTAL_RESULT != "INSERT 0 1" ]]
      then
        MAIN_MENU "Something went wrong trying to add the rental to the database."
      fi 

      UPDATE_AVAILABILITY_RESULT=$(UPDATE_BIKE_AVAILABILITY $BIKE_ID_TO_RENT false)

      if [[ $UPDATE_AVAILABILITY_RESULT != "UPDATE 1" ]]
      then
        MAIN_MENU "Something went wrong trying to update the bike availability"
      fi

      BIKE_TYPE=$(GET_BIKE_TYPE $BIKE_ID_TO_RENT)
      BIKE_SIZE=$(GET_BIKE_SIZE $BIKE_ID_TO_RENT)

      MAIN_MENU "I have put you down for the $BIKE_SIZE\" $BIKE_TYPE Bike, $CUSTOMER_NAME."
    fi
  fi
}

RETURN_MENU() {
  SHOW_TITLE
  echo "What's your phone number?"
  read PHONE_NUMBER

  GET_CUSTOMER_RENTALS_RESULT=$(GET_CUSTOMER_RENTALS $PHONE_NUMBER)

  if [[ -z $GET_CUSTOMER_RENTALS_RESULT ]]
  then
    MAIN_MENU "I could not find any rentals for that phone number."
  else
    echo -e "\nWhich bike would you like to return?"
    echo "$GET_CUSTOMER_RENTALS_RESULT"

    read BIKE_ID_TO_RETURN

    # check if bike_id_to_return matches customer_id in rentals
    CHECK_IF_CUSTOMER_HAS_BIKE_RESULT=$(CHECK_IF_CUSTOMER_HAS_BIKE $PHONE_NUMBER $BIKE_ID_TO_RETURN)

    if [[ -z $CHECK_IF_CUSTOMER_HAS_BIKE_RESULT ]]
    then
      echo "You do not have that bike."
    else

      RETURN_BIKE_RESULT=$(RETURN_BIKE $BIKE_ID_TO_RETURN )

      if [[ $RETURN_BIKE_RESULT != "UPDATE 1" ]]
      then
        echo "I could not find that bike."

      else
        UPDATE_AVAILABILITY_RESULT=$(UPDATE_BIKE_AVAILABILITY $BIKE_ID_TO_RETURN true)

        if [[ $UPDATE_AVAILABILITY_RESULT != "UPDATE 1" ]]
        then
          echo "Could not update the bike availability."
        else
          echo "Thank you for returning your bike."
        fi
      fi
    fi
  fi
}

EXIT() {
  clear
  echo "Thank you for stopping in."
  sleep 2
  clear
  exit
}

MAIN_MENU
