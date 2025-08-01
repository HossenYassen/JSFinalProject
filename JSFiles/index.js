'use strict'
import {data, fillContactsIntoList} from "./contactsData.js"


// Fill the list with the pre-saved contacts data
fillContactsIntoList(data);



const favFilterState = false;



// //#region Handiling Contact Row Buttuns: Favorite, Info, Edit, Delete Buttons
// contactsList.addEventListener("click", (e) => {
//     e.preventDefault();
//     const li = e.target.closest("li");
//     const btn = e.target.closest("div");
//     const dataId = li.getAttribute("data-id");

//     if (btn.classList.contains("info-button")) {
//         showContactFullInfo(dataId);
//     }
//     else if (btn.classList.contains("update-button")) {
//         console.log(`we pressed on update btn in row #${dataId}`);
//     }
//     else if (btn.classList.contains("delete-contact-button")) {
//         console.log(`we pressed on delete btn in row #${dataId}`);
//         deleteContactFunc(data, dataId);
//         fillContactsIntoList(data);
//     }
//     else if (btn.classList.contains("row-fav")) {
//         console.log(`Change The Favoritness for row #${dataId}`);
//         data[dataId].isFavorite = !data[dataId].isFavorite;
//         fillContactsIntoList(showFavoritesContacts(data));
//     }
//     else {
//         showContactFullInfo(dataId);
//     }
// })

// //#region Handiling Show Contact Full Information
// const showContactFullInfo = function (index) {
//     // <!-- Show Contact Details Modal -->
//     // <dialog id="contact-details-dialog">
//     //     <h2>Contact Details</h2>
//     //     <div id="contact-details-content">
//     //         <div class="contact-detail-pic-and-name">
//     //             <img src="src/icons/profile.png" alt="profile Picture" title="profile Picture">
//     //             <h3 class="detail-value">Hossen Yassen</h3>
//     //         </div>
//     //         <div class="contact-detail">
//     //             <label>Age</label>
//     //             <span class="detail-value">25</span>
//     //         </div>
//     //         <div class="contact-detail">
//     //             <label>Phone</label>
//     //             <span class="detail-value">+123456789</span>
//     //         </div>
//     //         <div class="contact-detail">
//     //             <label>Address</label>
//     //             <span class="detail-value">Haifa, Bat-Galim, st.118</span>
//     //         </div>
//     //         <div class="contact-detail">
//     //             <label>Email</label>
//     //             <span class="detail-value">hossen@example.com</span>
//     //         </div>
//     //         <div class="contact-detail">
//     //             <label>Comments</label>
//     //             <span class="detail-value">Lorem ipsum dolor sit amet.</span>
//     //         </div>
//     //         <button id="close-contact-details-dialog">Close</button>
//     //     </div>
//     // </dialog>
//     const showInfoDialog = document.createElement("dialog");
//     showInfoDialog.id = "contact-details-dialog";
//     showInfoDialog.innerHTML =
//         `
//     <h2>Contact Details</h2>
//     <div id="contact-details-content">
//         <div class="contact-detail-pic-and-name">
//             <img src=${data[index].profileImg === "" ? defalutProfilePic : data[index].profileImg} alt="${data[index].name} profile Picture" title="${data[index].name} profile Picture">
//             <h3 class="detail-value">${data[index].name}</h3>
//         </div>
//         <div class="contact-detail">
//             <label>Age</label>
//             <span class="detail-value">${data[index].age}</span>
//         </div>
//         <div class="contact-detail">
//             <label>Phone</label>
//             <span class="detail-value">${data[index].phone}</span>
//         </div>
//         <div class="contact-detail">
//             <label>Address</label>
//             <span class="detail-value">${data[index].address}</span>
//         </div>
//         <div class="contact-detail">
//             <label>Email</label>
//             <span class="detail-value">${data[index].email}</span>
//         </div>
//         <div class="contact-detail">
//             <label>Comments</label>
//             <span class="detail-value">${data[index].comment}</span>
//         </div>
//         <button id="close-contact-details-dialog">Close</button>
//     </div>
//     `
//     document.body.appendChild(showInfoDialog);
//     showInfoDialog.addEventListener("click", (e) => {
//         e.preventDefault();
//         const btn = e.target.closest("button");
//         if (btn) {
//             showInfoDialog.style.display = "none";
//         }
//     });
//     showInfoDialog.style.display = "block";
// }
// //#endregion

// //#region Handiling Editing Contact Information
// //#endregion

// //#region Handiling Delete Contact
// const deleteContactFunc = function (arr, index) {
//     arr.splice(index, 1);
// }
// //#endregion

// //#endregion

// //#region Contacts Photo Gallery JavaScript


// //#endregion

// //#endregion