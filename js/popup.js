function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user && pass) {
        alert(user + "님 환영합니다!");
        window.close();
    } else {
        alert("아이디와 비밀번호를 입력하세요.");
    }
}
