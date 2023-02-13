const getTimeOfDay = () => {
  const timeOfDay = ['Morning', 'Afternoon', 'Evening', 'Night'];
  const date = new Date();
  const hours = date.getHours();
  return (timeOfDay[Math.trunc(hours / 6) - 1]) ? timeOfDay[Math.trunc(hours / 6) - 1] : 'Night';
} 

export const showGreeting = () => {
  const greetingBlock = document.querySelector('.greeting');
  const timeOfDay = getTimeOfDay();
  greetingBlock.textContent = `Good ${timeOfDay},`;
}

const setLocalStorage = () => localStorage.setItem('name', document.querySelector('.name').value); 
window.addEventListener('beforeunload', setLocalStorage);

const getLocalStorage = () => localStorage.getItem('name') ? document.querySelector('.name').value = localStorage.getItem('name') : false;
window.addEventListener('load', getLocalStorage);