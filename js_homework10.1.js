var arr = [
  {
      userName: "Test",
      lastName: "Test",
      email: "test.test@gmail.com"
  },
  {
      userName: "Dmytro",
      lastName: "Porohov",
      email: "dmytro.porohov@yahoo.com"
  },
  {
      userName: "Andrii",
      lastName: "",
      email: "andrii@mail.ru" // Нам такі не підходять
  },
//  {
    //userName: "Andrii",
    //lastName: "",
  //  email: "andrii.2313@gmail.com"
//},
];

const validEmail = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

let trustedEmails = [];

for (let i = 0; i < arr.length; i++) {
  let email = arr[i].email;

  if (validEmail.test(email)) {
    trustedEmails[trustedEmails.length] = email;
  }
}

console.log(trustedEmails);