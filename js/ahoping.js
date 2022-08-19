document.getElementById("phone-plass-btn").addEventListener("click", function () {
    const priducktQuentaty = incressInProducktQuentaty("phon-quentaty-fild");
    sateValueInInputFile("phon-quentaty-fild", incressInProducktQuentaty("phon-quentaty-fild"));
    calculateProducktPrice(priducktQuentaty, 1219, "phon-proce");
    rejultSubTaxTotal();
})
document.getElementById("phone-minus-btn").addEventListener("click", function () {
    const priducktQuentaty = dicressInProdecktQuentaty("phon-quentaty-fild");
    sateValueInInputFile("phon-quentaty-fild", dicressInProdecktQuentaty("phon-quentaty-fild"));
    calculateProducktPrice(priducktQuentaty, 1219, "phon-proce");
    rejultSubTaxTotal();
})
document.getElementById("btn-case-plass").addEventListener("click", function () {
    const cashQuentaty = incressInProducktQuentaty("case-number-fild");
    sateValueInInputFile("case-number-fild", incressInProducktQuentaty("case-number-fild"));
    calculateProducktPrice(cashQuentaty, 59, "cash-price");
    rejultSubTaxTotal();
})
document.getElementById("btn-case-less").addEventListener("click", function () {
    const cashQuentaty = dicressInProdecktQuentaty("case-number-fild");
    sateValueInInputFile("case-number-fild", dicressInProdecktQuentaty("case-number-fild"));
    calculateProducktPrice(cashQuentaty, 59, "cash-price");
    rejultSubTaxTotal();
})
document.getElementById("Btn-check-out").addEventListener("click", function () {
    window.location.href = "pin/pin.html";
})