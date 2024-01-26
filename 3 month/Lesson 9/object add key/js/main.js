const users = {};

function add() {
    let objKey = prompt("Enter your object key: ");

    let isObjKey = false;
    for (key in users) {
        if (objKey == key) {
            isObjKey = true;
            break;
        }
    }

    if (objKey == null) {
        console.error("Xatolik");
    }else if (!isObjKey) {
        let keyValue = prompt("Enter your object key value");
        users[objKey] = keyValue;
    } else {
        alert("Object Kaliti mavjud!");
    }

    console.log(users);
}

function edit() {
    let editKey = prompt("Enter your object edit key");

    let isObjKey = false;
    for (key in users) {
        if (editKey == key) {
            isObjKey = true;
            break;
        }
    }
    if (editKey == null) {
        console.log("Xatolik");
    }else if (isObjKey) {
        let editKeyValue = prompt("Enter your object key edit value");
        users[editKey] = editKeyValue;
    } else {
        alert("Object Kaliti mavjud emas!");
    }
    console.log(users);
}

function del() {
    let objKey = prompt("Enter your object delete key");

    let isObjKey = false;
    for (key in users) {
        if (objKey == key) {
            isObjKey = true;
            break;
        }
    }
    if (objKey == null) {
        console.log("Xatolik");
    }else if (isObjKey) {
        delete users[objKey];
    } else {
        alert("Object Kaliti mavjud emas!");
    }
    console.log(users);
}