let btnRegister =
    document.querySelector(".btnRegister")
btnRegister.addEventListener("click", () => {

    let username = document.querySelector("#txtUsername").value;
    let email = document.querySelector("#txtEmail").value;
    let password = document.querySelector("#txtPassword").value;
    let ConfirmPassword = document.querySelector("#txtConfirmPassword").value;

    if (username.trim() !== ""
        && email.trim() !== ""
        && password.trim() !== ""
        && ConfirmPassword.trim() !== "") {
            alert("Todos os campos devem ser preenchidos")
    }

});