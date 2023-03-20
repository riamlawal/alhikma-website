// responsive Header

//end ready

ScrollReveal().reveal(".team1", { delay: 300 });
ScrollReveal().reveal(".team2", { delay: 400 });
ScrollReveal().reveal(".team3", { delay: 500 });
ScrollReveal().reveal(".team4", { delay: 600 });
ScrollReveal().reveal(".team5", { delay: 700 });
ScrollReveal().reveal(".team6", { delay: 800 });
ScrollReveal().reveal(".team7", { delay: 900 });

//Counter
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// icons
ScrollReveal().reveal(".icon1", {
  delay: 300,
  // rotate:{
  //   x:20,
  //   y:60,
  //   z:40
  // }

  // scale: 2,
  //easing: 'ease-in',
  origin: "top",
});
ScrollReveal().reveal(".icon2", { delay: 400 });
ScrollReveal().reveal(".icon3", { delay: 500 });
ScrollReveal().reveal(".icon4", { delay: 600 });
ScrollReveal().reveal(".icon5", { delay: 700 });
ScrollReveal().reveal(".icon6", { delay: 800 });

// corevalues
ScrollReveal().reveal(".coreValues", {
  delay: 300,
  // rotate:{
  //   x:20,
  //   y:60,
  //   z:40
  // }

  scale: 2,
});
