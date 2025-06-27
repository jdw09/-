function openLoginPopup() {
    const left = window.screenX + 500;
    const top = window.screenY + 100;
    
    window.open( "../html/popup.html", 
    "로그인", 
    `width=500,height=450,left=${left},top=${top}`);
} 