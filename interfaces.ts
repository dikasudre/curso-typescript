interface Usuario {
    nome: String;
    email: String;
    address?: String;
}

function getUser(): Usuario {
    return {
        nome: 'Vitor',
        email: 'vitor@vitor.com'
    }
}

function setUser(usuario: Usuario) {
    //...
}