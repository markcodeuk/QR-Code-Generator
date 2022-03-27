const wrapper = document.querySelector(".wrapper"), //grabbing html contents
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => { // when button is clicked it adds space below it. space determined by .wrapper.active in css sheet.
    let qrValue = qrInput.value;
    if(!qrValue) return; // if the input is empty then return from here. will not allow user to progress.
    generateBtn.innerText = "Generating QR Code..." // changes text once user clicks on button with text in brackets.

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`; //getting the qr code from the api server with the value the user inputs via the ${qrValue} string
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code"; // returns the button back to the text in brackets.
});

});

qrInput.addEventListener("keyup", () => { // once text removed from input field the barcode will go away.

    if(!qrInput.value) {
        wrapper.classList.remove("active");
    }
})
