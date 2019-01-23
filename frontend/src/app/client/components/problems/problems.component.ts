import { Component, OnInit } from '@angular/core';
import { AllTopics } from '../../../../../../data/topics'
import { IProblem } from '../../../../../../data/problems';
import { ProblemsService } from '../../services/problems.service';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent implements OnInit {

  selectedTopics: number[] = [];
  AllTopics = AllTopics;
  allProblems: IProblem[];
  filteredProblems: IProblem[] = [];

  constructor(private problemsService: ProblemsService) { }

  async ngOnInit() {
    this.allProblems = (await this.problemsService.allProblems().toPromise()) as IProblem[];

    this.getProblems();
  }

  changeSelectedTopics(topics: number[]) {
    this.selectedTopics = topics;

    this.getProblems();
  }

  getProblems() {
    if (this.selectedTopics && this.selectedTopics.length > 0)
      this.filteredProblems = this.allProblems.filter(problem => this.selectedTopics.some(selectedTopic => problem.topics.indexOf(selectedTopic) >= 0));
    else this.filteredProblems = JSON.parse(JSON.stringify(this.allProblems));
  }

  // check if problem is fetched, returns it's index in all problems
  isFetched(name: string, problem: IProblem = null) {
    if (problem) return this.problemsService.isFetched(problem);

    let index = this.allProblems.findIndex(p => p.name == name);
    return this.problemsService.isFetched(this.allProblems[index]);
  }

  async fetchProblem(problem: IProblem) {
    return await this.problemsService.fetchAndUpdate(problem, [this.allProblems, this.filteredProblems]);
  }
}
