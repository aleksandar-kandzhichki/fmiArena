import { IProblem } from './problems'
import { IUser } from './IUser'

export interface ICompetition {
    name: string;
    problems: IProblem[];
    competitors: IUser[];
    solutions: Object[];
}