import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../Models/models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public static API_url: string = "http://localhost:8080/usuarios";

  constructor(private httpClient : HttpClient) {}

  getUsuarios(){
    return this.httpClient.get<Usuario[]>(UsuariosService.API_url)
  }

  postUsuario(usuario : Usuario){
    return this.httpClient.post<Usuario>(UsuariosService.API_url+'/add', usuario)
  }

  putUsuario(usuario : Usuario){
    return this.httpClient.put<Usuario>(UsuariosService.API_url+'/update', usuario)
  }

  delUsuario(id : number){
    return this.httpClient.delete<Usuario>(UsuariosService.API_url+`/${id}`)
  }
}
