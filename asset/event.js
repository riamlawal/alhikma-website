lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: true,
});

let loadMoreBtn = document.querySelector("#load-more");
let loadLessBtn = document.querySelector("#load-less");
let currentItem = 4;

// loadMoreBtn.onclick = () => {
//   let boxes = [...document.querySelectorAll(".container .box-container .box")];
//   for (var i = currentItem; i < currentItem + 4; i++) {
//     boxes[i].style.display = "inline-block";
//   }
//   currentItem += 4;

//   if (currentItem >= boxes.length) {
//     loadMoreBtn.style.display = "none";
//     loadLessBtn.style.display = "inline-block";
//   }
// };

// loadLessBtn.onclick = () => {
//   let boxes = [...document.querySelectorAll(".container .box-container .box")];
//   for (var i = currentItem; i > currentItem + 4; i--) {
//     boxes[i].style.display = "inline-block";
//   }
//   currentItem -= 4;

//   if (currentItem <= boxes.length) {
//     loadLessBtn.style.display = "inline-block";
//   }
// };

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".container .box-container .box")];
  for (var i = currentItem; i < currentItem + 4; i++) {
    if (i < boxes.length) {
      boxes[i].style.display = "inline-block";
    }
  }
  currentItem += 4;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
    loadLessBtn.style.display = "inline-block";
  }
};

loadLessBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".container .box-container .box")];
  for (var i = currentItem - 1; i >= currentItem - 4; i--) {
    if (i >= 0) {
      boxes[i].style.display = "none";
    }
  }
  currentItem -= 4;

  if (currentItem <= 0) {
    loadLessBtn.style.display = "none";
  }

  loadMoreBtn.style.display = "inline-block";
};
