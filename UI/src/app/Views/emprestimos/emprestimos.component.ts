import { Component } from '@angular/core';
import { BaseComponent } from "../../Layouts/base/base.component";
import { TabelaComponent } from "../../Components/tabela/tabela.component";
import { Emprestimo, Livro, Usuario } from '../../Models/models';
import { EmprestimoService } from '../../Services/emprestimo.service';
import { ModalComponent } from "../../Components/modal/modal.component";
import { NgIf } from '@angular/common';
import { UsuariosService } from '../../Services/usuarios.service';
import { LivroService } from '../../Services/livro.service';
import { InputSelectButtonComponent } from "../../Components/input-select-button/input-select-button.component";
import { FormsModule } from '@angular/forms';
import { kMaxLength } from 'buffer';

@Component({
  selector: 'emprestimosView',
  standalone: true,
  imports: [BaseComponent, TabelaComponent, ModalComponent, NgIf, InputSelectButtonComponent, FormsModule],
  templateUrl: './emprestimos.component.html',
  styleUrl: './emprestimos.component.css'
})
export class EmprestimosComponent {
  topicos = ["Usuário", "Título", "Data Empréstimo", "Data Devolução", "Status", "Ações"]
  emprestimos : Emprestimo[] = []
  livros : Livro[] = []
  usuarios : Usuario[] = []
  abrirModal : Boolean = false
  addEmpres : Emprestimo = {
    id: null,
    livro: {
      id: null,
      titulo: '',
      autor: '',
      editora: '',
      anoPublicacao: null
    },
    usuario: {
      id: null,
      nome: '',
      matricula: null,
      curso: ''
    },
    dataEmprestimo: '',
    dataDevolucaoPrevista: '',
    status: ''
  }
  
  constructor(private livroService : LivroService, private usuarioService : UsuariosService, private emprestimoService : EmprestimoService){}

  ngOnInit(){
    this.carregarDados()
  }

  carregarDados(){
    this.emprestimoService.getEmprestimos().subscribe((empres) => this.emprestimos = empres)
    this.livroService.getLivros().subscribe((livro) => this.livros = livro)
    this.usuarioService.getUsuarios().subscribe((user) => this.usuarios =  user)
  }

  cancelar(event : Boolean = false){
    this.abrirModal = event
    this.addEmpres = {
      id: null,
      livro: {
        id: null,
        titulo: '',
        autor: '',
        editora: '',
        anoPublicacao: null
      },
      usuario: {
        id: null,
        nome: '',
        matricula: null,
        curso: ''
      },
      dataEmprestimo: '',
      dataDevolucaoPrevista: '',
      status: ''
    }
  }

  criarEmprestimo() {
    const emprestimoSimplificado = {
      livro: { id: this.addEmpres.livro.id },
      usuario: { id: this.addEmpres.usuario.id }
    };

    console.log(emprestimoSimplificado);

    this.emprestimoService.postEmprestimo(emprestimoSimplificado).subscribe(() => {
      this.carregarDados();
      this.cancelar();      
    });
  }


}
