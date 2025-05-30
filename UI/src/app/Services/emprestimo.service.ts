import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emprestimo } from '../Models/models';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  public static API_url: string = "http://localhost:8080/emprestimos";

  constructor(private httpClient : HttpClient) {}

  getEmprestimos(){
    return this.httpClient.get<Emprestimo[]>(EmprestimoService.API_url)
  }

  postEmprestimo(emprestimo : object){
    return this.httpClient.post(EmprestimoService.API_url+'/add', emprestimo)
  }

  putEmprestimo(id : number, status : String){
    return this.httpClient.put<Emprestimo>(EmprestimoService.API_url+`/status/${id}/${status}`, null)
  }

  delEmprestimo(id : number){
    return this.httpClient.delete<Emprestimo>(EmprestimoService.API_url+`/${id}`)
  }
}
