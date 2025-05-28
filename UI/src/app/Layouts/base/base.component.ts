import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonsComponent } from "../../Components/buttons/buttons.component";
import { IconChangeComponent } from "../../Icons/icon-change/icon-change.component";
import { RouterLink } from '@angular/router';
import { LivroService } from '../../Services/livro.service';
import { UsuariosService } from '../../Services/usuarios.service';
import { EmprestimoService } from '../../Services/emprestimo.service';

@Component({
  selector: 'BaseLayout',
  standalone: true,
  imports: [ButtonsComponent, IconChangeComponent, RouterLink],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {
  @Input() titulo = '';
  @Input() icon = '';
  @Input() textButton = '';
  @Input() descricao = ''
  @Input() variantColor = ''
  @Output() abrirModalEvent = new EventEmitter()

  constructor(private livroService : LivroService, private usuarioService : UsuariosService, private emprestimoService : EmprestimoService){}

  abrirModal(){
    this.abrirModalEvent.emit(true)
  }
}
