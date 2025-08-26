const progress = document.getElementById("progress");
const circle = document.querySelectorAll(".circle");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const reset = document.getElementById("reset");

let currentStep = 1;

next.addEventListener('click', () => {
  currentStep++
  if (currentStep > circle.length) {
    currentStep = circle.length;
  }
  update()
})

previous.addEventListener('click', () => {
  currentStep--

  if (currentStep < 1) {
    currentStep = 1;
  }
  update()
})

reset.addEventListener('click', () => {
  currentStep = 1;
  update()
  circle.forEach((circle) => {
    circle.classList.remove("active");
  });
  progress.style.width = 0 + '%';
})

function update() {

  circle.forEach((circle, idx) => {
    if (idx < currentStep) {
      circle.classList.add("active");
    }
    else {
      circle.classList.remove("active");
    }
  });


const actives = document.querySelectorAll(".active");

progress.style.width =  (actives.length - 1) / (circle.length - 1)  * 100 + '%'


if (currentStep === 1) {
  previous.disabled = true;
  reset.disabled = true;
}
else if (currentStep === circle.length) {
  next.disabled = true;
}
else {
  previous.disabled = false;
  next.disabled = false;
  reset.disabled = false;
}
}