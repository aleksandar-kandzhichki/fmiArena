import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { ProblemsComponent } from "./components/problems/problems.component";
import { CompetitionsComponent } from "./components/competitions/competitions.component";
import { SingleProblemComponent } from "./components/single-problem/single-problem.component";

export const clientRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'problems/:competitionId',
                component: SingleProblemComponent
            },
            {
                path: 'problems',
                component: ProblemsComponent
            },
            {
                path: 'competitions',
                component: CompetitionsComponent
            },
            {
                path: '',
                component: HomeComponent
            },
        ]
    }
]