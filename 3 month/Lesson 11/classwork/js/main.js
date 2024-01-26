// ? Window 
// window.alert("Hello");
// alert("Bye");

// var user = "Akhat";
// console.log(window);

// DOM => Document Object Model
// const titleEl = document.getElementById("title");
//titleEl.innerText = "<span>Bye</span>" // insert as string
//titleEl.innerHTML = "<span>Bye</span>" // insert as html tag
// console.log(titleEl);

// ? Selecting elements from js

// * 1. Get by ID
// const titleEl = document.getElementById("title");

// * 2. Get by Class name
// const titleEls = document.getElementsByClassName("title");
// for (let i = 0; i < titleEls.length; i++) {
//   titleEls[i].innerHTML = "Akhatmirzo";
// }
// console.dir(titleEls);

// * 3. Get by tagname
// const titleEls = document.getElementsByTagName("h2");
// console.log(titleEls);

// * 4. Get by name
// const titleEls = document.getElementsByName("user");
// console.log(titleEls);

// * 5. Get by querySelector
// const input = document.querySelector("input");
// console.log(input);

// * 6. Get by querySelectorAll
// const heading2 = document.querySelectorAll("h2");
// console.log(heading2);


const carPrices = {
  bmw: {
    auto: 100,
    mech: 80,
  },
  mercedes: {
    auto: 150,
    mech: 120,
  },
  byd: {
    auto: 190,
    mech: 170,
  },
  kia: {
    auto: 200,
    mech: 190,
  },
  ferrari: {
    auto: 300,
    mech: 280,
  },
  chevrolet: {
    auto: 130,
    mech: 110,
  },
};

const priceEl = document.querySelector("#price");

function getPrice() {
  let price = 0;
  const brandSelect = document.getElementById("carSelect");
  const transferTypeEls = document.getElementsByName("transfer");

  const transferType = transferTypeEls[0].checked
    ? transferTypeEls[0].value
    : transferTypeEls[1].value;

  const hasTonirovkaPrice = document.getElementById("tonirovka") ? 10 : 0;
  const hasRegisterPrice = document.getElementById("register") ? 5 : 0;
  const daysPrice =
    +document.getElementById("days").value *
    carPrices[brandSelect.value][transferType];

  price += daysPrice + hasTonirovkaPrice + hasRegisterPrice;

  console.log(hasTonirovkaPrice + " " + hasRegisterPrice);

  priceEl.innerHTML = price;
}
getPrice()
