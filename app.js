const loadingText = document.querySelector(".loading-text");
const backgroundBg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

const blurring = () => {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
};
