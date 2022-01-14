const table = document.querySelector('.applicant');
const restartBtn = document.querySelector('.restart');

console.log(table);

table.addEventListener('click', () => {
  table.style.opacity = '0';
  restartBtn.disabled = false;

  restartBtn.addEventListener('click', () => {
    window.location.reload()
  })
})

document.addEventListener('keydown', (event) => {
  if (event.code == 'Space') {
    table.remove();
  }
  restartBtn.disabled = false;
  restartBtn.addEventListener('click', () => {
    window.location.reload()
  })
})
