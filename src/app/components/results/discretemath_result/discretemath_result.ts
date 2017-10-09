import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-discrete-mathematics-results',
  templateUrl: './app,discretemath_result.html'
})

export class DiscreteMathResultsComponent implements OnInit {
  private res_dm: number;
  private no_res_dm: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.res_dm = +params['res_dm'];
      this.no_res_dm = +params['no_res_dm'];
    })
  }
}
