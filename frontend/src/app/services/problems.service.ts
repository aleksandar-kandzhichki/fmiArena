import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProblem } from '../../../../data/problems';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  constructor(private http: HttpClient) { }

  getProblem(id: string) {
    return this.http.get<IProblem>(`/api/problems/${id}`);
  }
}
