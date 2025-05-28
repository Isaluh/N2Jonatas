import { Component } from '@angular/core';
import { BaseComponent } from "../../Layouts/base/base.component";
import { TabelaComponent } from "../../Components/tabela/tabela.component";
import { Emprestimo } from '../../Models/models';
import { EmprestimoService } from '../../Services/emprestimo.service';
import { ModalComponent } from "../../Components/modal/modal.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'emprestimosView',
  standalone: true,
  imports: [BaseComponent, TabelaComponent, ModalComponent, NgIf],
  templateUrl: './emprestimos.component.html',
  styleUrl: './emprestimos.component.css'
})
export class EmprestimosComponent {
  topicos = ["Usuário", "Título", "Data Empréstimo", "Data Devolução", "Status", "Ações"]
  emprestimos : Emprestimo[] = []
  abrirModal = false
  
  constructor(private emprestimoService : EmprestimoService){}

  ngOnInit(){
    this.emprestimoService.getEmprestimos().subscribe((empres) => this.emprestimos = empres)
  }
}
