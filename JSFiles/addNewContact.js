'use strict';

import { capitalizeTheFirstLetterOfEachWord, contactsList, defalutProfilePic, getFormattedDateTime, hideHTMLElement, reshapePhoneNumber, showHTMLElement, validInputs } from "./utilities.js";
import { data, fillContactsIntoList } from "./contactsData.js";
import { fillTags } from "./tags.js";

/* 
  This module is responsible for Adding new contact information when clicked.
*/

const addNewContactModal = document.getElementById("contact-dialog");
const addContactBtn = document.getElementById("add-contact-btn");


// Form elements
const header = document.querySelector("#contact-dialog h2");
const errorMsg = document.getElementById("invalid-input-message");
const profileImage = document.getElementById("contact-image");
const name = document.getElementById("contact-name");
const phone = document.getElementById("contact-phone");
const age = document.getElementById("contact-age");
const address = document.getElementById("contact-address");
const email = document.getElementById("contact-email");
const comment = document.getElementById("comments-area");
const tagsSelect = document.getElementById("contact-dialog-tags");

// Show add new contact Modal when clicking on a contact
addContactBtn.addEventListener("click", () => {
    resetDialog();
    header.innerHTML = "Add New Contact";
    tagsSelect.innerHTML = "";
    fillTags(tagsSelect);
    document.querySelector("#contact-dialog-tags option").innerHTML = "Pick A Tag";
    showHTMLElement(addNewContactModal);
})

// Capitalize the name input
name.addEventListener("input", (e) => {
    e.target.value = capitalizeTheFirstLetterOfEachWord(e.target.value);
});

// Reshape phone number format
phone.addEventListener("input", (e) => {
    e.target.value = reshapePhoneNumber(e.target.value);
});


// Handle form submission
const form = document.getElementById("contact-form");
form.addEventListener("click", (e) => {
    e.preventDefault();
    const index = parseInt(e.target.closest("dialog").getAttribute("data-id"));
    const btn = e.target.closest("button");

    if (btn && btn.id === "contact-button") {
        if (validInputs(name, phone, age, errorMsg, data, "new")) {
            data[index].profileImg = profileImage.src || defalutProfilePic;
            data[index].tag = tagsSelect.value !== "Sort By Tag" ? tagsSelect.value : "";
            data[index].name = name.value;
            data[index].phone = phone.value;
            data[index].age = age.value || "";
            data[index].address = address.value || "";
            data[index].email = email.value || "";
            data[index].comment = comment.value || "";
            data[index].lastModifiedTimeStamp = getFormattedDateTime();
            fillContactsIntoList(data);
            hideHTMLElement(addNewContactModal);
            form.reset();
        }
    } else if (btn && btn.getAttribute("id") === "close-contact-dialog") {
        hideHTMLElement(addNewContactModal);
        form.reset();
    }
});

// Profile image input change handler
const imgInput = document.getElementById("contact-profile-image");
imgInput.addEventListener("change", (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImage.src = e.target.result;
            profileImage.style.display = "block";
        };
        reader.readAsDataURL(imageFile);
    }
});

// Reset Dialog:
const resetDialog = function () {
    errorMsg.innerHTML = "";
    profileImage.src = defalutProfilePic;
    name.setAttribute("placeholder", "Name");
    name.style.borderColor = "";
    phone.setAttribute("placeholder", "Phone Number");
    phone.style.borderColor = "";
    age.setAttribute("placeholder", "Age");
    age.style.borderColor = "";
    address.setAttribute("placeholder", "Address");
    email.setAttribute("placeholder", "E-mail");
    comment.setAttribute("placeholder", "Write Your Comments Here...");
}
