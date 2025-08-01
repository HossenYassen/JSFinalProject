'use strict'
/* This module handles searching contacts based on contact name, phone number and tag */

import { capitalizeTheFirstLetterOfEachWord, reshapePhoneNumber, isDigit } from "./utilities.js";
import { data, fillContactsIntoList } from "./contactsData.js"

// Handle contact search functionality by listening for input events on the search bar
const searchBar = document.getElementById("search-input");

// Event listener for when the user types in the search bar
searchBar.addEventListener("input", (e) => {
    if(isDigit(e.target.value.charAt(0))){
        e.target.value = reshapePhoneNumber(e.target.value);
    }
    e.target.value = capitalizeTheFirstLetterOfEachWord(e.target.value);
    const elementToSearch = e.target.value.toLowerCase().replaceAll('-', '');

    // Filter the 'data' array to find contacts where:
    // 1. The contact's name includes the search term
    // 2. The contact's phone number (after removing hyphens) includes the search term
    // 3. The contact's tag includes the search term
    // All searches are case-insensitive
    const matchedNames = data.filter(contact =>
        contact.name.toLowerCase().includes(elementToSearch)            // Match based on name
        ||
        contact.phone.replaceAll('-', '').includes(elementToSearch)     // Match based on phone number (hyphen-free)
        ||
        contact.tag.toLowerCase().includes(elementToSearch)             // Match based on contact tag
    );

    fillContactsIntoList(matchedNames);
});
