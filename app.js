const loadingText = document.querySelector(".loading-text");
const backgroundBg = document.querySelector(".bg");

let load = 0;

const blurring = () => {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadingText.innerHTML = `${load}%`;
};

let int = setInterval(blurring, 30);
