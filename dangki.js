const btn = document.getElementById('form-input');


btn.addEventListener("submit", function (e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password_input").value;
    const passwordagain = document.getElementById("password_again").value;

   
    if(username == "" && password == "" && email == "" && passwordagain == ""){
        alert("Dang ki khong thanh cong");
    }else{
        alert("Dang ki thanh cong");
    }
})