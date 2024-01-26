// ? POST
// const userData = {
//     email: "eve.holt@reqres.in",
//     password: "pistol",
// };

// fetch("https://reqres.in/api/register", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData)
// }).then(res => {
//     return res.json()
// }).then(data => {
//     console.log(data);
//     localStorage.setItem("token", JSON.stringify(data.token))
// }).catch(err => {
//     console.log(err);
// });

// Employee login
// const employeeData = {
//     phone: "+998909706096",
//     password: "HelloWorld"
// }


// fetch('http://localhost:8080/api/v1/employee/login', {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(employeeData)
// }).then((res) => {
//     return res.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })