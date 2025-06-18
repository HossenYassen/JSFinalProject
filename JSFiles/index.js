//#region Add New Contact Modal
const addNewContactModal = document.getElementById("add-contact-dialog");

// Add new contact button
const addNewContactBtn = document.getElementById("add-contact-btn");
addNewContactBtn.addEventListener("click", () => {
    addNewContactModal.style.display = "block";
});

// Add new contact modal cancel button
const addNewContactModalCancelBtn = document.getElementById("close-add-contact-dialog");
const addNewContactModalForm = document.getElementById("add-contact-form");
addNewContactModalCancelBtn.addEventListener("click", () => {
    addNewContactModal.style.display = "none";
    addNewContactModalForm.reset();
});
//#endregion

//#region Delete All Contacts Modal
const deleteAllContactsModal = document.getElementById("delete-all-dialog");

// Add new contact button
const deleteAllContactsBtn = document.getElementById("delete-all-btn");
deleteAllContactsBtn.addEventListener("click", () => {
    deleteAllContactsModal.style.display = "block";
});

// Add new contact modal cancel button
const deleteAllContactsModalCancelBtn = document.getElementById("cancel-delete-all-btn");
deleteAllContactsModalCancelBtn.addEventListener("click", () => {
    deleteAllContactsModal.style.display = "none";
});
//#endregion

//#region Contact Info Modal
const contactInfoModal = document.getElementById("contact-details-dialog");

// Add new contact button
const contactInfoBtns = document.getElementsByClassName("info-button");
for (const btn of contactInfoBtns) {
    btn.addEventListener("click", () => {
        contactInfoModal.style.display = "block";
    });
}

// Add new contact modal cancel button
const contactInfoModalCloseBtn = document.getElementById("close-contact-details-dialog");
contactInfoModalCloseBtn.addEventListener("click", () => {
    contactInfoModal.style.display = "none";
});
//#endregion

//#region Contact Update Modal
const contactUpdateModal = document.getElementById("update-contact-dialog");

// Add new contact button
const contactUpdateBtns = document.getElementsByClassName("update-button");
for (const btn of contactUpdateBtns) {
    btn.addEventListener("click", () => {
        contactUpdateModal.style.display = "block";
    });
}

// Add new contact modal cancel button
const contactUpdateModalCloseBtn = document.getElementById("close-update-contact-dialog");
const contactIpdateModalForm = document.getElementById("update-contact-form");
contactUpdateModalCloseBtn.addEventListener("click", () => {
    contactUpdateModal.style.display = "none";
    contactIpdateModalForm.reset();
});
//#endregion

//#region Contact Delete Modal
const contactDeleteModal = document.getElementById("delete-contact-dialog");

// Add new contact button
const contactDeleteBtns = document.getElementsByClassName("delete-contact-button");
for (const btn of contactDeleteBtns) {
    btn.addEventListener("click", () => {
        contactDeleteModal.style.display = "block";
    });
}

// Add new contact modal cancel button
const contactDeleteModalCancelBtn = document.getElementById("cancel-delete-btn");
contactDeleteModalCancelBtn.addEventListener("click", () => {
    contactDeleteModal.style.display = "none";
});
//#endregion

