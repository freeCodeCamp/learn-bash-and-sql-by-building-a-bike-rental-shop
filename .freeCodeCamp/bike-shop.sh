#! /bin/bash

SHOW_TITLE() {
	clear
	echo -e "~~~~~ Bike Rental Shop ~~~~~\n"
}

MAIN_MENU () {
  SHOW_TITLE

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

	# Change code below this line
	echo "Rent Menu"

	# Change code above this line
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
