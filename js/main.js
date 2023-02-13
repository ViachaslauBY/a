import {showDate} from './date.js';
import {showGreeting} from './greeting.js';

const timeBlock = document.querySelector('.time');

const showTime = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  timeBlock.textContent = currentTime;

  showDate(); 
  showGreeting();  
  setTimeout(showTime, 1000);       
}

showTime();