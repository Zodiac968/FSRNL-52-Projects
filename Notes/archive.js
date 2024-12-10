import { renderNotes } from "./app.js";

let archivedNotesContainer = document.querySelector(".archived-notes-container");
let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes(arrayOfNotes){
    archivedNotesContainer.innerHTML = renderNotes(arrayOfNotes.filter((notes) => notes.isArchived));
}

archivedNotesContainer.addEventListener("click", (event) => {
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
        case "archive":
            arrayOfNotes = arrayOfNotes.map((note) => {
                if(note.id == id) return {...note, isArchived: !note.isArchived};
                return note;
            });
            localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
            displayNotes(arrayOfNotes);
    }
})

displayNotes(arrayOfNotes)
