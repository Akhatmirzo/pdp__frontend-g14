const membersEl = document.getElementById('members');
const formEl = document.getElementById('formEl');
const formCash = document.getElementById('formCash');
const info = document.getElementById('info');
const editModalEl = document.querySelector('.editModal');
const userSelect = document.getElementById('userSelect');
const editModalForm = document.querySelector('.editModalForm');
const cashsInfo = document.getElementById('cashsInfo');
const userInformationWrap = document.querySelector('.userInformationWrap');

// Members Db
const members = JSON.parse(localStorage.getItem('members')) || [];
// MembersShip Db
const membersShip = JSON.parse(localStorage.getItem('membersShip')) || [];

// ! GYM App Functions
// * Generate Id for GYM
const generateIds = JSON.parse(localStorage.getItem('generateIds')) || [];
function generateId() {
    const generateIdLength = Math.floor(Math.random() * 30 + 15);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let strId = '';
    for (let i = 0; i < generateIdLength; i++) {
        const generateChar = Math.floor(Math.random() * 32);

        strId += characters[generateChar];
    }
    strId = strId.toLowerCase();

    const isGeneratingId = generateIds.findIndex((id) => id.strId == strId);
    if (isGeneratingId == -1) {
        return {
            id: generateIds.length,
            strId
        };
    } else {
        generateId();
    }
}

// * Render functions
function render(where, data) {
    switch (where) {
        case 'members': {
            membersEl.innerHTML = '';
            data.forEach(member => {
                const { firstName, lastName, birthday, id } = member;
                const template = `
                    <div class="w-[400px] p-4 bg-white text-[#333] flex flex-col rounded-[15px]">
                        <h4>Firstname: <span>${firstName}</span></h4>
                        <h4>Lastname: <span>${lastName}</span></h4>
                        <h4>Birthday: <span>${birthday}</span></h4>

                        <div class="self-end">
                            <button onclick="editMember('${id}')" class="inline-block rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]">
                                edit
                            </button>

                            <button onclick="userInfoRender('${id}')" class="inline-block rounded bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">More</button>
                            
                            <button onclick="deleteMember('${id}')" class="inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
                                delete
                            </button>
                        </div>
                    </div>
                `
                membersEl.innerHTML += template;
            });
            break;
        }

        case 'select': {
            userSelect.innerHTML = `<option value=".">Select user</option>`;
            data.forEach(member => {
                const { firstName, lastName, id } = member;
                const template = `
                    <option value="${id}">${firstName} ${lastName}</option>
                `

                userSelect.innerHTML += template;
            });
            break;
        }

        case 'memberShip': {

        }
    }
}
// ! GYM App Functions

// * Render members window onload
render('members', members);
render('select', members);

// Database
class CreateMember {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    save() {
        const id = generateId();
        const member = {
            id: id.strId,
            ...this
        }

        //* Add member to database members
        members.push(member);
        // Push local storage
        localStorage.setItem('members', JSON.stringify(members));
        // save id
        generateIds.push(id);
        localStorage.setItem('generateIds', JSON.stringify(generateIds));
    }

    static delete(id) {
        const index = members.findIndex(member => member.id == id);
        const idIndex = generateIds.findIndex(ids => ids.strId == id);

        if (index !== -1 && idIndex !== -1) {
            members.splice(index, 1);
            generateIds.splice(idIndex, 1);
            localStorage.setItem('members', JSON.stringify(members));
            localStorage.setItem('generateIds', JSON.stringify(generateIds));
        }
    }

    static findById(id) {
        return members.find(member => member.id == id);
    }
}

class CreateMemberCash {
    constructor(select, from, to, price) {
        this.memberId = select;
        this.from = from;
        this.to = to;
        this.price = price;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    save() {
        const id = generateId();
        const memberCash = {
            id: id.strId,
            ...this
        }

        //* Add memberCash to database membership
        membersShip.push(memberCash);
        // Push local storage
        localStorage.setItem('membersShip', JSON.stringify(membersShip));
        // save id
        generateIds.push(id);
        localStorage.setItem('generateIds', JSON.stringify(generateIds));
    }

    static findById(id) {
        return membersShip.filter(memberCash => memberCash.memberId == id);
    }
}

// todo Add member
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = e.target[0];
    const lastName = e.target[1];
    const birthday = e.target[2];

    if (!(firstName.value.includes(" ") || lastName.value.includes(" ") || birthday.value.includes(" "))) {
        const newMember = new CreateMember(firstName.value, lastName.value, birthday.value);
        newMember.save();
        
        render('members', members);
        render('select', members);

        firstName.value = "";
        lastName.value = "";
        birthday.value = "";
    } else {
        alert("Please enter a valid name or birthday");
    }
});

// todo add member's payments
formCash.addEventListener('submit', (e) => {
    e.preventDefault();
    let select = e.target[0];
    let from = e.target[1];
    let to = e.target[2];
    let price = e.target[3];

    if (select.value != ".") {
        const memberCash = new CreateMemberCash(select.value, from.value, to.value, price.value);
        memberCash.save();
        console.log(memberCash);

        select.value = ".";
        from.value = "";
        to.value = "";
        price.value = "";
    } else {
        alert("Please select a member");
    }
});

// todo delete member
function deleteMember(id) {
    CreateMember.delete(id);
    render('members', members);
}

// todo edit member
function editMember(id, cb) {
    editModalEl.classList.remove('hidden');
    editModalEl.classList.add('flex');

    let editMember = CreateMember.findById(id);

    let firstNameV = editModalForm[0];
    let lastNameV = editModalForm[1];
    let birthdayV = editModalForm[2];

    firstNameV.value = editMember.firstName;
    lastNameV.value = editMember.lastName;
    birthdayV.value = editMember.birthday;

    if (!(firstNameV.value.includes(" ") || lastNameV.value.includes(" ") || birthdayV.value.includes(" "))) {
        editModalForm.addEventListener('submit', (e) => {
            e.preventDefault();

            editMember.firstName = firstNameV.value;
            editMember.lastName = lastNameV.value;
            editMember.birthday = birthdayV.value;

            localStorage.setItem('members', JSON.stringify(members));
            render('members', members);
            editModalEl.classList.add('hidden');
        })
    } else {
        alert("Please enter a valid first name or last name");
    }
}

// * Membership render
function userInfoRender(id) {
    cashsInfo.innerHTML = '';

    const memberShip = CreateMemberCash.findById(id);
    const member = CreateMember.findById(id);
    const { firstName, lastName, birthday } = member;

    memberShip.forEach((res, index) => {
        const { from, to, price } = res;
        const cashElTemplate = `
        <tr>
            <th class="border-2">${index + 1}</th>
            <th class="border-2">${firstName} ${lastName}</th>
            <th class="border-2">${from}</th>
            <th class="border-2">${to}</th>
            <th class="border-2"><span>$</span>${price}</th>
        </tr>
        `

        cashsInfo.innerHTML += cashElTemplate;
    });

    userInformationWrap.classList.remove('hidden');
    userInformationWrap.classList.add('flex');
}

// * Edit modal toogle
function closeModal(type) {
    switch (type) {
        case "memberCashModalClosed":
            userInformationWrap.classList.add('hidden');
            userInformationWrap.classList.remove('flex');
            break
        case "editModalClosed":
            editModalEl.classList.add('hidden');
            break
    }
}