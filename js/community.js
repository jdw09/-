function openLoginPopup() {
    const left = window.screenX + 500; //팝업 창을 웹 브라우저 왼쪽 위에서부터 오른쪽으로 500px 이동해서 띄움
    const top = window.screenY + 100; //팝업 창을 웹 브라우저 왼쪽 위에서부터 아래쪽으로 100px 이동해서 띄움
    
    // 팝업 열기
    window.open( "../html/popup.html", 
    "로그인", 
    `width=500,height=450,left=${left},top=${top}`);
} 