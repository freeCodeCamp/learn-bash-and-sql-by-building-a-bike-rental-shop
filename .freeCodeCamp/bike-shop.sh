#! /bin/bash

SHOW_TITLE() {
	clear
	echo -e "~~~~~ Bike Rental Shop ~~~~~\n"
}

MAIN_MENU () {
	# Add your code below this line


	# Add your code above this line

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
	# Add your code below this line


	# Add your code above this line

	echo "Rent Menu"
}

RETURN_MENU () {
	# Add your code below this line


	# Add your code above this line

	echo "Return Menu"
}

EXIT () {
	# Add your code below this line


	# Add your code above this line

	echo "Thank you for stopping in."
}

MAIN_MENU
