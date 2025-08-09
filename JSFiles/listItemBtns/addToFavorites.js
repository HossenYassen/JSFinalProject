'use strict'

import { contactsList } from "../utilities.js";
import { data, fillContactsIntoList, getContactFromId } from "../contactsData.js";

/* 
  This module is responsible for adding contact to favorites functionality.
*/

contactsList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (li) {
        const btn = e.target.closest("div");
        if (btn) {
            const dataId = getContactFromId(parseInt(li.getAttribute("data-id")));
            if (btn.classList.contains("row-fav")) {
                data[dataId].isFavorite = !data[dataId].isFavorite;
                fillContactsIntoList(data);
            }
        }
    }
});