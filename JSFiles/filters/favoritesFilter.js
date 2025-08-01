'use strict'
/* 
This module is responsible for filtering contacts in the list based on their favorite status.
It interacts with the DOM to toggle between displaying all contacts and only favorite ones.
*/
import  {
            favoriteIcon,
            notFavoriteIcon
        } from "../utilities.js";
import { data, fillContactsIntoList } from "../contactsData.js";

const favoriteFilterIcon = document.getElementById("fav-icon-header");
favoriteFilterIcon.addEventListener("click", () => {
    // Check if the current icon is the 'not favorite' icon by inspecting its src attribute
    // The 'src' attribute returns the full URL of the image, so we check if the relative path of 'notFavoriteIcon' is included in the full URL
    if (favoriteFilterIcon.src.includes(notFavoriteIcon.substring(1))) {
        favoriteFilterIcon.setAttribute("src", favoriteIcon);

        fillContactsIntoList(showFavoritesContacts(data));
    }
    else {
        favoriteFilterIcon.setAttribute("src", notFavoriteIcon);
        fillContactsIntoList(data);
    }
});

// Function to filter and return only the contacts that are marked as favorites
// The function checks each contact's 'isFavorite' property to determine if it's marked as a favorite
const showFavoritesContacts = function (arr) {
    const favorites = arr.filter((contact) => {
        return contact.isFavorite;
    });
    return favorites;
}
