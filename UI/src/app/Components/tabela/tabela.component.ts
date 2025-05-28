import { Component, Input } from '@angular/core';
import { ButtonsComponent } from "../buttons/buttons.component";
import { NgFor, NgIf } from '@angular/common';
import { Emprestimo, Livro, Usuario } from '../../Models/models';
import { LivroService } from '../../Services/livro.service';
import { UsuariosService } from '../../Services/usuarios.service';
import { EmprestimoService } from '../../Services/emprestimo.service';

@Component({
  selector: 'TabelaComponent',
  standalone: true,
  imports: [ButtonsComponent, NgFor, NgIf],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent {
  @Input() titulo = ''
  @Input() topicos : String[] = []
  @Input() livros : Livro[] = []
  @Input() usuarios : Usuario[] = []
  @Input() emprestimos : Emprestimo[] = []

  constructor(private livroService : LivroService, private usuarioService : UsuariosService, private emprestimoService : EmprestimoService){}

  editar(){

  }

  excluir(){

  }

  devolver(id : number){
    this.emprestimoService.putEmprestimo(id, 'DEVOLVIDO')
  }
}
