//#region Contacts Data Array
let data =
    [
        {
            name: "Hossen Yassen",
            age: 24,
            phone: "050-959-3495",
            profileImg: "",
            tag: "Family",
            email: "Hossen.Yassen@Hotmail.Com",
            address: "Haifa, Ben Gurion St.",
            comment: "I am The Boss!",
            isFavorite: true
        },
        {
            name: "Sandra Jammal",
            age: 21,
            phone: "050-123-3456",
            profileImg: "",
            tag: "Friend",
            email: "Sandra.Jammal@Hotmail.Com",
            address: "Haifa, Ben Gurion St.",
            comment: "I am The Queen!",
            isFavorite: false
        },
        {
            name: "Celine Jammal",
            age: 21,
            phone: "050-111-1234",
            profileImg: "",
            tag: "University",
            email: "Celine.Jammal@Hotmail.Com",
            address: "Haifa, Ben Gurion St.",
            comment: "Good",
            isFavorite: false
        },
        {
            name: "Tasneem Khateeb",
            age: 20,
            phone: "050-225-5444",
            profileImg: "",
            tag: "Work",
            email: "Tasneem.Khateeb@Hotmail.Com",
            address: "Haifa, Ben Gurion St.",
            comment: "Excellent",
            isFavorite: false
        }
    ];
//#endregion

// General Variables:
// Icons Paths:
const defalutProfilePic = "../src/icons/profile.png";
const favoriteIcon = "./src/icons/favorite_star.png";
const notFavoriteIcon = "./src/icons/not_favorite_star.png";

// Filters Default States:
const favoritesFiltered = false;

const tags =
    [
        {
            name: "Family",
            class: "family-tag"
        },
        {
            name: "University",
            class: "university-tag"
        },
        {
            name: "Work",
            class: "work-tag"
        },
        {
            name: "Friend",
            class: "friend-tag"
        }
    ];

// General Functions:
const sortData = function (arr) {
    const sorted = arr.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
    })
    return sorted;
}

const getTagClass = function (tag) {
    return tag ? tag.class : "";
}

const findTag = function (tagType) {
    for (let i = 0; i < tags.length; i++) {
        if (tags[i].name.toLowerCase() === tagType.toLowerCase())
            return tags[i];
    }
    return null;
}


//#region Handiling Show Contact In Table
const contactsList = document.getElementById("contacts-list");
const emptyListMsg = document.getElementById("empty-contact-msg");
const contactsNum = document.getElementById("contactsNum");

const fillContactsIntoList = function (contactsData) {
    if (contactsData === null || contactsData.length === 0) {
        contactsList.style.display = "none";
        emptyListMsg.style.display = "flex";
    }
    else {
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
            <img class="not-fav-icon" src=${elem.isFavorite ? favoriteIcon : notFavoriteIcon} alt="favorite start", title="favorite start">
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

fillContactsIntoList(data);
//#endregion Show Contact In Table

//#region Handiling Contact Search
const searchBar = document.getElementById("search-input");

//#endregion

//#region Handiling Add Contact & Delete All Contacts
const searchSectionBtns = document.getElementById("search-btns-div");
const addNewContactModal = document.getElementById("add-contact-dialog");
const deleteAllContactsModal = document.getElementById("delete-all-dialog");

//  Showing Modals
searchSectionBtns.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn) {
        const btnID = btn.getAttribute("id")

        if (btnID === "add-contact-btn") {
            addNewContactModal.style.display = "block";
        }
        else if (btnID === "delete-all-btn") {
            deleteAllContactsModal.style.display = "block";
        }
    }
});

//#region Handiling Add Contact
const addContactForm = document.getElementById("add-contact-form");
addNewContactModal.addEventListener("click", (e) => {
    e.preventDefault();
    const btn = e.target.closest("button");
    if (btn) {
        const btnID = btn.getAttribute("id")

        if (btnID === "add-new-contact-button") {
            console.log("New Contact Added!");
        }
        addContactForm.reset();
        addNewContactModal.style.display = "none";

    }
});
//#endregion

//#region Handiling Delete All Contacts
deleteAllContactsModal.addEventListener("click", (e) => {
    e.preventDefault();
    const btn = e.target.closest("button");
    if (btn) {
        const btnID = btn.getAttribute("id")

        if (btnID === "confirm-delete-all-btn") {
            data = [];
            fillContactsIntoList(data);
        }
        deleteAllContactsModal.style.display = "none";
    }
});
//#endregion

//#endregion

