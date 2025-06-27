const question = {"온라인에서 본 인물 사진이 자연스러워 보이면, 실제 인물의 사진이라고 믿어도 된다.":"X", "SNS에 퍼지는 영상이 실제 정치인이 직접 발표한 것이 아닐 수도 있으니, 출처와 공식 발표 여부를 반드시 확인해야 한다.":"O", "공식 보도나 신뢰할 수 있는 기관의 발표 없이 인터넷에 떠도는 건강 관련 뉴스는 의심하고 확인해야 한다.":"O", "인터넷에서 많은 사람이 믿는 정보라도, 공식 기관의 발표가 없다면 사실로 단정해서는 안 된다.":"O", "광고 속 Before & After 사진만 보고 제품의 효과를 믿는 것은 위험하다.":"O", "인터넷 기사에 올라온 건강 정보라도 과학적 근거가 없으면 무조건 믿어선 안 된다.":"O", "뉴스 기사에 사용된 사진은 믿어도 된다.":"X", "유명인의 공식 SNS 계정에 올라온 글이라면 믿어도 된다.":"X"};

function loadQuestion() {
    let index = 0;
    let arr = Object.keys(question);
    let new_arr = [];
    for (let i = 0; i < 5; i ++){
        index = Math.floor(Math.random() * arr.length);
        new_arr.push({
            q: arr[index],
            a: question[arr[index]]
        })
        arr.splice(index, 1)
    }

    console.log(new_arr);
    new_arr = JSON.stringify(new_arr);
    localStorage.setItem("question", new_arr);
}

loadQuestion();

function show_question() {
    let question_arr = localStorage.getItem("question");
    question_arr = JSON.parse(question_arr);
    console.log(question_arr);

    let question_num = document.querySelector(".question_num").value;
    if (question_num < 5) {
        document.querySelector(".question").innerHTML = "Q." + question_arr[question_num].q;
        document.querySelector(".answer").value = question_arr[question_num].a;
        document.querySelector(".question_num").value = parseInt(question_num) + 1;
    } else {
        show_ending();
    }
}

function select(user_select) {
    let answer = document.querySelector(".answer").value;

    if (answer == user_select) {
        document.querySelector(".correct_count").value++;
        show_result("correct");
    } else {
        show_result("wrong");
    }
}

async function show_result(result) {
    if (result == "correct") {
        console.log("correct");
        document.querySelector(".correct").style.visibility = "visible";
        await sleep(1000);
        document.querySelector(".correct").style.visibility = "hidden";
    } else {
        console.log("wrong");
        document.querySelector(".wrong").style.visibility = "visible";
        await sleep(1000);
        document.querySelector(".wrong").style.visibility = "hidden";
    }

    show_question();
}

function show_ending() {
    const score = document.querySelector(".correct_count").value;

    console.log(parseInt(score) * 20);
    localStorage.clear();
    localStorage.setItem("score", 20 * parseInt(score))
    if (score >= 4) {
        localStorage.setItem("status", "best");
    } else if (score >1) {
        localStorage.setItem("status", "middle");
    } else {
        localStorage.setItem("status", "bad");
    }
    window.location.href = "./result.html";


}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}