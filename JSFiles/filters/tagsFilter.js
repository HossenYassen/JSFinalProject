'use strict'

/* 
This module is responsible for filtering contacts in the list based on their tag.
It listens for user interaction with a tag select dropdown and updates the displayed list accordingly.
*/
import { data, fillContactsIntoList } from "../contactsData.js";

const tagsSelectElement = document.getElementById("tags");
tagsSelectElement.addEventListener("click", (e) => {
    const tag = e.target.value.toLowerCase();

    if (tag && !tag.includes("tag")) {
        const matched = data.filter(contact =>
            contact.tag.toLowerCase() === tag
        );
        fillContactsIntoList(matched);
    } else {
        fillContactsIntoList(data);
    }
});
