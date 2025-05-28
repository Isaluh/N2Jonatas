export interface Livro{
    id : number,
    titulo : String,
    autor : String,
    editora : String,
    anoPublicacao : number
}

export interface Usuario{
    id : number,
    nome : String,
    matricula : number,
    curso : String
}

export interface Emprestimo{
    id : number,
    livro : Livro,
    usuario : Usuario,
    dataEmprestimo : String,
    dataDevolucaoPrevista : String,
    status : String
}