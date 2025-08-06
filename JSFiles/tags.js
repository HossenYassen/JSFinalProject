'use strict'

// Array of objects representing different tag types, each with a name and associated CSS class
const tags =
    [
        {
            name: "Sort By Tag",
            class: ""
        },
        {
            name: "Family",        // Tag name representing family-related items
            class: "family-tag"    // Corresponding CSS class for styling family-related elements
        },
        {
            name: "School",        // Tag name representing school-related items
            class: "school-tag"    // Corresponding CSS class for styling school-related elements
        },
        {
            name: "Work",          // Tag name representing work-related items
            class: "work-tag"      // Corresponding CSS class for styling work-related elements
        },
        {
            name: "Friend",        // Tag name representing friend-related items
            class: "friend-tag"    // Corresponding CSS class for styling friend-related elements
        }
    ];

// Handiling Select element filling and eventlistener
const tagsSelectElement = document.getElementById("tags");

// Filling it:
export const fillTags = (tagsSelect, withHeader) => {
    tags.forEach((tag, idx) => {
        const opt = document.createElement("option");
        opt.setAttribute("value", tag.name)
        if (idx === 0)
            opt.setAttribute("selected", "selected");
        opt.innerHTML = `${tag.name}`
        tagsSelect.appendChild(opt);
    });

};
fillTags(tagsSelectElement);

// Helper Functions:

// This function accepts a tag object and returns the associated CSS class string
// If the tag object is valid (not null/undefined), it returns the class property, otherwise returns an empty string
const getTagClass = function (tag) {
    return tag ? tag.class : "";  // Safe access to the 'class' property
}

// This function searches for a tag in the 'tags' array based on a given tag type (case-insensitive)
// It returns the tag object if found, otherwise returns null if no match is found
const findTag = function (tagType) {
    for (let i = 0; i < tags.length; i++) {
        // Compare tag names in a case-insensitive manner and return the tag object if matched
        if (tags[i].name.toLowerCase() === tagType.toLowerCase())
            return tags[i];
    }
    return null;
}

export { getTagClass, findTag }
