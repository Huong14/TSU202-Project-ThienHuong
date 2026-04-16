let formLogin = document.getElementById("login-input");
let users = JSON.parse(localStorage.getItem("users")) || [];

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    let emailInput = formLogin.email.value.trim();
    let passwordInput = formLogin.password.value.trim();

    let checkLogin = users.some((u) => {
        return u.email === emailInput && u.password === passwordInput;
    });

    if (checkLogin == true) {
        let isLogin = true;
        localStorage.setItem("isLogin", JSON.stringify(isLogin));
        alert("Dang nhap thanh cong!");
        window.location.href = "../index.html";
    } else {
        alert("Email hoặc mật khẩu không đúng!")
    }
    
});