//#region Show Contact In Table
let data = 
[
    {
        name:       "Hossen Yassen",
        phone:      "050-959-3495",
        profileImg: "./src/icons/profile.png",
        tag:        "Family",
        email:      "Hossen.Yassen@Hotmail.Com",
        address:    "Haifa, Ben Gurion St.",
        comment:    "I am The Boss!"
    },
    {
        name:       "Sandra Jammal",
        phone:      "050-123-3456",
        profileImg: "./src/icons/profile.png",
        tag:        "Family",
        email:      "Sandra.Jammal@Hotmail.Com",
        address:    "Haifa, Ben Gurion St.",
        comment:    "I am The Queen!"
    },
    {
        name:       "Celine Jammal",
        phone:      "050-111-1234",
        profileImg: "./src/icons/profile.png",
        tag:        "University",
        email:      "Celine.Jammal@Hotmail.Com",
        address:    "Haifa, Ben Gurion St.",
        comment:    "Good"
    },
    {
        name:       "Hossen Yassen",
        phone:      "050-959-3495",
        profileImg: "./src/icons/profile.png",
        tag:        "Firend",
        email:      "Hossen.Yassen@Hotmail.Com",
        address:    "Haifa, Ben Gurion St.",
        comment:    "I am The Boss!"
    },
    {
        name:       "Sandra Jammal",
        phone:      "050-123-3456",
        profileImg: "./src/icons/profile.png",
        tag:        "Parent",
        email:      "Sandra.Jammal@Hotmail.Com",
        address:    "Haifa, Ben Gurion St.",
        comment:    "I am The Queen!"
    },
    {
        name:       "Celine Jammal",
        phone:      "050-111-1234",
        profileImg: "./src/icons/profile.png",
        tag:        "Sister",
        email:      "Celine.Jammal@Hotmail.Com",
        address:    "Haifa, Ben Gurion St.",
        comment:    "Good"
    },
    {
        name:       "Hossen Yassen",
        phone:      "050-959-3495",
        profileImg: "./src/icons/profile.png",
        tag:        "Family",
        email:      "Hossen.Yassen@Hotmail.Com",
        address:    "Haifa, Ben Gurion St.",
        comment:    "I am The Boss!"
    },
    {
        name:       "Sandra Jammal",
        phone:      "050-123-3456",
        profileImg: "./src/icons/profile.png",
        tag:        "Family",
        email:      "Sandra.Jammal@Hotmail.Com",
        address:    "Haifa, Ben Gurion St.",
        comment:    "I am The Queen!"
    },
    {
        name:       "Celine Jammal",
        phone:      "050-111-1234",
        profileImg: "./src/icons/profile.png",
        tag:        "University",
        email:      "Celine.Jammal@Hotmail.Com",
        address:    "Haifa, Ben Gurion St.",
        comment:    "Good"
    },
    {
        name:       "Hossen Yassen",
        phone:      "050-959-3495",
        profileImg: "./src/icons/profile.png",
        tag:        "Firend",
        email:      "Hossen.Yassen@Hotmail.Com",
        address:    "Haifa, Ben Gurion St.",
        comment:    "I am The Boss!"
    },
    {
        name:       "Sandra Jammal",
        phone:      "050-123-3456",
        profileImg: "./src/icons/profile.png",
        tag:        "Parent",
        email:      "Sandra.Jammal@Hotmail.Com",
        address:    "Haifa, Ben Gurion St.",
        comment:    "I am The Queen!"
    },
    {
        name:       "Celine Jammal",
        phone:      "050-111-1234",
        profileImg: "./src/icons/profile.png",
        tag:        "Sister",
        email:      "Celine.Jammal@Hotmail.Com",
        address:    "Haifa, Ben Gurion St.",
        comment:    "Good"
    }
];

const contactsList = document.getElementById("contacts-list");
data.forEach((elem, idx)=>{
    let li = document.createElement("li");
    li.className = "list-row";
    li.innerHTML = 
    `
    <li class="list-row" data-id=${idx}>
        <div class="body-cell row-index">${idx + 1}</div>
        <div class="body-cell row-fav">
            <img class="not-fav-icon" src="./src/icons/favorite_star.png" alt="favorite start", title="favorite start">
        </div>
        <div class="body-cell row-pic-name">
            <img class="profile-pic" src=${elem.profileImg} alt="${elem.name} profile Picture"
                title="${elem.name} profile Picture">
            <h3 class="contact-name">${elem.name}</h3>
        </div>
        <div class="body-cell row-tag">
            <span>${elem.tag}</span>
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
    </li>
    `;
    contactsList.appendChild(li);
}) ;
//#endregion Show Contact In Table

contactsList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('info-button')){
        const li=e.target.closest('li')
        

        console.log(li.getAttribute('data-id'))
    }

})