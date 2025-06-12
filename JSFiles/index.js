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