import { Component, OnInit, Input } from '@angular/core';
import { IProblem } from '../../../../../../data/problems';
import { AllTopics } from '../../../../../../data/topics';
import { Sciences } from '../../../../../../data/science';

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.scss']
})
export class AddProblemComponent implements OnInit {

  public AllTopics = AllTopics;
  public AllSciences = Sciences;
  problem: IProblem = {
    name: '',
    content: '',
    restrains: { memory: '', time: '' }
  } as IProblem

  @Input() problemScience: number;
  @Input() problemTopics: number[];

  ngOnInit() {
    this.problem.science = this.problemScience;
    this.problem.topics = this.problemTopics;
  }

}
