var isConfirmed = confirm("Iltimos tug'ulgan yilingizni kiriting...");

if (isConfirmed) {
    var year = prompt("Iltimos pastga yilingizni raqamlar bilan kiriting...", 2005);

    var age = 2023 - year;

    alert(`Sizning yoshingiz: ${age}`);
} else {
    var retIsConfirmed = confirm('Blet tasdiqla naxuy!!!');

    if (retIsConfirmed) {
        var year = prompt("A bu boshqa gap bo'larkanu Tvar, Yoshini sonlar bilan kirit:", 2005);

        var age = 2023 - year;

        alert(`Sen Tvarni yoshing: ${age} da`);
    } else {
        alert("E kallangga ................");
    }
}

// var son1 = prompt("1 - sonni kiriting: ");
// var son2 = prompt("1 - sonni kiriting: ");

// alert(`Natija: ${son1} % ${son2} = ${son1 % son2}`);