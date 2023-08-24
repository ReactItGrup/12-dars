// Objects

// Abyektlar o'zi nima

// Masalan bizda registratsiya bolimi bor

// Foydalanuvchi unga o'z ma'lumotlarini kirg'izda va o'zining profiliga kiradi

// Ma'lumotlar bo'lishi mumkin

// Email
// Parol
// Ism
// Familya
// Jins
// Va.hkz

// bu ma'lumotlar properties hisob lanadi

// bundan tashqari biz methodlar dan ham foydalanimz

//login - akkauntga kirish
//logout - akkauntdan chiqish

// Biz arrayda [] foydlanar edik

// Endi objectda {} foydalanamiz
const user = {
  name: "Asilbek",
  age: 17,
  email: "Asilbek1234@gmail.com",
  location: "Toshkent",
  lang: ["uzb", "eng", "rus"],
};

console.log(user);

// agar bizga o'zgaruvchi ichidagi aynan bitta ma'lumot kerak bo'lsa o'zgaruvchi nomidan kegin . qo'yamiz
// age = key (Kalit so'z)
// 17 = value (Qiymat)
console.log(user.age);

// Bu narsani eskiroq yo'li ham bor

console.log(user["location"]);
user["name"] = "Ziyodulla";

console.log(user["name"]);
