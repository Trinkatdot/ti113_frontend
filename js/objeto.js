let botao = document.querySelector("#btnmostrar");
botao.addEventListener("click", mostrarvalores);

function mostrarvalores() {
    let pessoa = {};
    pessoa.nome = document.querySelector('#txtnome').value;
    pessoa.altura = parseFloat(document.querySelector('#txtaltura').value);
    pessoa.idade = parseInt(document.querySelector('#txtidade').value);
    pessoa.datanascimento = document.querySelector('#txtdatanascimento').value;



    let mensagem = `
    <br><br>
    O nome digitado é <strong> ${pessoa.nome} </strong> <br>
    A altura informada é <strong> ${pessoa.altura.toFixed(2)} </strong> <br>
    A idade informada é <strong> ${pessoa.idade} </strong> <br>
    A data de nascimento é <strong> ${pessoa.datanascimento} </strong> `;



  let div = document.querySelector("#resultado");
    div.innerHTML = mensagem;

}



// let pessoa = {};
// pessoa.nome = prompt("informe nome:");
// pessoa.altura = parseFloat(prompt("informe altura:"));
// pessoa.idade = parseInt(prompt("informe idade:"));
// pessoa.datanascimento = prompt(
//     "informe data nascimento (dd/MM/yyyy):");

//     console.log(pessoa)
// alert(
//     `O nome digitado é ${pessoa.nome}
//     A altura informada é ${pessoa.altura.toFixed(2)}
//     A idade informada é ${pessoa.idade}
//     A data de nascimento é ${pessoa.datanascimento}`);
