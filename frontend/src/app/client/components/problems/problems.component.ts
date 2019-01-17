import { Component, OnInit } from '@angular/core';
import { AllTopics } from '../../../../../../data/topics'
import { problems, IProblem } from '../../../../../../data/problems';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent implements OnInit {

  selectedTopics: number[] = [];
  AllTopics = AllTopics;
  allProblems = problems;
  filteredProblems: IProblem[] = [];

  constructor() { }

  ngOnInit() {
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
}
