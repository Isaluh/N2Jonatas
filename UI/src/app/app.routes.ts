import { Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { LivrosComponent } from './Views/livros/livros.component';
import { UsuariosComponent } from './Views/usuarios/usuarios.component';
import { EmprestimosComponent } from './Views/emprestimos/emprestimos.component';

export const routes: Routes = [
    {path: '', component : HomeComponent},
    {path: 'livros', component : LivrosComponent},
    {path: 'usuarios', component : UsuariosComponent},
    {path: 'emprestimos', component : EmprestimosComponent}
];