//#region Handiling List Contacts Filtering
const filteringElement = document.getElementById("list-header");
const favoriteFilterIcon = document.getElementById("fav-icon-header");
favoriteFilterIcon.addEventListener("click", () => {
    if (favoriteFilterIcon.src.includes(notFavoriteIcon.substring(1))) {
        // favoriteFilterIcon.src returns the full path not the relative path
        // so to solve this we get rid of the dot in notFavoriteIcon prefix relative path
        // and i check if the relative path of notFavoriteIcon included into the full path
        favoriteFilterIcon.setAttribute("src", favoriteIcon);
        fillContactsIntoList(showFavoritesContacts(data));
    }
    else {
        favoriteFilterIcon.setAttribute("src", notFavoriteIcon);
        fillContactsIntoList(data);
    }
})
//#region Handiling Favorite Contacts Filtering
const showFavoritesContacts = function (arr) {
    const favorites = arr.filter((elem) => {
        if (elem.isFavorite)
            return true;
    })
    return favorites;
}
//#endregion

//#region Handiling Filtering Contacts By Tag
//#endregion

//#endregion

//#region Handiling Contact Row Buttuns: Favorite, Info, Edit, Delete Buttons
contactsList.addEventListener("click", (e) => {
    e.preventDefault();
    const li = e.target.closest("li");
    const btn = e.target.closest("div");
    const dataId = li.getAttribute("data-id");

    if (btn.classList.contains("info-button")) {
        showContactFullInfo(dataId);
    }
    else if (btn.classList.contains("update-button")) {
        console.log(`we pressed on update btn in row #${dataId}`);
    }
    else if (btn.classList.contains("delete-contact-button")) {
        console.log(`we pressed on delete btn in row #${dataId}`);
        deleteContactFunc(data, dataId);
        fillContactsIntoList(data);
    }
    else if (btn.classList.contains("row-fav")) {
        console.log(`Change The Favoritness for row #${dataId}`);
        data[dataId].isFavorite = !data[dataId].isFavorite;
        fillContactsIntoList(data);
    }
    else {
        showContactFullInfo(dataId);
    }
})

//#region Handiling Show Contact Full Information
const showContactFullInfo = function (index) {
    // <!-- Show Contact Details Modal -->
    // <dialog id="contact-details-dialog">
    //     <h2>Contact Details</h2>
    //     <div id="contact-details-content">
    //         <div class="contact-detail-pic-and-name">
    //             <img src="src/icons/profile.png" alt="profile Picture" title="profile Picture">
    //             <h3 class="detail-value">Hossen Yassen</h3>
    //         </div>
    //         <div class="contact-detail">
    //             <label>Age</label>
    //             <span class="detail-value">25</span>
    //         </div>
    //         <div class="contact-detail">
    //             <label>Phone</label>
    //             <span class="detail-value">+123456789</span>
    //         </div>
    //         <div class="contact-detail">
    //             <label>Address</label>
    //             <span class="detail-value">Haifa, Bat-Galim, st.118</span>
    //         </div>
    //         <div class="contact-detail">
    //             <label>Email</label>
    //             <span class="detail-value">hossen@example.com</span>
    //         </div>
    //         <div class="contact-detail">
    //             <label>Comments</label>
    //             <span class="detail-value">Lorem ipsum dolor sit amet.</span>
    //         </div>
    //         <button id="close-contact-details-dialog">Close</button>
    //     </div>
    // </dialog>
    const showInfoDialog = document.createElement("dialog");
    showInfoDialog.id = "contact-details-dialog";
    showInfoDialog.innerHTML =
        `
    <h2>Contact Details</h2>
    <div id="contact-details-content">
        <div class="contact-detail-pic-and-name">
            <img src=${data[index].profileImg === "" ? defalutProfilePic : data[index].profileImg} alt="${data[index].name} profile Picture" title="${data[index].name} profile Picture">
            <h3 class="detail-value">${data[index].name}</h3>
        </div>
        <div class="contact-detail">
            <label>Age</label>
            <span class="detail-value">${data[index].age}</span>
        </div>
        <div class="contact-detail">
            <label>Phone</label>
            <span class="detail-value">${data[index].phone}</span>
        </div>
        <div class="contact-detail">
            <label>Address</label>
            <span class="detail-value">${data[index].address}</span>
        </div>
        <div class="contact-detail">
            <label>Email</label>
            <span class="detail-value">${data[index].email}</span>
        </div>
        <div class="contact-detail">
            <label>Comments</label>
            <span class="detail-value">${data[index].comment}</span>
        </div>
        <button id="close-contact-details-dialog">Close</button>
    </div>
    `
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
//#endregion

//#region Handiling Editing Contact Information
//#endregion

//#region Handiling Delete Contact
const deleteContactFunc = function(arr, index){
    arr.splice(index, 1);
}
//#endregion

//#endregion