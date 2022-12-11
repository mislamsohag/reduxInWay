const headerText = document.getElementById('headerText');


const initialTxt = document.getElementById('initialTxt');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

let count = 0;

increaseBtn.addEventListener('click', () => {
    count++;
    initialTxt.innerText = count;
    headerText.innerText = "This Counter is Increasing";
})


decreaseBtn.addEventListener('click', () => {
    count--;
    initialTxt.innerText = count;
    headerText.innerText = "This Counter is Decreasing";
})

