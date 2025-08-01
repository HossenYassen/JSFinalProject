'use strict'
import { hideHTMLElement, showHTMLElement } from "./utilities.js";
import { data, fillContactsIntoList } from "./contactsData.js";

/* 
This module is responsible for handling the functionality of deleting all contacts.
It includes showing a confirmation modal and executing the deletion based on user input.
*/

const deleteAllContactsModal = document.getElementById("delete-all-dialog");
const noContactsToDeleteModal = document.getElementById("no-contacts-to-delete-dialog");
const deleteAllContactsBtn = document.getElementById("delete-all-btn");
const cancelNoContactsToDeleteBtn = document.getElementById("cancel-no-contacts-to-delete-btn");

// Event listener to show the confirmation modal when the "Delete All Contacts" button is clicked
deleteAllContactsBtn.addEventListener("click", () => {
    showHTMLElement(deleteAllContactsModal);
});

// Event listener to handle the user's action in the modal (confirmation or cancellation)
deleteAllContactsModal.addEventListener("click", (e) => {
    e.preventDefault();

    const btn = e.target.closest("button");
    if (btn) {
        const btnId = btn.getAttribute("id"); // Get the ID of the clicked button

        if (btnId === "confirm-delete-all-btn") {
            if(data.length == 0){
                showHTMLElement(noContactsToDeleteModal);
            }
            data.length = 0;
            fillContactsIntoList(data);
        }
        
        hideHTMLElement(deleteAllContactsModal);
    }
});

// Event listener to hide "no contacts to delete" modal when the "cancel" button is clicked
cancelNoContactsToDeleteBtn.addEventListener("click", ()=>{
    hideHTMLElement(noContactsToDeleteModal);
})