import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Aluno } from '../domain/aluno';

@Injectable()
export class AlunoService {

  constructor(private http : HttpClient) { }

  getAlunos() : Observable<Aluno[]>{

    return this.http.get<Aluno[]>('http://dados.iffarroupilha.edu.br/api/v1/alunos.json')
  }

}
