// ! 1 - masala
// let dayNumber = parseInt(prompt('Enter day number'));

// switch (dayNumber) {
//     case 1:
//         alert("Dushanba")
//         break;
//     case 2:
//         alert("Seshanba")
//         break;
//     case 3:
//         alert("Chorshanba")
//         break;
//     case 4:
//         alert("Payshanba")
//         break;
//     case 5:
//         alert("Juma")
//         break;
//     case 6:
//         alert("shanba")
//         break;
//     case 7:
//         alert("Yakshanba")
//         break;

//     default:
//         alert('Kallangga YASHIRIN SO\'ZLAR');
//         break;
// }

//! 3 - masala
// let monthNumber = parseInt(prompt('Enter month number'));

// switch (monthNumber) {
//     case 1:
//         alert("Yanvar")
//         break;
//     case 2:
//         alert("Fevral")
//         break;
//     case 3:
//         alert("Mart")
//         break;
//     case 4:
//         alert("Aprel")
//         break;
//     case 5:
//         alert("May")
//         break;
//     case 6:
//         alert("Iyun")
//         break;
//     case 7:
//         alert("Iyul")
//         break;
//     case 8:
//         alert("Avgust")
//         break;
//     case 9:
//         alert("Sentabr")
//         break;
//     case 10:
//         alert("Oktabr")
//         break;
//     case 11:
//         alert("Noyabr")
//         break;
//     case 12:
//         alert("Dekabr")
//         break;

//     default:
//         alert('Kallangga YASHIRIN SO\'ZLAR');
//         break;
// }

// ! 4 masala
// let enterLanguages = prompt('Translation from Uzbek to enter language: \n 1 - English \n 2 - Spanish \n 3 - French \n');
// let enterWord = "";
// switch (enterLanguages) {
//     case '1':
//         alert("English");
//         enterWord = prompt("Enter your translate work");
//         console.log(enterWord.toLowerCase());
//         switch (enterWord) {
//             case "salom":
//                 alert("Hello");
//                 break;
//             default:
//                 alert("Error!");
//         }
//         break;
//     case '2':
//         alert("Spanish")
//         enterWord = prompt("Enter your translate work");
//         console.log(enterWord.toLowerCase());
//         switch (enterWord) {
//             case "salom":
//                 alert("Hola");
//                 break;
//             default:
//                 alert("Error!");
//         }
//         break;
//     case '3':
//         alert("Franch")
//         enterWord = prompt("Enter your translate work");
//         console.log(enterWord.toLowerCase());
//         switch (enterWord) {
//             case "salom":
//                 alert("Bonjour");
//                 break;
//             default:
//                 alert("Error!");
//         }
//         break;

//     default:
//         alert('Error!');
//         break;
// }

// ! 5 - masala
// let selectMenu = parseInt(prompt('Taomlar menyusi: \n 1 - Osh \n 2 - Somsa \n 3 - Sho\'rva \n 4 - Shashlik \n 5 - Manti \n 6 - Bishteks'));

// switch (selectMenu) {
//     case 1:
//         alert("Name: Osh \n Narxi: 30000$ \n Tami: Mazali \n");
//         break;
//     case 2:
//         alert("Name: Somsa \n Narxi: 5000$ \n Tami: Mazali \n");
//         break;
//     case 3:
//         alert("Name: Sho\'rva \n Narxi: 25000$ \n Tami: Mazali \n");
//         break;
//     case 4:
//         alert("Name: Shashlik \n Narxi: 22000$ \n Tami: Mazali \n");
//         break;
//     case 5:
//         alert("Name: Manti \n Narxi: 4000$ \n Tami: Mazali \n");
//         break;
//     case 6:
//         alert("Name: Bishteks \n Narxi: 24000$ \n Tami: Mazali \n");
//         break;

//     default:
//         alert("Menuda mavjud emas!");
//         break;
// }

// ! 6 - masala 
let num1 = parseInt(prompt("Enter Number 1"));
let action = prompt('Amalni kiriting');
let num2 = parseInt(prompt("Enter Number 2"));

switch (action) {
    case '+':
        alert(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        alert(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '/':
        alert(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    case '*':
        alert(`${num1} * ${num2} = ${num1 * num2}`);
        break;

    default:
        alert("Invalid action");
        break;
}
