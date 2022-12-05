const navBtn = document.getElementById("menuMob");
const nav = document.getElementById("nav");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// const app = document.getElementById("root");
// const navbar = `
// <nav class="nav" id="nav">
// <div class="nav__upper">
//     <h3 class="nav__title"><a href="#" class="link">GulDU Akademik litseyi</a> </h3>
//     <span class="menuMob" id="menuMob"><b>☰</b></span>
// </div>
// <div class="nav__under active">
//     <ul>
//         <li><a class="link menuItem" href="#">Haqida</a></li>
//         <li><a class="link menuItem" href="#">Yangiliklar</a></li>
//         <li><a class="link menuItem" href="#">Tadbirlar</a></li>
//         <li><a class="link menuItem" href="#">Qabul</a></li>
//         <li><a class="link menuItem" href="#">Bog'lanish</a></li>
//     </ul>
//     <div class="nav__upper2">
//         <select name="lang" id="lang">
//             <option value="uz">Uz</option>
//             <option value="ru">Ru</option>
//             <option value="en">Eng</option>
//         </select>
//     </div>
// </div>
// </nav>
// `;

// app.innerHTML = navbar;
