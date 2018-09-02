import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbar, MatTabGroup, MatTab, MatTabsModule, MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutes } from './app.router';
import { LayoutComponent } from './components/layout/layout.component';
import { ProblemsComponent } from './components/problems/problems.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { SelectProblemsComponent } from './components/select-problems/select-problems.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    ProblemsComponent,
    CompetitionsComponent,
    SelectProblemsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
