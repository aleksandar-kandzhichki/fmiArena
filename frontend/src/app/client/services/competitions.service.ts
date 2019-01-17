import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICompetition } from '../../../../../data/ICompetition';

@Injectable({
    providedIn: 'root'
})
export class CompetitionsService {

    constructor(private http: HttpClient) { }

    getCompetitions() {
        return this.http.get<ICompetition[]>(`/api/competitions/`);
    }

    getCompetition(id: string) {
        return this.http.get<ICompetition>(`/api/competitions/${id}`);
    }
}
