const loadingText = document.querySelector(".loading-text");
const backgroundBg = document.querySelector(".bg");

let load = 0;

const blurring = () => {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadingText.innerHTML = `${load}%`;
  backgroundBg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
};

// stackoverflow help!!
//https://stackoverflow.com/questions/10756313/javascrpt-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let int = setInterval(blurring, 30);
