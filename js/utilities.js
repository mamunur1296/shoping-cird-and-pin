function incressInProducktQuentaty(elementId) {
    const ProducktQuentaty = document.getElementById(elementId);
    const ProducktQuentatyValue = ProducktQuentaty.value;
    const ProducktQuentatystring = parseInt(ProducktQuentatyValue);
    const incressInProducktQuentaty = ProducktQuentatystring + 1;
    return incressInProducktQuentaty;
}
function dicressInProdecktQuentaty(dicressElementId) {
    const ProducktQuentaty = document.getElementById(dicressElementId);
    const ProducktQuentatyValue = ProducktQuentaty.value;
    const ProducktQuentatystring = parseInt(ProducktQuentatyValue);
    const incressInProducktQuentaty = ProducktQuentatystring - 1;
    return incressInProducktQuentaty;
}
function sateValueInInputFile(ElementID, ElementValue) {
    const ProducktQuentaty = document.getElementById(ElementID);
    ProducktQuentaty.value = ElementValue;
}
function sateValueInInputElement(ElementID, ElementValue) {
    const ProducktQuentaty = document.getElementById(ElementID);
    ProducktQuentaty.innerText = ElementValue;
}
function calculateProducktPrice(ProducktQuentaty, price, priceFild) {
    const TotalPriducktPrice = ProducktQuentaty * price;
    const producktPriceFild = document.getElementById(priceFild);
    producktPriceFild.innerText = TotalPriducktPrice;
    return TotalPriducktPrice;
}
function getElement(element) {
    const ProducktQuentaty = document.getElementById(element);
    const ProducktQuentatyValue = ProducktQuentaty.innerText;
    const ProducktQuentatystring = parseInt(ProducktQuentatyValue);
    return ProducktQuentatystring;
}
function rejultSubTaxTotal() {
    const Phomeprice = getElement("phon-proce")
    const cashprice = getElement("cash-price")
    const subTotal = Phomeprice + cashprice;
    const sub = sateValueInInputElement("totla-sub-price", subTotal);
    const taxString = (subTotal * .05).toFixed(2);
    const tax = parseFloat(taxString);
    const taxTotal = sateValueInInputElement("totla-tax", tax);
    const total = tax + subTotal;
    const TotalPrice = sateValueInInputElement("totla-price", total);
}