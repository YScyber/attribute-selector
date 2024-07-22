const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const reset = document.getElementById("reset");
const exisOrValue = document.getElementById("exisOrValue");
const substrMatch = document.getElementById("substrMatch");
const caseSensitive = document.getElementById("caseSensitive");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const exisOrValueHtmlSolution = `<ul>
    <li>List01</li>
    <li class="a">List02</li>
    <li class="a b">List03</li>
    <li class="ab">List04</li>
</ul>`;
const exisOrValueCssSolution = `ul li[class] {
    font-size: 200%;
}

ul li[class="a"] {
    background-color: lightgreen;
}

ul li[class~="a"] {
    color: orange;
}`;

const substrMatchHtmlSolution = `<ul>
    <li class="a">List01</li>
    <li class="ab">List02</li>
    <li class="bca">List03</li>
    <li class="bcabc">List04</li>
</ul>`;
const substrMatchCssSolution = `ul li[class^="a"] {
    font-size: 200%;
}

ul li[class$="a"] {
    background-color: lightgreen;
}

ul li[class*="a"] {
    color: orange;
}`;

const caseSensitiveHtmlSolution = `<ul>
    <li class="a">List01</li>
    <li class="A">List02</li>
    <li class="Ab">List03</li>
    <li class="bA">List04</li>
</ul>`;
const caseSensitiveCssSolution = `ul li[class] {
    font-size: 200%;
}

ul li[class^="a"] {
    background-color: lightgreen;
}

ul li[class^="a" i] {
    color: orange;
}`;

let exisOrValueHtmlSolutionEntry = exisOrValueHtmlSolution;
let exisOrValueCssSolutionEntry = exisOrValueCssSolution;

let substrMatchHtmlSolutionEntry = substrMatchHtmlSolution;
let substrMatchCssSolutionEntry = substrMatchCssSolution;

let caseSensitiveHtmlSolutionEntry = caseSensitiveHtmlSolution;
let caseSensitiveCssSolutionEntry = caseSensitiveCssSolution;

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    exisOrValue.value = "存在や値のセレクター";
    substrMatch.value = "部分文字列一致セレクター";
    caseSensitive.value = "大文字と小文字を区別";
    fillCode();
});

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

caseSensitive.addEventListener("click", () => {
    if (caseSensitive.value === "大文字と小文字を区別") {
        textareaHTML.value = caseSensitiveHtmlSolutionEntry;
        textareaCSS.value = caseSensitiveCssSolutionEntry;
        caseSensitive.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        caseSensitive.value = "大文字と小文字を区別";
    }
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);
