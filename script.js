//change background themes
const html = document.querySelector("html")
const sele = document.querySelector("select")

const bgChange = (bg,txt) => {
    html.style.background = bg;
    html.style.color = txt;
};

html.addEventListener("change", () => {
const choice = sele.value;
switch (choice) {
    case "black": bgChange("black", "white");
    break;

    case "white": bgChange("white", "black");
    break;

    case "red": bgChange("red", "white");
    break;

    case "green": bgChange("green", "black");
    break;

    case "purple": bgChange("purple", "black"); 
}
});