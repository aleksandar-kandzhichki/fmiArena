import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { ProblemsComponent } from "./components/problems/problems.component";

export const appRoutes: Routes = [
    {
        path: '**',
        component: LayoutComponent,
        children: [
            {
                path: 'problems',
                component: ProblemsComponent
            },
            {
                path: '',
                component: HomeComponent
            },
        ]
    }
]