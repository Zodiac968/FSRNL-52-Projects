import { renderNotes } from "./app.js";

let title = document.querySelector("#Title");
let note = document.querySelector("#Notes");
let addBtn = document.querySelector("#addBtn");
let allNotesContainer = document.querySelector(".all-notes-container");
let otherNotesContainer = document.querySelector(".other-notes-container");
let pinnedNotesContainer = document.querySelector(".pinned-notes-container");
let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes(arrayOfNotes){
    pinnedNotesContainer.innerHTML = renderNotes(arrayOfNotes.filter((notes) => notes.isPinned && !notes.isArchived));
    otherNotesContainer.innerHTML = renderNotes(arrayOfNotes.filter((notes) => !notes.isPinned && !notes.isArchived));
}

allNotesContainer.addEventListener("click", (event) => {
    let id = event.target.dataset.id;
    let type = event.target.dataset.type;

    switch(type){
        case "delete":
            arrayOfNotes = arrayOfNotes.filter((note) => {
                if(note.id == id) return false
                return true
            });
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
            displayNotes(arrayOfNotes);
            break;

        case "pin":
            arrayOfNotes = arrayOfNotes.map((note) => {
                if(note.id == id) return {...note, isPinned: !note.isPinned};
                return note;
            });
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
            displayNotes(arrayOfNotes);
            break;

        case "archive":
            arrayOfNotes = arrayOfNotes.map((note) => {
                if(note.id == id) return {...note, isArchived: !note.isArchived};
                return note;
            });
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
            displayNotes(arrayOfNotes);
            break;
    }
})

addBtn.addEventListener("click", (event) => {
    let t = title.value.trim();
    let n = note.value.trim();
    if(t.length > 0 || n.length > 0){
        arrayOfNotes = [...arrayOfNotes, {id: Date.now(), title: t, note: n, isPinned: false, isArchived: false}];
    }
    title.value = "";
    note.value = "";
    console.log(arrayOfNotes);
    displayNotes(arrayOfNotes);

    localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
});

displayNotes(arrayOfNotes);