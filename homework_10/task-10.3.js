const addUser = {
    myContacts: [
    {name: "Kate", phone: "+380992225577", email: "mmm@gmail.com"},
    {name: "May", phone: "+380992225578", email: "hhh@gmail.com"},
    {name: "Jane", phone: "+380992225579", email: "kkk@gmail.com"},
    ]
};

const nameToFind = prompt("найти по имени:");
const findUser = addUser.myContacts.find(user => user.name === nameToFind);
if (findUser) {
    console.log(findUser);
} else {
    console.log("Контакт не найден!");
}

const addNewUser = (name, phone, email) => {
    addUser.myContacts.push({name, phone, email});
};
addNewUser("Kylie", "+380995556667", "okr@ukr.net");
console.log(addUser.myContacts);