#! /bin/bash

# Add your code below this line

  clear
  echo -e "~~~~~ Bike Rental Shop ~~~~~\n"

# Add your code above this line

MAIN_MENU () {
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
	echo "Rent Menu"
}

RETURN_MENU () {
	echo "Return Menu"
}

EXIT () {
	echo "Thank you for stopping in."
}

MAIN_MENU
