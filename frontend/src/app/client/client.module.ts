import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { clientRoutes } from './client.router';
import { LayoutComponent } from './components/layout/layout.component';
import { ProblemsComponent } from './components/problems/problems.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { SelectProblemsComponent } from './components/select-problems/select-problems.component';
import { SingleProblemComponent } from './components/single-problem/single-problem.component';
import { HttpClient } from '@angular/common/http';
import { MatTabsModule, MatButtonModule, MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { AddProblemComponent } from './components/add-problem/add-problem.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    ProblemsComponent,
    CompetitionsComponent,
    SelectProblemsComponent,
    SingleProblemComponent,
    AddProblemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(
      clientRoutes
    ),
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [
    HttpClient
  ]
})
export class ClientModule { }
