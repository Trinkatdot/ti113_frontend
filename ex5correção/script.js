let btnRegister =
    document.querySelector(".btnRegister")
btnRegister.addEventListener("click", () => {

    let username = document.querySelector("#txtUsername").value;
    let email = document.querySelector("#txtEmail").value;
    let password = document.querySelector("#txtPassword").value;
    let ConfirmPassword = document.querySelector("#txtConfirmPassword").value;

    let listaUsuarios = [];
    
    if (username.trim() !== ""
        && email.trim() !== ""
        && password.trim() !== ""
        && ConfirmPassword.trim() !== "") {
            alert("Todos os campos devem ser preenchidos");
            return;
    }

    if (password.trim() !== ConfirmPassword.trim()) {
        alert("As Senhas não correspondem.");
        return;
    }

    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));

    if(listaUsuarios.length > 0) {
        if (listaUsuarios.some(user => user.email == email)) {
            alert('Email já cadastrado');
            return;
        }
    }

});