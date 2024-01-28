const btn = document.getElementById('form-input');


btn.addEventListener("submit", function (e){
    e.preventDefault();
    
    const username = document.getElementById("email_input").value;
    const password = document.getElementById("password_input").value;
    
   
    if(username == "" && password == "" ){
        alert("Dang nhap khong thanh cong");
    }else{
        alert("Dang nhap thanh cong");
    }
})