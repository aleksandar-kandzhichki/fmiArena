import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProblem, IProblemPreview } from '../../../../../data/problems';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  constructor(private http: HttpClient) { }

  getProblem(name: string) {
    return this.http.get<IProblem>(`/api/problems/${name}`);
  }

  allProblems() {
    return this.http.get<IProblemPreview[]>(`/api/problems/`);
  }

  isFetched( problem: IProblem = null) {
    return !!problem.content;
  }

  async fetchAndUpdate(problem: IProblem, toUpdate: IProblem[][]) {
    if(this.isFetched(problem)) return;
    
    let fetched = await this.getProblem(problem.name).toPromise();

    toUpdate.forEach(arr => {
      let updateIndex = arr.findIndex(p => p.name == problem.name);
      Object.keys(fetched).forEach(prop => arr[updateIndex][prop] = fetched[prop]);
    })
  }
}
