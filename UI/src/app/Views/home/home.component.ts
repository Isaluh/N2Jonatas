import { Component } from '@angular/core';
import { FichaCompletaComponent } from "../../Components/ficha-completa/ficha-completa.component";
import { FichaButtonComponent } from "../../Components/ficha-button/ficha-button.component";
import { LivroService } from '../../Services/livro.service';
import { UsuariosService } from '../../Services/usuarios.service';
import { EmprestimoService } from '../../Services/emprestimo.service';
import { Emprestimo } from '../../Models/models';

@Component({
  selector: 'homeView',
  standalone: true,
  imports: [FichaCompletaComponent, FichaButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listDescart : Emprestimo[] = []
  numLivros = 0
  numUser = 0
  numEmprestimo = 0
  numVencido = 0

  constructor(private livroService : LivroService, private usuarioService : UsuariosService, private emprestimoService : EmprestimoService){}

  ngOnInit(){
    this.livroService.getLivros().subscribe((livro) => this.numLivros = livro.length)

    this.usuarioService.getUsuarios().subscribe((user) => this.numUser = user.length)

    this.emprestimoService.getEmprestimos().subscribe((empres) => {this.numEmprestimo = empres.length; this.listDescart = empres; this.calcularVencidos()})
  }

  calcularVencidos(){
    // this.listDescart.filter((x) => x.dataDevolucaoPrevista)
  }
}
