const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const exisOrValue = document.getElementById("exisOrValue");
const reset = document.getElementById("reset");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const exisOrValueHtmlSolution = `<h2>存在や値のセレクター</h2>

<ul>
    <li>List01</li>
    <li class="a">List02</li>
    <li class="a b">List03</li>
    <li class="ab">List04</li>
</ul>
`;
const exisOrValueCssSolution = `ul {
    list-style-type: none;
}

ul li {
    padding: 5px;
}

ul li[class] {
    font-size: 200%;
}

ul li[class="a"] {
    background-color: lightgreen;
}

ul li[class~="a"] {
    color: orange;
}
`;

let exisOrValueHtmlSolutionEntry = exisOrValueHtmlSolution;
let exisOrValueCssSolutionEntry = exisOrValueCssSolution;

exisOrValue.addEventListener("click", () => {
    if (exisOrValue.value === "存在や値のセレクター") {
        textareaHTML.value = exisOrValueHtmlSolutionEntry;
        textareaCSS.value = exisOrValueCssSolutionEntry;
        exisOrValue.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        exisOrValue.value = "存在や値のセレクター";
    }
    fillCode();
});

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    exisOrValue.value = "存在や値のセレクター";
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);
