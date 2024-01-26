const addUserForm = document.querySelector('.add__user-form');
const addUserBtn = document.getElementById('addUserBtn');
const table = document.querySelector('table tbody');

const users = [
    {
        firstname: 'John',
        lastname: 'Doe',
        age: 21,
        email: 'john@example.com',
    },
    {
        firstname: 'Leanne',
        lastname: 'Graham',
        age: 15,
        email: 'Sincere@april.biz',
    },
    {
        firstname: 'Ervin',
        lastname: 'Howell',
        age: 19,
        email: 'Shanna@melissa.tv',
    },
    {
        firstname: 'Clementine',
        lastname: 'Bauch',
        age: 17,
        email: 'Nathan@yesenia.net',
    },
    {
        firstname: 'Patricia',
        lastname: 'Lebsack',
        age: 12,
        email: 'Julianne.OConner@kory.org',
    },
]

function modalOpen() {
    addUserForm.classList.add('form-active');
}

function modalClose() {
    if (addUserForm.classList.contains('form-active')) {
        addUserForm.classList.remove('form-active');
    }
}

function userTable() {
    users.forEach((res, id) => {
        let tableRow = document.createElement("tr");
        tableRow.classList.add("user-info");
        tableRow.classList.add(`user-info${id}`);
        table.appendChild(tableRow);

        for (let i = 0; i < 6; i++) {
            let td = document.createElement("td");
            tableRow.appendChild(td);
            td.classList.add('td-info');
        }

        let alltd = document.querySelectorAll(`.user-info${id} > .td-info`);

        alltd[0].innerHTML = id + 1;
        alltd[1].innerHTML = res.firstname;
        alltd[2].innerHTML = res.lastname;
        alltd[3].innerHTML = res.age;
        alltd[4].innerHTML = res.email;
        alltd[alltd.length - 1].innerHTML = `
            <div>
                <span onclick="userDelete(${id})">
                    <i class="fa-solid fa-trash fa-fade" style="color: #4A3AFF;"></i>
                    <div></div>
                </span>
    
                <span onclick="userEdit()"><i class="fa-solid fa-user-pen fa-bounce"></i></span>
            </div>
        `
    });
}

addUserBtn.addEventListener('click', () => {
    const firstName = document.forma.nameText.value;
    const lastName = document.forma.lastnameText.value;
    const email = document.forma.emailText.value;
    const age = document.forma.ageNum.value;
    let isName = false;

    console.log(firstName + ' ' + lastName + ' ' + email + ' ' + age);

    for (let i = 0; i < users.length; i++) {
        if ((users[i].firstname == firstName && users[i].lastname == lastName) || users[i].email == email) {
            isName = true;
            break;
        }
    }

    if (isName) {
        alert("Kiritilgan malumotlar mavjud!");
        addUserForm.classList.remove('form-active');
        firstName = "";
        lastName = "";
        email = "";
        age = "";

    } else {
        let user = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            age: age,
        }
        users.push(user);
        console.log(users);

        let tableRow = document.createElement("tr");
        tableRow.classList.add("user-info");
        tableRow.classList.add(`user-info${users.length - 1}`);
        table.appendChild(tableRow);

        for (let i = 0; i < 6; i++) {
            let td = document.createElement("td");
            tableRow.appendChild(td);
            td.classList.add('td-info');
        }

        let alltd = document.querySelectorAll(`.user-info${users.length - 1} > .td-info`);

        alltd[0].innerHTML = users.length;
        alltd[1].innerHTML = users[users.length - 1].firstname;
        alltd[2].innerHTML = users[users.length - 1].lastname;
        alltd[3].innerHTML = users[users.length - 1].age;
        alltd[4].innerHTML = users[users.length - 1].email;
        alltd[alltd.length - 1].innerHTML = `
            <div>
                <span onclick="userDelete(${users.length - 1})">
                    <i class="fa-solid fa-trash fa-fade" style="color: #4A3AFF;"></i>
                    <div></div>
                </span>
    
                <span onclick="userEdit()"><i class="fa-solid fa-user-pen fa-bounce"></i></span>
            </div>
        `
    }
})

function userDelete(tr) {
    let isConfirmed = confirm(`${users[tr].firstname}  ${users[tr].lastname} ismli userni o'chirib yubormoqchimisiz?`);
    if (isConfirmed) {
        users.splice(tr, 1);
        console.log(users);

        let td = document.querySelectorAll(`.user-info`);
        td.forEach((el) => {
            el.style.display = 'none';
        })

        isConfirmed = false;
    }

    if (!isConfirmed) {
        
    }
    // userTable();
}

userTable();