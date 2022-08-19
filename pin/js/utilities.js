function gatePin() {
    const pin = genaratePin();
    const pinString = pin + "";
    if (pinString.length === 4) {
        return pin;
    } else {
        return gatePin();
    }
}
function genaratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
function sateValueInInputFile(ElementID, ElementValue) {
    const ProducktQuentaty = document.getElementById(ElementID);
    ProducktQuentaty.value = ElementValue;
}
function getElement(id) {
    const element = document.getElementById(id);
    const elementItem = element.value;
    return elementItem;
}
function getElementtext(id) {
    const element = document.getElementById(id);
    const elementItem = element.innerText;
    return elementItem;
}