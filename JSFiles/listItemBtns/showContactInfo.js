'use strict'

import { contactsList } from "../utilities.js";
import { data } from "../contactsData.js";

/* 
  This module is responsible for showing the full information about a contact when clicked.
  It creates a modal displaying detailed contact information.
*/

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
            const dataId = li.getAttribute("data-id");
            showContactFullInfo(dataId);
        }
    }
});

// Function to display the full details of a contact in a modal dialog
const showContactFullInfo = function (index) {
    const showInfoDialog = document.createElement("dialog");
    showInfoDialog.id = "contact-details-dialog";
    showInfoDialog.innerHTML =
        `
    <h2>Contact Details</h2>
    <div id="contact-details-content">
        <div class="contact-detail-pic-and-name">
            <!-- Display contact's profile picture or a default image if none exists -->
            <img src=${data[index].profileImg === "" ? "defaultProfilePic.jpg" : data[index].profileImg} 
                 alt="${data[index].name} profile Picture" 
                 title="${data[index].name} profile Picture">
            <h3 class="detail-value">${data[index].name}</h3>
        </div>
        
        <!-- Display contact details: Age, Phone, Address, Email, Comments -->
        <div class="contact-detail">
            <label>Phone</label>
            <span class="detail-value">${data[index].phone}</span>
        </div>
        ${data[index].age !== "" ? 
            `
            <div class="contact-detail">
                <label>Age</label>
                <span class="detail-value">${data[index].age}</span>
            </div>
            `
            :
            ""
        }
        ${data[index].address !== "" ? 
            `
            <div class="contact-detail">
                <label>Address</label>
                <span class="detail-value">${data[index].address}</span>
            </div>
            `
            :
            ""
        }
        ${data[index].email !== "" ? 
            `
            <div class="contact-detail">
                <label>Email</label>
                <span class="detail-value">${data[index].email}</span>
            </div>
            `
            :
            ""
        }
        ${data[index].comment !== "" ? 
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
    </div>
    `;
    
    document.body.appendChild(showInfoDialog);
    showInfoDialog.addEventListener("click", (e) => {
        e.preventDefault();
        const btn = e.target.closest("button");
        if (btn) {
            showInfoDialog.style.display = "none";
        }
    });
    showInfoDialog.style.display = "block";
}
