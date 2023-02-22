import playList from './playList.js';


const player = document.querySelector('.player');
const audio = document.querySelector('.audio');
const playButton = document.querySelector('.play');
const prevButton = document.querySelector('.play-prev');
const nextButton = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');

let isPlay = false;
let playNum = 0;

const togglePlay = () => {
  if(!isPlay) {
    isPlay = true;
    playButton.classList.toggle('pause');
    playAudio();
  } else {
    isPlay = false;
    playButton.classList.toggle('pause')
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

playList.forEach((el, i) => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = `${playList[0].title}`;
  playListContainer.append(li);
});