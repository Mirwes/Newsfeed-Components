/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


const menuBtn = document.querySelector(".menu-button");
const header = document.querySelector(".header");
function menuMaker(arr) {
  let house = document.createElement("div");
  house.classList.add("menu");
  header.appendChild(house);
  let list = document.createElement("ul");
  house.appendChild(list);
  arr.forEach(cv => {
    let item = document.createElement("li");
    item.textContent = cv;
    list.appendChild(item);
  });
}
menuMaker(menuItems);

let pos = -350;
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  menu.classList.add("menu--open");
  if (pos < 1) {
    let id = setInterval(() => {
      if (pos < 1) {
        pos++;
        menu.style.left = pos + "px";
      } else {
        clearInterval(id);
      }
    });
  }
});

menuBtn.addEventListener("click", () => {
  if (pos == 1) {
    let id = setInterval(() => {
      if (pos > -350) {
        pos--;
        menu.style.left = pos + "px";
      } else {
        clearInterval(id);
        menu.classList.remove("menu--open");
      }
    });
  }
});



/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/
