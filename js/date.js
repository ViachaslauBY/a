export const showDate = () => {
  const dateBlock = document.querySelector('.date');
  const date = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = date.toLocaleDateString('en-US', options);
  dateBlock.textContent = currentDate;
}