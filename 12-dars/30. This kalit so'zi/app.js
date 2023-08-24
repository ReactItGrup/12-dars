// const user = {
//   name: "Asilbek",
//   age: 17,
//   email: "Asilbek1234@gmail.com",
//   location: "Toshkent",
//   langs: ["uzb", "eng", "rus"],
//   login: function () {
//     console.log("Siz bu saytdagi sahifangizga kirdingiz");
//   },
//   logout: function () {
//     console.log("Siz sahifangizdan chiqdingiz");
//   },
//   speak: function () {
//     // console.log(this.langs) ;
//   },
// };

// Endi bu mavzuda qoshib koramiz yani lang yani qaysi tillarni bilishimzni this kalit sozi yordamida chiqazib koramz

// const user = {
//   name: "Asilbek",
//   age: 17,
//   email: "Asilbek1234@gmail.com",
//   location: "Toshkent",
//   langs: ["uzb", "eng", "rus"],
//   login: function () {
//     console.log("Siz bu saytdagi sahifangizga kirdingiz");
//   },
//   logout: function () {
//     console.log("Siz sahifangizdan chiqdingiz");
//   },
//   speak: function () {
//     // console.log(this.langs) ;

//     console.log("i can speak:");
//     // bu joyda lanhgs qoshish uchun o'zgaruvchi nomi yoki this kalit sozini ishlatishimiz mumkin
//     this.langs.forEach((lang) => {
//       console.log(lang);
//     });
//   },
// };

const user = {
  langs: ["uzb", "eng", "rus"],

  speak: () => {
    console.log(this.langs);
  },
};

// agarda biz function ni arrow function ga almashtirb qoysak bizda undifined chiqadi

// arrow function ichida this ishlata olmaymiz objectlar kelganda

user.speak();

this.alert("salom");

console.log(this);
