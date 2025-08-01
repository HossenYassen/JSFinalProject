'use strict'
// This file contains general utility variables and functions that can be used across various modules

// Variables:
export const defalutProfilePic = "./src/icons/profile.png";
export const favoriteIcon = "./src/icons/favorite_star.png";
export const notFavoriteIcon = "./src/icons/not_favorite_star.png";

// Functions:

// This function shows an HTML element on the screen by setting its display style
// Default display is "block", but you can customize it by passing another display value.
export const showHTMLElement = function(element, displayType = "block") {
    element.style.display = displayType;
}

// This function hides an HTML element by setting its display style to "none"
export const hideHTMLElement = function(element) {
    element.style.display = 'none';
}

// This function capitalizes the first letter of each word in a given sentence
export const capitalizeTheFirstLetterOfEachWord = function(sentence) {
    const words = sentence.split(" ");
    
    const result = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    
    return result.join(' ');
}

// This function formats a phone number into a standard format (XXX-XXX-XXXX)
export const reshapePhoneNumber = function(phoneNumber) {
    phoneNumber = phoneNumber.replaceAll(/\D/g, '');
    
    if (phoneNumber.length > 10) {
        phoneNumber = phoneNumber.slice(0, 10);
    }

    let validPhoneNumber = '';
    for (let i = 0; i < phoneNumber.length; i++) {
        if (i === 3 || i === 6) {
            validPhoneNumber += '-';
        }
        validPhoneNumber += phoneNumber[i];
    }

    return validPhoneNumber;
}

// This function checks if a contact already exists in the data array based on name and phone number
export const contactExist = function(name, phone, dataArray) {
    for (let contact of dataArray) {
        if (contact.name.toLowerCase() === name.toLowerCase() && contact.phone === phone) {
            return true;
        }
    }
    
    return false;
}

// This function returns true if the char is a digit (in range [0-9]), otherwise it returns false
export const isDigit = function(ch){
    return ch >= '0' && ch <='9';
}
