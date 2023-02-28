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

playList.forEach(el => {   
  let li = document.createElement('li');  
  li.classList.add('play-item');
  li.textContent = `${el.title}`;
  playListContainer.append(li);  
});

const togglePlay = () => {
  if(!isPlay) {
    isPlay = true;        
    playListContainer.children[playNum].classList.add('item-active');
    playButton.classList.toggle('pause');        
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
  } else {
    isPlay = false;
    playButton.classList.toggle('pause');
    playListContainer.children[playNum].classList.remove('item-active');  
    audio.pause(); 
  }
}

playButton.addEventListener('click', togglePlay);