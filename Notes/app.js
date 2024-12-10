export const renderNotes = (arrayOfNotes) => {
    let newNote = arrayOfNotes.map(({id, title, note, isArchived, isPinned})=>{
        let mT = title.replace("\n", "<br>");
        let nT = note.replace("\n", "<br>");
        return (`
            <div class="card w-25 p-2">
                <h4>${mT}</h4>
                <p>${nT}</p>
                <span>
                    <button type="button" class="btn" data-type="pin" data-id=${id}>Pin</button>
                    <button type="button" class="btn" data-type="archive" data-id=${id}>Archive</button>
                    <button type="button" class="btn" data-type="delete" data-id=${id}>Delete</button>
                </span>
            </div>
            `)
    })
    return newNote.join(" ");
};