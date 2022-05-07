
import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector("input");
const messageEl = document.querySelector("textarea");

const STORAGE_KEY = "feedback-form-state";

formEl.addEventListener('input', throttle(onInput, 500) );


function onInput() {

    const objData = {};
    objData.email = emailEl.value;
    objData.message = messageEl.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(objData));
}

window.onload = load;

function load() {
    const objFromStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (localStorage.getItem(STORAGE_KEY)) {
        emailEl.value = objFromStorage.email;
        messageEl.value = objFromStorage.message;            
    } else {
        emailEl.value = "";
        messageEl.value = "";
    }
}
      
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));

    localStorage.removeItem("feedback-form-state");
    formEl.reset();
}