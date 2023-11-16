function clearChat() {
    document.querySelector('#Cnt').innerHTML = "";
}

function changeCntSize() {
    if (document.querySelector("#cntCtrlWidthInp").value === "") {
        document.querySelector("main").style.width = "100%";
    } else {
        document.querySelector("main").style.width = document.querySelector("#cntCtrlWidthInp").value + "px";
    }

    if (document.querySelector("#cntCtrlHeightInp").value === "") {
        document.querySelector("main").style.height = "calc(100% - 25px - var(--spacing))";
    } else {
        document.querySelector("main").style.height = document.querySelector("#cntCtrlHeightInp").value + "px";
    }
}