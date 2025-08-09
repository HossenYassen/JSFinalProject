'use strict'

import { contactsList, hideHTMLElement, showHTMLElement } from "../utilities.js";
import { data, getContactFromId } from "../contactsData.js";

/* 
  This module is responsible for showing the full information about a contact when clicked.
  It creates a modal displaying detailed contact information.
*/

const contactInfoDialog = document.getElementById("contact-details-dialog");

// Add an event listener to contacts info modal ro represent it on the screen
contactInfoDialog.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if(btn){
        hideHTMLElement(contactInfoDialog);
    }
});

// Add an event listener to the contacts list to handle user clicks on contacts
contactsList.addEventListener("click", (e) => {
    e.preventDefault();
    const li = e.target.closest("li");
    if (li) {
        const btn = e.target.closest("div");
        const btnClassList = btn.classList;
        if (btn && !btnClassList.contains("update-button")
            && !btnClassList.contains("delete-contact-button")
            && !btnClassList.contains("row-fav")) {
            const dataId = getContactFromId(parseInt(li.getAttribute("data-id")));
            showContactFullInfo(dataId);
        }
    }
});

// Function to display the full details of a contact in a modal dialog
const showContactFullInfo = function (index) {
    contactInfoDialog.innerHTML =
        `
    <h2>Contact Details</h2>
    <div id="contact-details-content">
        <div class="contact-detail-pic-and-name">
            <!-- Display contact's profile picture or a default image if none exists -->
            <img id="profile-image-show" src=${data[index].profileImg === "" ? "defaultProfilePic.jpg" : data[index].profileImg} 
                 alt="${data[index].name} profile Picture" 
                 title="${data[index].name} profile Picture">
            <h3 class="detail-value">${data[index].name}</h3>
        </div>
        
        <!-- Display contact details: Age, Phone, Address, Email, Comments -->
        <div class="contact-detail">
            <label>Phone</label>
            <span class="detail-value">${data[index].phone}</span>
        </div>
        ${data[index].age.toString().trim() !== "" ?
            `
            <div class="contact-detail">
                <label>Age</label>
                <span class="detail-value">${data[index].age}</span>
            </div>
            `
            :
            ""
        }
        ${data[index].address.trim() !== "" ?
            `
            <div class="contact-detail">
                <label>Address</label>
                <span class="detail-value">${data[index].address}</span>
            </div>
            `
            :
            ""
        }
        ${data[index].email.trim() !== "" ?
            `
            <div class="contact-detail">
                <label>Email</label>
                <span class="detail-value">${data[index].email}</span>
            </div>
            `
            :
            ""
        }
        ${data[index].comment.trim() !== "" ?
            `
            <div class="contact-detail">
                <label>Comments</label>
                <span class="detail-value">${data[index].comment}</span>
            </div>
            `
            :
            ""
        }
        <!-- Close button to close the contact details modal -->
        <button id="close-contact-details-dialog">Close</button>
        <div id="timestamp">
            <span id = "added-timestamp">Added In: ${data[index].addedTimeStamp}</span>
            ${data[index].lastModifiedTimeStamp !== "" ?
                `<span id = "updated-timestamp">Updated In: ${data[index].lastModifiedTimeStamp}</span>` : ""
            }
        </div>
    </div>
    `;

    document.body.appendChild(contactInfoDialog);
    showHTMLElement(contactInfoDialog);
}
