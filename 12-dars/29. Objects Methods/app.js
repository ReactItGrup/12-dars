// const user = {
//   name: "Asilbek",
//   age: 17,
//   email: "Asilbek1234@gmail.com",
//   location: "Toshkent",
//   lang: ["uzb", "eng", "rus"],
//   login: function () {
//     console.log("Siz bu saytdagi sahifangizga kirdingiz");
//   },
// };

// console.log(user.name);
// console.log(user["age"]);

// user.login();

// const ism = "Asilbek";
// ism.toUpperCase();
// Nimaga bilani ishlatish usuli bir hil

// chunki ja da string bolishi mukin lekin uning backgroundi da u borib object da aylanadi

const user = {
  name: "Asilbek",
  age: 17,
  email: "Asilbek1234@gmail.com",
  location: "Toshkent",
  lang: ["uzb", "eng", "rus"],
  login: function () {
    console.log("Siz bu saytdagi sahifangizga kirdingiz");
  },
  logout: function () {
    console.log("Siz sahifangizdan chiqdingiz");
  },
};

user.login();
user.logout();
