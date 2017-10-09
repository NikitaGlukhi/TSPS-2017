import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-high-mathematics-results',
  templateUrl: './app.highmath_results.html'
})

export class HighMathResultsComponent implements OnInit {
  private res: number;
  private no_res: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.res = +params['res'];
      this.no_res = +params['no_res'];
    })
  }
}
