let contacts = [
    {
        "firstname" : "Junus",
        "lastname" : "Ergin",
    }
]

function addContact(firstName, lastName) {
    contacts.push({
        "firstname" : firstName,
        "lastname" : lastName,
    });
}

addContact("Junus", "Ergin");