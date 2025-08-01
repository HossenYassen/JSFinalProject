'use strict'
import {
            defalutProfilePic,
            favoriteIcon,
            notFavoriteIcon
        } from "./utilities.js";
import { getTagClass, findTag } from "./tags.js";

// Contacts Data Objects Array
export let data =
    [
        {
            name: "Hossen Yassen",
            age: 24,
            phone: "050-959-3495",
            profileImg: "../src/images/profile2.png",
            tag: "Family",
            email: "Hossen.Yassen@Hotmail.Com",
            address: "Haifa, Ben Gurion St.",
            comment: "I am The Boss!",
            isFavorite: true,
            lastModifiedTimeStamp: "00:00 - 02/06/2020"
        },
        {
            name: "Sandra Jammal",
            age: 21,
            phone: "050-123-3456",
            profileImg: "../src/images/profile5.png",
            tag: "Friend",
            email: "Sandra.Jammal@Hotmail.Com",
            address: "Haifa, Ben Gurion St.",
            comment: "I am The Queen!",
            isFavorite: false,
            lastModifiedTimeStamp: "00:00 - 02/06/2020"
        },
        {
            name: "Celine Jammal",
            age: 21,
            phone: "050-111-1234",
            profileImg: "../src/images/profile6.png",
            tag: "School",
            email: "Celine.Jammal@Hotmail.Com",
            address: "Haifa, Ben Gurion St.",
            comment: "Good",
            isFavorite: false,
            lastModifiedTimeStamp: "00:00 - 02/06/2020"
        },
        {
            name: "Tasneem Khateeb",
            age: 20,
            phone: "050-225-5444",
            profileImg: "../src/images/profile6.png",
            tag: "Work",
            email: "Tasneem.Khateeb@Hotmail.Com",
            address: "Haifa, Ben Gurion St.",
            comment: "Excellent",
            isFavorite: false,
            lastModifiedTimeStamp: "00:00 - 02/06/2020"
        }
    ];

// Functions:

//Sorts an array of contact objects alphabetically by the 'name' property in ascending order.
const sortData = function (contactsData) {
    const sorted = contactsData.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
};

// Handiling Showing Contact In Table
const contactsList = document.getElementById("contacts-list");
const emptyListMsg = document.getElementById("empty-contact-msg");
const contactsNum = document.getElementById("contactsNum");

//This function handle the operation of generating contact list item and place it into the contacts list
export const fillContactsIntoList = function (contactsData) {
    contactsNum.innerHTML = data.length;
    if (contactsData === null || contactsData.length === 0) {
        contactsList.style.display = "none";
        emptyListMsg.style.display = "flex";
    }
    else {
        emptyListMsg.style.display = "none";
        contactsList.style.display = "flex";
        const sorted = sortData(contactsData);
        contactsList.innerHTML = "";
        sorted.forEach((elem, idx) => {
            let li = document.createElement("li");
            li.className = "list-row";
            li.setAttribute("data-id", idx);
            li.innerHTML =
                `
        <div class="body-cell row-index">${idx + 1}</div>
        <div class="body-cell row-fav">
            <img class="not-fav-icon" src=${elem.isFavorite === true ? favoriteIcon : notFavoriteIcon} alt="favorite start", title="favorite start">
        </div>
        <div class="body-cell row-pic-name">
            <img class="profile-pic" src=${elem.profileImg === "" ? defalutProfilePic : elem.profileImg} alt="${elem.name} profile Picture"
                title="${elem.name} profile Picture">
            <h3 class="contact-name">${elem.name}</h3>
        </div>
        <div class="body-cell row-tag">
            <span class="${getTagClass(findTag(elem.tag))}">${elem.tag}</span>
        </div>
        <div class="body-cell row-phone">
            <h4 class="phone-number">${elem.phone}</h4>
        </div>
        <div class="row-btns">
            <div class="body-cell contact-buttons info-button">
                <img class="info-button" src="./src/icons/info.png" alt="info" title="info">
            </div>
            <div class="body-cell contact-buttons update-button">
                <img src="./src/icons/edit.png" alt="update" title="update">
            </div>
            <div class="body-cell contact-buttons delete-contact-button">
                <img src="./src/icons/delete.png" alt="delete" title="delete">
            </div>
        </div>
    `;
            contactsList.appendChild(li);
        });
        contactsNum.innerHTML = sorted.length;
    }
}