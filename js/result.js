function show_result() {
    const score = localStorage.getItem("score");
    const status = localStorage.getItem("status");

    console.log(score);
    console.log(status);

    document.querySelector(".score").innerHTML = score;
    if (status == "best") {
        document.querySelector("img").src = "../../images/imoji/Star.png"
        document.querySelector("body").style.backgroundColor = "#007FFF";
        document.querySelector(".description").innerHTML = "더 공부할 필요가 없네요!";
    } else if (status == "middle") {
        document.querySelector("body").style.backgroundColor = "#FF5D00";
        document.querySelector(".description").innerHTML = "조금 더 공부해봐요!"
    } else {
        document.querySelector("img").src = "../../images/imoji/Crying.png"
        document.querySelector("body").style.backgroundColor = "#FF5D00";
        document.querySelector(".description").innerHTML = "많은 공부가 필요합니다.";
    }
}

function restart() {
    const parent = window.parent;
    parent.location.reload();
}

function gotomain() {
    const parent = window.parent;
    parent.location.href = "../firstPage.html";
}