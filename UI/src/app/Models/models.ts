export interface Livro{
    id : number | null,
    titulo : String,
    autor : String,
    editora : String,
    anoPublicacao : number | null
}

export interface Usuario{
    id : number | null,
    nome : String,
    matricula : number | null,
    curso : String
}

export interface Emprestimo{
    id : number | null,
    livro : Livro,
    usuario : Usuario,
    dataEmprestimo : string,
    dataDevolucaoPrevista : string,
    status : String
}