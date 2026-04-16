 let users = JSON.parse(localStorage.getItem("users")) || [];
 console.log(users);

let formRegister = document.getElementById("form-register");
let email = document.getElementById("email");
let password = document.getElementById("password");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let rePassword = document.getElementById("re-password")

formRegister.addEventListener("submit", function(event) {
    event.preventDefault();
    let emailInput = email.value.trim(); 
    let passwordInput = password.value.trim(); 
    let firstnameInput = firstName.value.trim();
    let lastnameInput = lastName.value.trim();
    let repasswordInput = rePassword.value.trim();



     let checkEmail = users.some(function(u) {
         return u.email === emailInput;
     });


      if (firstnameInput === "") {
         alert("Họ và tên đệm không được để trống!");
         return;
     }  else if (lastnameInput === "") {
         alert("Tên không được để trống!");
         return;
     } else if (checkEmail == true) {
         alert("Email trùng, không đăng ký được!");
         return;
     } else if (emailInput === "") {
         alert("Email không được để trống!");
         return;
     } else if (passwordInput === "") {
         alert("Mật khẩu không được để trống!");
         return;
     } else if (passwordInput.length < 8) {
        alert("Mật khẩu tối thiểu 8 ký tự");
        return;
     }  else if (repasswordInput === "") {
         alert("Pasword không được để trống!");
         return;
     } else if (repasswordInput != passwordInput) {
        alert("Mật khẩu không trùng khớp");
        return;
     }
    
    let newUser = {
        firstnameInput,
        lastnameInput,
        email: emailInput,
         password: passwordInput,
         rePassword: repasswordInput
     }

     users.push(newUser);

     localStorage.setItem("users", JSON.stringify(users));
     alert("Dang ky thanh cong!");
     window.location.href = "./login.html";
 });