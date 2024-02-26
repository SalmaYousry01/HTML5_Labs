const text = document.querySelector(".text");
const colorInputs = document.querySelectorAll("input");
const alphaInput = document.getElementById("alpha");

colorInputs.forEach(input => {
    input.addEventListener("input", () => {
        const redValue = colorInputs[0].value;
        const greenValue = colorInputs[1].value;
        const blueValue = colorInputs[2].value;
        const alphaValue = alphaInput.value / 100;
        text.style.color = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
    });
});

alphaInput.addEventListener("input", () => {
    const redValue = colorInputs[0].value;
    const greenValue = colorInputs[1].value;
    const blueValue = colorInputs[2].value;
    const alphaValue = alphaInput.value / 100;
    text.style.color = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
});
