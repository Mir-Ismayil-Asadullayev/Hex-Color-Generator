let changeButton = document.getElementById("change");
let input = document.getElementById("input");
let copyButton = document.getElementById("copy");

let setBackground = () => {
    const bgColor = Math.floor(Math.random() * 10000000).toString(16);
    document.body.style.backgroundColor = "#" + bgColor;
    input.value = "#" + bgColor;
}

changeButton.addEventListener("click", setBackground);
copyButton.addEventListener("click", () => {
    input.select();
    navigator.clipboard.writeText(input.value);
});
