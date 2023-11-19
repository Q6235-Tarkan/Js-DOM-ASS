// 1. header classına sahip olan elementi querySelector() metodu ile yakalayınız. Background color, color, padding özellikleri ekleyiniz ve text hizalamasını center olarak ayarlayınız.

const headerElement = document.querySelector(".header");
headerElement.style.backgroundColor = "black";
headerElement.style.color = "red";
headerElement.style.padding = "21px";
headerElement.style.textAlign = "center";

// 2. title id sine sahip olan elementi getElementById() metodunu kullanarak yakalayınız. Ve "Javascript Dom Assignment 1" metnini textContent özelliği ile ekleyiniz.

const titleElement = document.getElementById("title");
titleElement.textContent = "Javascript Dom Assignment 1";

// 3.nav-item classına sahip olan elementi querySelector() metodu ile yakalayınız. Flexbox(center olsun) özelliği ekleyiniz ve elementler arasına gap özelliği ile boşluk ekleyiniz. List style özelliğini kaldırınız.

const navItemElement = document.querySelector(".nav-item");
navItemElement.style.display = "flex";
navItemElement.style.justifyContent = "center";
navItemElement.style.gap = "2rem";
navItemElement.style.listStyle = "none";

// 4.username ve password idsine sahip olan inputları querySelector() metodu ile yakalayınız. İnputların value attributelarını kullanarak Username inputuna "Anthony" yazınız, password inputuna "123456" yazınız. Ayrıca password inputuna yazılan değerin görülmesini sağlayın. Ve inputların disabled özelliğini aktif ediniz. (Not: html de input type=password olduğunda bildiğiniz üzere yazılan değerler saklanıyor. Bu özelliği js ile değiştirmeniz lazım.)

const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
usernameInput.value = "Anthony";
passwordInput.value = "12345";
passwordInput.type = "text";
usernameInput.disabled = "false";
passwordInput.disabled = "false";

// 5.btn classına sahip olan elementi querySelector() metodu ile yakalayınız. Background color, color, padding, border-radius özellikleri ekleyiniz. Cursor pointer olsun ve border özelliği none olsun. Ayrıca button elementinin metni "Giriş Yap" metni olsun.

const btnElement = document.querySelector(".btn");
btnElement.style.backgroundColor = "#C0EFC0";
btnElement.style.color = "red";
btnElement.style.padding = "0.5rem";
btnElement.style.borderRadius = "5px";
btnElement.style.cursor = "pointer";
btnElement.style.border = "none";
btnElement.textContent = "Giriş Yap";

// 6.projects idsine sahip olan elementi getElementById() metodunu kullanarak yakalayınız. Yakaladığınız bu element üzerinden bu elementin first childi olan h3 elementine ulaşıp metnini "Js Dom Projects" olarak değiştiriniz.

const projectsId = document.getElementById("projects");
projectsId.firstElementChild.textContent = "Js Dom Projects";

// 7. const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"]; Verilen myProjects arrayindeki elemanları bir önceki adımda yakaladığınız projects idsine sahip olan elementin last childi olan ul elementine innerHTML özelliğini kullanarak tek tek li elementleri içerisinde child olarak ekleyiniz.
const myProjects = [
  "Hello World!",
  "Guess Number",
  "Checkout Page",
  "Gelir-Gider Projesi",
  "Api Projects",
];
const ulElement = projectsId.lastElementChild;
// 1. yol append kullanarak
// for (let index = 0; index < myProjects.length; index++) {
//     const liElement=document.createElement("li");
//     liElement.textContent=myProjects[index];
//     ulElement.appendChild(liElement);
// }

// 2 .yol

// for (let index = 0; index < myProjects.length; index++) {
//     const liElement=myProjects[index];
//     ulElement.innerHTML +=`<li>${liElement}</li>`
// }

//****3 . yol

ulElement.innerHTML = myProjects
  .map((project) => `<li>${project}</li>`)
  .join("");
