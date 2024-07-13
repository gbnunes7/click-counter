let counter = 0
const counterHTML = document.getElementById('contador__click')
const btnIncrease = document.getElementById('increase__button')
const btnDecrease = document.getElementById('decrease__button')
const btnReset = document.getElementById('reset__button')

function atualizaCor(){
    if(counter > 0) {
        counterHTML.style.color = "green";
    } else if (counter < 0) {
        counterHTML.style.color = "red";
    } else {
        counterHTML.style.color = "#333";
    }
}

btnIncrease.addEventListener('click', () => {
    counter++;
    counterHTML.innerHTML = counter;
    atualizaCor();
})

btnDecrease.addEventListener('click', () => {
    counter--;
    counterHTML.innerHTML = counter;
    atualizaCor();

})

btnReset.addEventListener('click', () => {
    counter = 0;
    counterHTML.innerHTML = counter;
    atualizaCor();

})