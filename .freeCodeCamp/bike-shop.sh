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
			# Change code below this line
			echo $BIKE_ID $TYPE $SIZE

			# Change code above this line
		done
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
