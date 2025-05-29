import { Component } from '@angular/core';
import { BaseComponent } from "../../Layouts/base/base.component";
import { TabelaComponent } from "../../Components/tabela/tabela.component";
import { LivroService } from '../../Services/livro.service';
import { Livro } from '../../Models/models';
import { ModalComponent } from "../../Components/modal/modal.component";
import { InputsLabelComponent } from "../../Components/inputs-label/inputs-label.component";
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'livrosView',
  standalone: true,
  imports: [BaseComponent, TabelaComponent, ModalComponent, InputsLabelComponent, NgIf, FormsModule],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.css'
})
export class LivrosComponent {
  topicos = ["Título", "Autor", "Editora", "Ano", "Ações"]
  livros : Livro[] = []
  addLivro : Livro = {
    id: null,
    titulo: '',
    autor: '',
    editora: '',
    anoPublicacao: null
  }
  abrirModal : Boolean = false

  constructor(private livroService : LivroService){}

  ngOnInit(){
    this.carregarLivros()
  }

  carregarLivros(){
    this.livroService.getLivros().subscribe((livro) => this.livros = livro)
  }

  cancelar(event : Boolean = false){
    this.abrirModal = event
    this.addLivro = {
      id: 0,
      titulo: '',
      autor: '',
      editora: '',
      anoPublicacao: 0
    }
  }

  criarLivro(){
    this.livroService.postLivro(this.addLivro).subscribe(() => {this.carregarLivros(); this.cancelar()})
  }
}
