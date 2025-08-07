'use strict';

import {
    capitalizeTheFirstLetterOfEachWord,
    contactExist,
    defalutProfilePic,
    getFormattedDateTime,
    hideHTMLElement,
    reshapeAge,
    reshapePhoneNumber,
    showHTMLElement,
    validInputs
} from "./utilities.js";

import { data, fillContactsIntoList } from "./contactsData.js";
import { fillTags } from "./tags.js";

/* This module is responsible for Adding new contact information when clicked. */

// Elements
const addNewContactModal = document.getElementById("contact-dialog");
const addContactBtn = document.getElementById("add-contact-btn");
const form = document.getElementById("contact-form");
const header = document.querySelector("#contact-dialog h2");
const errorMsg = document.getElementById("invalid-input-message");
const image = document.getElementById("contact-image");
const name = document.getElementById("contact-name");
const phone = document.getElementById("contact-phone");
const age = document.getElementById("contact-age");
const address = document.getElementById("contact-address");
const email = document.getElementById("contact-email");
const comment = document.getElementById("comments-area");
const tagsSelect = document.getElementById("contact-dialog-tags");
const addBtn = document.getElementById("add");
const imgInput = document.getElementById("contact-profile-image");

// Open modal
addContactBtn.addEventListener("click", () => {
    resetDialog();
    header.innerHTML = "Add New Contact";
    tagsSelect.innerHTML = "";
    fillTags(tagsSelect);
    document.querySelector("#contact-dialog-tags option").innerHTML = "Pick A Tag";
    addBtn.innerHTML = "Add Contact";
    hideHTMLElement(document.getElementById("save"));
    showHTMLElement(addBtn);
    showHTMLElement(addNewContactModal);
});

// Capitalize name input
name.addEventListener("input", (e) => {
    e.target.value = capitalizeTheFirstLetterOfEachWord(e.target.value);
});

// Reshape phone number input
phone.addEventListener("input", (e) => {
    e.target.value = reshapePhoneNumber(e.target.value);
});

// Reshape age to be in range [1-125]
age.addEventListener("input", (e) => {
    e.target.value = reshapeAge(e.target.value);
})

// Handle form submission
form.addEventListener("click", (e) => {
    e.preventDefault();
    const index = parseInt(e.target.closest("dialog").getAttribute("data-id"));
    const btn = e.target.closest("button");

    if (btn && btn.getAttribute("id") === "add") {
        if (validInputs(name, phone, age, errorMsg, data, true)) {
            let newContact = {
                profileImg: image.src || defalutProfilePic,
                tag: tagsSelect.value !== "Sort By Tag" ? tagsSelect.value : "",
                name: name.value,
                phone: phone.value,
                age: age.value || "",
                address: address.value || "",
                email: email.value || "",
                comment: comment.value || "",
                lastModifiedTimeStamp: getFormattedDateTime(),
            }
            data.push(newContact);
            fillContactsIntoList(data);
            hideHTMLElement(addNewContactModal);
            form.reset();
        }
    } else if (btn && btn.getAttribute("id") === "close-contact-dialog") {
        hideHTMLElement(addNewContactModal);
        form.reset();
    }
});

// Handle profile image change
imgInput.addEventListener("change", (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
            image.src = e.target.result;
            image.style.display = "block";
        };
        reader.readAsDataURL(imageFile);
    }
});

// Reset Dialog fields
function resetDialog() {
    image.src = defalutProfilePic;
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