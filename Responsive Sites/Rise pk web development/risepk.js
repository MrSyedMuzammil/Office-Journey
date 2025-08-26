function Openform() {
    document.querySelector('.popup-model-overlay').classList.add('popup-model-overlay-class');
    document.querySelector('.form-con').classList.add('showform');
}

function closeform() {
    document.querySelector('.popup-model-overlay').classList.remove('popup-model-overlay-class');
    document.querySelector('.form-con').classList.remove('showform');
}

var formopen = document.querySelector('.books');
formopen.addEventListener("click", Openform)

var closebox = document.querySelector('span');
closebox.addEventListener("click", closeform)
