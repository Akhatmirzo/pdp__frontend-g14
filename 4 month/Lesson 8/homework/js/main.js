const firstName = prompt("Enter your first name for editing");
const editFirstName = prompt("O'rgartirmoqchi bo'lgan ismingizni kiriting...");

const usersPromise = (url, name, editName) => {
    const users = ["Dilshod", "Ikrom", "Ilhom", "Bekzod", "Akbar"];
    console.log(users);
    return new Promise((resolve, reject) => {
        if (url === "/users" && name && editName) {
            resolve(users.map(user => {
                if (user == name) {
                    user = editName;
                }
                return user;
            }))
        } else {
            reject("Invalid url or name or editName");
        }
    })
}

const data = usersPromise("/users", firstName, editFirstName)
    .then((users) => {
        console.log("Edit firstName")
        console.log(users);
    })
    .catch((err) => console.log(err + " Error: "))