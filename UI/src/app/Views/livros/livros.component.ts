import { Component } from '@angular/core';
import { BaseComponent } from "../../Layouts/base/base.component";
import { TabelaComponent } from "../../Components/tabela/tabela.component";
import { LivroService } from '../../Services/livro.service';
import { Livro } from '../../Models/models';
import { ModalComponent } from "../../Components/modal/modal.component";
import { InputsLabelComponent } from "../../Components/inputs-label/inputs-label.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'livrosView',
  standalone: true,
  imports: [BaseComponent, TabelaComponent, ModalComponent, InputsLabelComponent, NgIf],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.css'
})
export class LivrosComponent {
  topicos = ["Título", "Autor", "Editora", "Ano", "Ações"]
  livros : Livro[] = []
  abrirModal = false

  constructor(private livroService : LivroService){}

  ngOnInit(){
    this.livroService.getLivros().subscribe((livro) => this.livros = livro)
  }
}
