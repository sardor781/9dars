// const div = document.getElementById("app");
// console.log(div);

// const h1 = document.getElementsByClassName("name");
// console.log(h1);

// const h2 = document.querySelector("#h2");
// console.log(h2);

// const h3 = document.querySelectorAll(".h3");
// console.log(h3);

// const h4 = document.getElementsByTagName("h4");
// console.log(h4);

// const title = document.querySelector('.h1');

// let ism = prompt('Ismingizni kiriting');
// 22
// title.innerHTML = ism;


const span = document.querySelectorAll('span');
let ism = prompt('Ismingizni kiriting');
let familiya = prompt('Familiyangizni kiriting');
let yosh = prompt('Yoshingizni kiriting');
let turi = prompt('Malumotlar kata yoki kichik harfda bolishini tanlang \n 1) Katta \n 2) kichik');

if (turi === "1") {
    ism = ism.toUpperCase();
    familiya = familiya.toUpperCase();
    yosh = yosh.toUpperCase();
  }
  
  if (turi === "2") {
    ism = ism.toLowerCase();
    familiya = familiya.toLowerCase();
    yosh = yosh.toLowerCase();
  }

span[0].innerHTML = ism;
span[1].innerHTML = familiya;
span[2].innerHTML = yosh;