const btn = document.querySelector('button');
btn.addEventListener('click', sand);
function sand() {

    alert("תגובתך נשמרה בהצלחה!!");
}




let arr1 = [];
let str = localStorage.getItem('data');
const form = document.querySelector('form');
inputs = form.querySelectorAll('input,select');

if (str != null) {
    arr1 = JSON.parse(str);
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = arr1[i];

    }

}


for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () { saveInLocal(i); });
}
function saveInLocal(i) {

    arr1[i] = inputs[i].value;
    localStorage.setItem('data', JSON.stringify(arr1));

}

