"use strict";
var Data = /** @class */ (function () {
    //public dia: number;
    //mes: number;
    //ano: number;
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        //this.dia = dia;
        //this.mes = mes;
        //this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 2021);
console.log(data.dia);
var data2 = new Data(1, 1);
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 220; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = object;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        // FACO AS VALIDAÇÕES DE ACELERAÇÃO E FRENAGEM
        //this.velocidadeAtual = xxx
    };
    Carro.prototype.acelerar = function () {
        this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar();
