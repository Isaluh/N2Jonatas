import { Component } from '@angular/core';
import { BaseComponent } from "../../Layouts/base/base.component";
import { Usuario } from '../../Models/models';
import { UsuariosService } from '../../Services/usuarios.service';
import { TabelaComponent } from "../../Components/tabela/tabela.component";
import { ModalComponent } from "../../Components/modal/modal.component";
import { InputsLabelComponent } from "../../Components/inputs-label/inputs-label.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'usuariosView',
  standalone: true,
  imports: [BaseComponent, TabelaComponent, ModalComponent, InputsLabelComponent, NgIf],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  topicos = ["Nome", "Matrícula", "Curso", "Ações"]
  usuarios : Usuario[] = []
  abrirModal = false

  constructor(private usuarioService : UsuariosService){}

  ngOnInit(){
    this.usuarioService.getUsuarios().subscribe((user) => this.usuarios = user)
  }
}
