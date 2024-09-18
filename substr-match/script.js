const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const substrMatch = document.getElementById("substrMatch");
const reset = document.getElementById("reset");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const substrMatchHtmlSolution = `<h2>部分文字列一致セレクター</h2>

<ul>
    <li class="a">List01</li>
    <li class="ab">List02</li>
    <li class="bca">List03</li>
    <li class="bcabc">List04</li>
</ul>
`;
const substrMatchCssSolution = `ul {
    list-style-type: none;
}

ul li {
    padding: 5px;
}

ul li[class^="a"] {
    font-size: 200%;
}

ul li[class$="a"] {
    background-color: lightgreen;
}

ul li[class*="a"] {
    color: orange;
}
`;

let substrMatchHtmlSolutionEntry = substrMatchHtmlSolution;
let substrMatchCssSolutionEntry = substrMatchCssSolution;

substrMatch.addEventListener("click", () => {
    if (substrMatch.value === "部分文字列一致セレクター") {
        textareaHTML.value = substrMatchHtmlSolutionEntry;
        textareaCSS.value = substrMatchCssSolutionEntry;
        substrMatch.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        substrMatch.value = "部分文字列一致セレクター";
    }
    fillCode();
});

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    substrMatch.value = "部分文字列一致セレクター";
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);