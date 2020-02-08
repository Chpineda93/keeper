const server = "http://localhost:3005"

const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
})


export function getNotes() {
    return fetch(server + "/notes")
}

export function insertNote(data: string) {
    const jsonData = JSON.stringify(data);
    return fetch(server + "/insertNotes", {
        method: "POST",
        headers: headers,
        mode: 'cors',
        body: jsonData

    })
}

export function deleteNote(note: any) {
    const jsonNote = JSON.stringify(note);
    console.log(note.id)
    return fetch(server + "/" + note.id, {
        method: "DELETE",
        headers: headers,
        mode: 'cors',
        body: jsonNote
    })
}
