const panels = document.querySelectorAll('.panel');
// console.log(panels);
// console.log(panels.length);
// console.log(panels[2]);
// panels[2].innerHTML = "<h1>Hello World innerHTML</h1>"

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
      panel.classList.add('active');
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}