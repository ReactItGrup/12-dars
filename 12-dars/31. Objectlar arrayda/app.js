const kinolar = [
  { name: "Avatar", likes: 342 },
  { name: "U 2", likes: 2500 },
  { name: "Nimadur", likes: 35 },
  { name: "Sherlock", likes: 3253 },
  { name: "Steav jobs X/F", likes: 5000 },
];

kinolar.forEach((kino) => {
  const result = `kino nomi: ${kino.name}, Likes: ${kino.likes}`;
  //   console.log(result);

  //   console.log(kino.name);
  //   console.log(kino.likes);
  // Bu juda ham sodda va ko'rinarsiz uslubi
});

const user = {
  name: "Asilbek",
  age: 17,
  email: "Asilbek1234@gmail.com",
  location: "Toshkent",
  langs: ["uzb", "eng", "rus"],
  kinolar: [
    { name: "Avatar", likes: 342 },
    { name: "U 2", likes: 2500 },
    { name: "Nimadur", likes: 35 },
    { name: "Sherlock", likes: 3253 },
    { name: "Steav jobs X/F", likes: 5000 },
  ],
  login: function () {
    console.log("Siz bu saytdagi sahifangizga kirdingiz");
  },
  logout: function () {
    console.log("Siz sahifangizdan chiqdingiz");
  },
  speak: function () {
    // console.log(this.langs) ;

    console.log("i can speak:");
    // bu joyda langs qoshish uchun o'zgaruvchi nomi yoki this kalit sozini ishlatishimiz mumkin
    this.langs.forEach((lang) => {
      console.log(lang);
    });
  },

  movieWatch: function () {
    this.kinolar.forEach((kino) => {
      const result = `kino nomi: ${kino.name}, Likes: ${kino.likes}`;
      console.log(result);
    });
  },
};

user.movieWatch();
