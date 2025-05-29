import { Component, Input } from '@angular/core';
import { ButtonsComponent } from "../buttons/buttons.component";
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Emprestimo, Livro, Usuario } from '../../Models/models';
import { LivroService } from '../../Services/livro.service';
import { UsuariosService } from '../../Services/usuarios.service';
import { EmprestimoService } from '../../Services/emprestimo.service';
import { ModalComponent } from "../modal/modal.component";
import { InputsLabelComponent } from "../inputs-label/inputs-label.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'TabelaComponent',
  standalone: true,
  imports: [ButtonsComponent, NgFor, NgIf, ModalComponent, InputsLabelComponent, FormsModule, CommonModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent {
  @Input() titulo = ''
  @Input() topicos : String[] = []
  @Input() livros : Livro[] = []
  @Input() usuarios : Usuario[] = []
  @Input() emprestimos : Emprestimo[] = []
  modalLivro : Boolean = false
  modalUser : Boolean = false
  upLivro : Livro = {
    id: null,
    titulo: '',
    autor: '',
    editora: '',
    anoPublicacao: null
  }
  upUser : Usuario = {
    id: null,
    nome: '',
    matricula: null,
    curso: ''
  }

  constructor(private livroService : LivroService, private usuarioService : UsuariosService, private emprestimoService : EmprestimoService){}

  isVencido(empres: Emprestimo): boolean {
    if (!empres.dataDevolucaoPrevista) return false;

    const hoje = new Date();
    const dataPrevista = new Date(empres.dataDevolucaoPrevista);

    return dataPrevista < hoje && empres.status !== 'DEVOLVIDO';
  }

  editar(categoria : String, id : number){
    switch(categoria){
      case 'livro':
        this.modalLivro = true
        const livro = this.livros.find((livro) => livro.id == id);
        if (livro) {
          this.upLivro = { ...livro };
        }
        break;
      case 'user':
        this.modalUser = true
        const user = this.usuarios.find((user) => user.id == id);
        if (user) {
          this.upUser = { ...user };
        }
        break;
    }
  }

  excluir(categoria: string, id: number) {
    switch (categoria) {
      case 'livro':
        this.livroService.delLivro(id).subscribe({
          next: () => {
            this.livros = this.livros.filter(livro => livro.id !== id);
          },
          error: () => {
            alert('Livro em empréstimo não pode ser excluído.');
          }
        });
        break;

      case 'user':
        this.usuarioService.delUsuario(id).subscribe({
          next: () => {
            this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
          },
          error: () => {
            alert('Usuário com empréstimo ativo não pode ser excluído.');
          }
        });
        break;
      case 'empres':
        this.emprestimoService.delEmprestimo(id).subscribe({
          next: () => {
            this.emprestimos = this.emprestimos.filter(empres => empres.id !== id);
          },
          error: (err) => {
            const msg = err?.error?.message || 'Erro ao excluir empréstimo.';
            alert(msg);
          }
        });
        break;
    }
  }

  devolver(id: number) {
    this.emprestimoService.putEmprestimo(id, 'DEVOLVIDO').subscribe(() => {
      const emprestimo = this.emprestimos.find(e => e.id === id);
      if (emprestimo) {
        emprestimo.status = 'DEVOLVIDO';
      }
    });
  }


  cancelar(e : Boolean = false){
    this.modalLivro = e
    this.modalUser = e

    this.upLivro = {
      id: null,
      titulo: '',
      autor: '',
      editora: '',
      anoPublicacao: null
    }
    this.upUser = {
      id: null,
      nome: '',
      matricula: null,
      curso: ''
    }
  }

  updateLivro(){
    this.livroService.putLivro(this.upLivro).subscribe((livroAtualizado) => {
      const index = this.livros.findIndex(l => l.id === livroAtualizado.id);
      if (index !== -1) {
        this.livros[index] = livroAtualizado;
      }
      this.cancelar();
    });
  }

  updateUser() {
    this.usuarioService.putUsuario(this.upUser).subscribe((usuarioAtualizado) => {
      const index = this.usuarios.findIndex(u => u.id === usuarioAtualizado.id);
      if (index !== -1) {
        this.usuarios[index] = usuarioAtualizado;
      }
      this.cancelar();
    });
  }
}
