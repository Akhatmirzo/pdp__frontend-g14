var userName = prompt('Ismingizni kiriting: ');
var userYear = prompt('Yilingizni kiriting: ');

var age = 2023 - userYear;

if (age >= 18 && age < 60) {
    alert(`${userName}, Siz istagan mahsulotingizni olishingiz munkin.`);
}else if(age < 18) {
    alert(`${userName}, Siz Alkagol, tamaki va energetik mahsulotlarni olishingiz munkin emas.`);
}
else if (age >= 60) {
    alert(`${userName}, Siz energetik mahsulotlarni olishingiz munkin emas. Yuragiyiz ko'tarmidi`);
}