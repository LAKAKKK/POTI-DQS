import './home.css'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval =  null;

function changeTextLetter(event) {
    let interation = 0;

    const initText = event.target.innerText;

    clearInterval(interval);

    interval = setInterval ( () => {
        event.target.innerText = initText
        .split("")
        .map((Letter, index) => {
            if (index < interation) {
                return event.target.dataset.textValue[index];
            }
            
            return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
        if (interation >= event.target.dataset.textValue.length) {
            clearInterval(interval);
        }

        iteration += 1 / 10;
    }, 50);

}

const animTexts =  document.querySelectorAll(".right");

animTexts.forEach((element) => {
    element.addEventListener("mouseover", () => {
        changeTextLetter({ target: element });
    });
});