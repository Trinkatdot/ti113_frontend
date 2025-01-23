
let pessoa = {};
pessoa.nome = prompt("informe nome:");
pessoa.altura = parseFloat(prompt("informe altura:"));
pessoa.idade = parseInt(prompt("informe idade:"));
pessoa.datanascimento = prompt(
    "informe data nascimento (dd/MM/yyyy):");

    console.log(pessoa)
alert(
    `O nome digitado é ${pessoa.nome}
    A altura informada é ${pessoa.altura.toFixed(2)}
    A idade informada é ${pessoa.idade}
    A data de nascimento é ${pessoa.datanascimento}`);
