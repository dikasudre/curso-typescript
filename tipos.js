"use strict";
// Boolean
var contaPaga = false;
//Number
var idade = 23;
var avaliacao = 4.5;
//String
var nome = 'Vitor Farias';
//Array
var idades = [23, 28, 45, 32, 46];
var idades2 = [23, 345, 456, 46];
//Tuple
var jogadores;
jogadores = ['Vitor', 3, true];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusAprovacao = StatusAprovacao.Aprovado;
//Any
var retornoDaAPI = [123, 'Vitor', false];
var retornoDaAPI2 = {
//..........
};
//void
function printarNaTela(msg) {
    console.log(msg);
}
//Null e Undefined
var u = undefined;
var n = null;
//Object
function criar(objecto) {
    //....
}
criar({
    propriedade: 1,
});
// criar('Vitor') // da erro
//Never
function loopInifinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
//Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
//type funcionarios = Array<funcionario>;
var funcionarios = [{
        nome: 'Vitor',
        sobrenome: 'Farias',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario, nome);
    }
}
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Vitor',
    telefone1: '345689828',
};
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
// (<number>minhaIdade).toString();
//const input = document.getElementById("numero1") as HTMLInputElement;
var input = document.getElementById("numero1");
console.log(input.value);
