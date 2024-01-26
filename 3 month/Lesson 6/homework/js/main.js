// const users = [
//     "E'zoza",
//     "Sevinch",
//     "Madina",
//     "Beckzod",
//     "Eshmat",
//     "Toshmat",
//     "O'tmas",
//     "O'tkir",
//     "Bo'rivoy",
//     "Busara"
// ];

// let userName = prompt("Enter your username: ");
// let isName = false;
// for (let i = 0; i < users.length; i++) {
//     if (users[i] == userName) {
//         isName = true;
//         break;
//     }
// }

// alert(isName);


const users = ["salim", "javohir", "Ikrom", "Azamat", "Linkoln", "Eshmat", "Toshmat", "O'tmas"];
console.log(users);

function addUser() {
    let userName = prompt("Enter username");
    let isName = false;

    if (userName != null) {
        for (let i = 0; i < users.length; i++) {
            if (users[i] == userName || users.length < 1) {
                isName = true;
                break;
            }
        }

        if (isName) {
            alert("Bu ism mavjud!");
            addUser();
        } else {
            alert(`Add ${userName}`)
            users.push(userName);
            console.log(users);
        }
    } else {
        alert("Error!");
    }
}

function changeUser() {

    let userChangeName = prompt("Enter change name: ");
    let isChangeName = false;

    let userIndex = 0;
    while (userIndex < users.length) {
        if (users[userIndex] == userChangeName && users.length != 0) {
            isChangeName = true;
            break;
        }
        userIndex++;
    }

    if (isChangeName) {
        userChangeName = prompt("Enter changing name: ", users[userIndex]);
        if (userChangeName != null) {
            alert(`Change from ${users[userIndex]} to ${userChangeName}`)
            users[userIndex] = userChangeName;
            console.log(users);
        } else {
            alert("Error!");
        }
    } else if (userChangeName == null || userChangeName == "") {
        alert("Bekor qilindi! Ism mavjud emas!");
    } else {
        console.log(userChangeName);
        alert("Bu ism mavjud emas!");
        let isConfirmed = confirm("Siz bu ism qo'shishni istaysizmi?");

        if (isConfirmed) {
            users.push(userChangeName)
            console.log(users);
        } else {
            alert("Bekor qilindi!");
        }
    }
}

