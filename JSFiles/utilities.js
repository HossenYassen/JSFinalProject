'use strict';

// Utility functions and constants
export const contactsList = document.getElementById("contacts-list");

export const defalutProfilePic = "./src/icons/profile.png";
export const favoriteIcon = "./src/icons/favorite_star.png";
export const notFavoriteIcon = "./src/icons/not_favorite_star.png";

// Function to show an HTML element
export const showHTMLElement = function (element, displayType = "block") {
    element.style.display = displayType;
}

// Function to hide an HTML element
export const hideHTMLElement = function (element) {
    element.style.display = 'none';
}

// Function to capitalize the first letter of each word
export const capitalizeTheFirstLetterOfEachWord = function (sentence) {
    const words = sentence.split(" ");
    const result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return result.join(' ');
}

// Function to reshape phone number format
export const reshapePhoneNumber = function (phoneNumber) {
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

// Function to reshape age input
export const reshapeAge = function (age) {
    age = age.replaceAll(/\D/g, '');
    if (age.length > 3) {
        age = age.slice(0, 3);
    }
    return age;
}

// Function to check if a contact already exists
export const contactExist = function (name, phone, dataArray) {
    for (let contact of dataArray) {
        if (contact.name.toLowerCase() === name.toLowerCase() && contact.phone === phone) {
            return true;
        }
    }
    return false;
}

// This function returns true if the char is a digit (in range [0-9]), otherwise it returns false
export const isDigit = function (ch) {
    return ch >= '0' && ch <= '9';
}

// Function to get formatted date-time
export function getFormattedDateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const month = currentTime.getMonth() + 1;
    const day = currentTime.getDate();
    const year = currentTime.getFullYear();
    const formattedMonth = month < 10 ? "0" + month : month;
    const formattedDay = day < 10 ? "0" + day : day;
    return `[${formattedHours}:${formattedMinutes}] - ${formattedDay}/${formattedMonth}/${year}`;
}

// Validating form inputs
export const validInputs = function (nameElem, phoneElem, ageElem, mgsElem, dataArray, type) {
    let validName = true;
    let validNumber = true;
    let validAge = true;
    let msg = "";
    if (type === "new") {
        // Validate name input
        if (nameElem.value.trim() === "") {
            nameElem.style.borderColor = "var(--not-ok-btn-color)";
            validName = false;
            msg += "• Name Cannot Be Empty!\n";
        } else {
            nameElem.style.borderColor = "";
        }

        // Validate phone input
        if (phoneElem.value.trim().length != 12) {
            phoneElem.style.borderColor = "var(--not-ok-btn-color)";
            validNumber = false;
            msg += "• Phone Number Should Consist Of 10 Numbers!\n";
        } else {
            phoneElem.style.borderColor = "";
        }

        // Validate age input
        const ageValue = ageElem.value.trim();
        if (ageValue !== "") {
            const age = parseInt(ageValue);
            if (!(age >= 1 && age <= 125)) {
                ageElem.style.borderColor = "var(--not-ok-btn-color)";
                validAge = false;
                msg += "• Invalid Age! Age must be in the range [1-125]\n";
            } else {
                ageElem.style.borderColor = "";
            }
        }
    }

    // Check if contact already exists
    const name = nameElem.value.trim();
    const phone = phoneElem.value.trim();
    if (contactExist(name, phone, dataArray)) {
        msg += "• This Contact Already Exists!\n";
        validNumber = false;
    }



    mgsElem.innerText = msg;
    return validName && validNumber && validAge;
}
