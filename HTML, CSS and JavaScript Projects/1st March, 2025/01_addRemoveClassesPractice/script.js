console.log("hello world!");

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    removeMakeUp();
    card.classList.add('makeUp');
  })
})

function removeMakeUp() {
  cards.forEach(card => {
    card.classList.remove('makeUp');
  })
}