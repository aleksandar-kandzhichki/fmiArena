import { Component, OnInit } from '@angular/core';
import { AllTopics } from '../../../../../data/topics'
import { problems, Problem } from '../../../../../data/problems';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent implements OnInit {

  selectedTopics: number[] = [];
  AllTopics = AllTopics;
  allProblems = problems;
  filteredProblems: Problem[] = [];

  constructor() { }

  ngOnInit() {
  }

  changeSelectedTopics(topics: number[]) {
    this.selectedTopics = topics;

    this.getProblems();
  }

  getProblems() {
    this.filteredProblems = this.allProblems.filter(problem => this.selectedTopics.some(selectedTopic => problem.topics.indexOf(selectedTopic) >= 0));
  }
}
