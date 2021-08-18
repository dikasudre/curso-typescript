// Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 23;
const avaliacao: number =4.5;

//String
const nome: string = 'Vitor Farias';

//Array
const idades: number[] = [23, 28, 45, 32, 46];
const idades2: Array<number>= [23, 345, 456, 46];

//Tuple
let jogadores: [string, number, boolean];
jogadores = ['Vitor', 3, true];

//Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoDaAPI: any[]= [123, 'Vitor', false];
const retornoDaAPI2: any = {
    //..........
}

//void
function printarNaTela(msg: string): void {
    console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar(objecto: object) {
    //....
}
criar({
    propriedade: 1,
})
// criar('Vitor') // da erro


//Never
function loopInifinito(): never {
    while (true) { }
}


function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro('Algo falhou');
}

//Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);

//Alias
type funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

//type funcionarios = Array<funcionario>;
const funcionarios: funcionario[] = [{
    nome: 'Vitor',
    sobrenome: 'Farias',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionário: ', funcionario, nome);
    }
}

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}
const contato: Contato = {
    nome: 'Vitor',
    telefone1: '345689828',
} 

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
// (<number>minhaIdade).toString();

//const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);


