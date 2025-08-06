'use strict';

import { capitalizeTheFirstLetterOfEachWord, contactsList, defalutProfilePic, getFormattedDateTime, hideHTMLElement, reshapePhoneNumber, showHTMLElement, validInputs } from "../utilities.js";
import { data, fillContactsIntoList } from "../contactsData.js";
import { fillTags } from "../tags.js";

/* 
  This module is responsible for updating contact information when clicked.
*/

const updateModal = document.getElementById("contact-dialog");

// Show Contact Update Modal when clicking on a contact
contactsList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (li) {
        const index = parseInt(li.getAttribute("data-id"));
        const btn = e.target.closest("div");
        if (btn && btn.classList.contains("update-button")) {
            showContactUpdateModal(index);
        }
    }
});

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

// Capitalize the name input
name.addEventListener("input", (e) => {
    e.target.value = capitalizeTheFirstLetterOfEachWord(e.target.value);
});

// Reshape phone number format
phone.addEventListener("input", (e) => {
    e.target.value = reshapePhoneNumber(e.target.value);
});

// Show modal to update contact
const showContactUpdateModal = function (index) {
    updateModal.setAttribute("data-id", index);
    header.innerHTML = "Update Contact Info";
    profileImage.src = data[index].profileImg || defalutProfilePic;
    name.setAttribute("placeholder", `Update: ${data[index].name}`);
    tagsSelect.innerHTML = "";
    fillTags(tagsSelect);
    tagsSelect.value = data[index].tag || "Sort By Tag";
    phone.setAttribute("placeholder", `Update: ${data[index].phone}`);
    age.setAttribute("placeholder", `Update: ${data[index].age}`);
    address.setAttribute("placeholder", `Update: ${data[index].address}`);
    email.setAttribute("placeholder", `Update: ${data[index].email}`);
    comment.setAttribute("placeholder", `Update: ${data[index].comment}`);
    document.getElementById("contact-button").innerHTML = "Update Contact";
    showHTMLElement(updateModal);
};

// Handle form submission
const form = document.getElementById("contact-form");
form.addEventListener("click", (e) => {
    e.preventDefault();
    const index = parseInt(e.target.closest("dialog").getAttribute("data-id"));
    const btn = e.target.closest("button");

    if (btn && btn.id === "contact-button") {
        if (validInputs(name, phone, age, errorMsg, data, "update")) {
            data[index].profileImg = profileImage.src || defalutProfilePic;
            data[index].tag = tagsSelect.value !== "Sort By Tag" ? tagsSelect.value : data[index].tag;
            data[index].name = name.value || data[index].name;
            data[index].phone = phone.value || data[index].phone;
            data[index].age = age.value || data[index].age;
            data[index].address = address.value || data[index].address;
            data[index].email = email.value || data[index].email;
            data[index].comment = comment.value || data[index].comment;
            data[index].lastModifiedTimeStamp = getFormattedDateTime();
            fillContactsIntoList(data);
            hideHTMLElement(updateModal);
            form.reset();
        }
    } else if (btn.getAttribute("id") === "close-contact-dialog") {
        hideHTMLElement(updateModal);
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
