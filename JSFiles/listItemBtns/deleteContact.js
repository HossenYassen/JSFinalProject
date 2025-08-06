'use strict'

import { contactsList, hideHTMLElement, showHTMLElement } from "../utilities.js";
import { data, fillContactsIntoList } from "../contactsData.js";

/* 
  This module is responsible for handling the contact deletion functionality.
  It manages the display of the delete confirmation modal and the actual deletion of contacts.
*/

const deleteContactModal = document.getElementById("delete-contact-dialog");
const contactNameSpan = document.getElementById("delete-contact-name");

// Event listener for click events on the contacts list
contactsList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (li) {
        const btn = e.target.closest("div");
        if (btn && btn.classList.contains("delete-contact-button")) {
            const idx = li.getAttribute("data-id");
            contactNameSpan.innerHTML = data[idx].name;
            contactNameSpan.style.color = "var(--not-ok-btn-color)"
            deleteContactModal.setAttribute("data-id", idx);
            showHTMLElement(deleteContactModal);
        }
    }
});

// Event listener for click events on the delete modal
deleteContactModal.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn && btn.getAttribute("id") === "confirm-delete-btn") {
        const idx = deleteContactModal.getAttribute("data-id");
        data.splice(parseInt(idx), 1);
        fillContactsIntoList(data);
    }
    hideHTMLElement(deleteContactModal);
});
