import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProblemsService } from '../../services/problems.service';
import { IProblem, Problem } from '../../../../../data/problems';

@Component({
  selector: 'app-single-problem',
  templateUrl: './single-problem.component.html',
  styleUrls: ['./single-problem.component.scss']
})
export class SingleProblemComponent implements OnInit {

  problemId: string;
  problem: IProblem = new Problem();
  constructor(
    route: ActivatedRoute,
    private problemsService: ProblemsService
  ) {
    route.params.subscribe(params => {
      this.problemId = params.id;

      this.problemsService.getProblem(this.problemId).subscribe(problem => {
        this.problem = problem;
      })
    })
  }

  ngOnInit() {
  }

}
