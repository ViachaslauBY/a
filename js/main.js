import {showTime} from './time.js';
import {setBackground} from './slider.js';
import {getWeather} from './weather.js';
import {getQuotes} from './quote.js';

showTime();
setBackground();
getWeather();
getQuotes();







import playList from './playList.js';


const player = document.querySelector('.player');
const audio = new Audio()
const playButton = document.querySelector('.play');
const prevButton = document.querySelector('.play-prev');
const nextButton = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');


let isPlay = false;
let playNum = 0;
let li;


const togglePlay = () => {
  if(!isPlay) {
    isPlay = true;
    // li.classList.add('item-active');    
    playButton.classList.toggle('pause');
    playAudio();
  } else {
    isPlay = false;
    playButton.classList.toggle('pause');
    // li.classList.remove('item-active');
    pauseAudio();
  }
}

const playAudio = () => {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();  
}

const pauseAudio = () => {
  audio.pause();  
}

playList.forEach(el => {  
  li = document.createElement('li');  
  li.classList.add('play-item');
  li.textContent = `${el.title}`;
  playListContainer.append(li);  
});

playButton.addEventListener('click', togglePlay);