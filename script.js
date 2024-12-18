const select = document.querySelector("select");
const iframe = document.querySelector("iframe");

select.addEventListener("change", setIframe)

function setIframe() {
    const choice = select.value;

    if (choice === "default/index.html") {
        iframe.src = this.value;
        iframe.style.height = "600px";
    } else if (choice === "exis-or-value/index.html") {
        iframe.src = this.value;
        iframe.style.height = "900px";
    } else if (choice === "substr-match/index.html") {
        iframe.src = this.value;
        iframe.style.height = "850px";
    } else if (choice === "case-sensitive/index.html") {
        iframe.src = this.value;
        iframe.style.height = "900px";
    } else {
        iframe.src = "";
    }
}