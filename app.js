let imgCont = document.getElementById("headerBanner");
const prevBtn = document.getElementById("carouselBtnPrev");
const nextBtn = document.getElementById("carouselBtnNext");

// Home header animation

let i = 1;
arrImages = ["./assets/home/im.jpg", "./assets/home/im1.jpg"];
imgCont.src = arrImages[i];
const next = () => {
  arrImages.length - 1 <= i ? (i = 0) : (i += 1);
  imgCont.src = arrImages[i];
}
const  prev = () => {
  i <= 0 ? (i = arrImages.length - 1) : (i -= 1);
  imgCont.src = arrImages[i];
}
nextBtn.addEventListener("click", () => {
  next()
});
prevBtn.addEventListener("click", () => {
  prev()
});
setInterval(next ,2000)