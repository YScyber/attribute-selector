const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const caseSensitive = document.getElementById("caseSensitive");
const reset = document.getElementById("reset");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const caseSensitiveHtmlSolution = `<h2>大文字と小文字を区別</h2>

<ul>
    <li class="a">List01</li>
    <li class="A">List02</li>
    <li class="Ab">List03</li>
    <li class="bA">List04</li>
</ul>
`;
const caseSensitiveCssSolution = `ul {
    list-style-type: none;
}

ul li {
    padding: 5px;
}

ul li[class] {
    font-size: 200%;
}

ul li[class^="a"] {
    background-color: lightgreen;
}

ul li[class^="a" i] {
    color: orange;
}
`;

let caseSensitiveHtmlSolutionEntry = caseSensitiveHtmlSolution;
let caseSensitiveCssSolutionEntry = caseSensitiveCssSolution;

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

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    caseSensitive.value = "大文字と小文字を区別";
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);