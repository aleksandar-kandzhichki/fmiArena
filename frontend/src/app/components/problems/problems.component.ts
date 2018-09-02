import { Component, OnInit } from '@angular/core';
import { AllTopics } from '../../../../../data/topics'

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent implements OnInit {

  selectedTopics: number[] = [];
  AllTopics = AllTopics

  constructor() { }

  ngOnInit() {
  }

}
