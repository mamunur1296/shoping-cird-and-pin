document.getElementById("generate-pin").addEventListener("click", function () {
    sateValueInInputFile("pin-enter-file", gatePin())
})
document.getElementById("calculator").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const display = document.getElementById("typw-number");
    const number3 = display.value;
    if (isNaN(number)) {
        if (number === "C") {
            display.value = "";
        }
        else if (number === "<") {
            const digit = number3.split("");
            digit.pop();
            const remainder = digit.join("");
            display.value = remainder;
        }
    }
    else {
        const newnumber = number3 + number;
        display.value = newnumber;
    }
})
document.getElementById("varify-pin").addEventListener("click", function () {
    const generatPinDisplay = getElement("pin-enter-file")
    const varifayPinDisplay = getElement("typw-number")
    if (generatPinDisplay === varifayPinDisplay) {
        const makeMatch = document.getElementById("match")
        const make = makeMatch.innerText
        sateValueInInputFile("pin-enter-file", make)
    }
    else {
        let makeNOMatch = getElementtext("No-match")
        sateValueInInputFile("pin-enter-file", makeNOMatch)
    }
})
