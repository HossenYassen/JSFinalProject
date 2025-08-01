'use strict'
import { data, fillContactsIntoList } from "./contactsData.js"


// Handiling Add Contact

const borderColor = "#6c757d";
const addContactForm = document.getElementById("add-contact-form");
addNewContactModal.addEventListener("click", (e) => {
    e.preventDefault();

    let validName = false;
    let validNumber = false;

    // Name Formatting:
    const nameInput = document.getElementById("new-contact-name");
    nameInput.addEventListener('input', function (e) {
        let nameValue = e.target.value;
        nameValue = captilizedTheFirstLetterOfEachWord(nameValue);
        e.target.value = nameValue;
        validName = (nameValue !== "");
    });

    // Phone Number Formatting:
    const phoneInput = document.getElementById("new-contact-phone");
    phoneInput.addEventListener("input", (e) => {
        e.target.value = validatePhone(e.target.value);
        validNumber = (e.target.value.length !== 12);
    });

    const btn = e.target.closest("button");
    if (btn) {
        let msg = "";
        let validName = true;
        let validPhone = true;
        const btnID = btn.getAttribute("id")
        const msgElem = document.getElementById("invalid-input-message");
        if (btnID === "add-new-contact-button") {
            if (nameInput.value.trim() === "") {
                nameInput.style.borderColor = "var(--not-ok-btn-color)";
                validName = false;
                msg += "• Name Cannot Be Empty!\n";
            }
            else {
                nameInput.style.borderColor = borderColor;
            }
            if (phoneInput.value.trim().length != 12) {
                phoneInput.style.borderColor = "var(--not-ok-btn-color)";
                validPhone = false;
                msg += "• Phone Number Should Consist Of 10 Numbers!"
            }
            else {
                phoneInput.style.borderColor = borderColor;
            }
            if (nameInput.value.trim() !== "" && phoneInput.value.trim().length === 12) {
                let newContact = {};
                // name: "Hossen Yassen",
                // age: 24,
                // phone: "050-959-3495",
                // profileImg: "../src/images/profile2.png",
                // tag: "Family",
                // email: "Hossen.Yassen@Hotmail.Com",
                // address: "Haifa, Ben Gurion St.",
                // comment: "I am The Boss!",
                // isFavorite: true

                newContact.name = nameInput.value.trim();
                newContact.phone = phoneInput.value.trim();
                newContact.profileImg = document.getElementById("contact-profile-image").src.trim();
                newContact.age = document.getElementById("new-contact-age").value.trim();
                newContact.address = document.getElementById("new-contact-address").value.trim();
                newContact.email = document.getElementById("new-contact-email").value.trim();
                newContact.comment = document.getElementById("comments-area").value.trim();
                newContact.isFavorite = false;
                newContact.tag = "Friend";
                newContact.lastUpdateTimeStamp = "";

                data.push(newContact);

                addContactForm.reset();
                addNewContactModal.style.display = "none";
                fillContactsIntoList(data);
            }
            else {
                msgElem.innerHTML = msg.replaceAll("\n", "<br>");
            }
        }
        addNewContactModal.style.display = "none";
    }
});



// Validation Functions:
const captilizedTheFirstLetterOfEachWord = function (sentence) {
    const words = sentence.split(" ");
    const result = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return result.join(' ');
}

const validatePhone = function (phoneNumber) {
    phoneNumber = phoneNumber.replaceAll(/\D/g, '');
    if (phoneNumber.length > 10) {
        phoneNumber = phoneNumber.slice(0, 10);
    }

    let validPhoneNumber = '';
    for (let i = 0; i < phoneNumber.length; i++) {
        if (i === 3 || i === 6) {
            validPhoneNumber += '-';
        }
        validPhoneNumber += phoneNumber[i];
    }

    return validPhoneNumber;
}

const contactExist = function (name, phone) {
    data.forEach(contact => {
        if (contact.name.toLowerCase() === name.toLowerCase()
            &&
            contact.phone === phone) {
            return true;
        }
    });
    return false;
}