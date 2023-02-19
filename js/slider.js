import {getTimeOfDay} from './greeting.js';

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let randomNum = getRandomNum(1, 20);

export const setBackground = () => {  
  let backgroundNum = '';
  if(String(randomNum).length < 2) {
    backgroundNum = String(randomNum).padStart(2, "0");
  } else {
    backgroundNum = String(randomNum);
  } 
  
  const img = new Image();  
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay()}/${backgroundNum}.jpg`;  
  img.onload = () => {      
    document.body.style.backgroundImage = `url(${img.src})`;
  };      
}

export const getSlideNext = () => {
  ++randomNum;
  if(randomNum > 20) {
    randomNum  = 1;
  }
  setBackground();  
}

export const getSlidePrev = () => {
  --randomNum;
  if(randomNum < 1) {
    randomNum  = 20;
  }
  setBackground();  
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
