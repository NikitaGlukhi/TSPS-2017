import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { SubjectsComponent } from './subjects';

@Injectable()

export class SubjectsService {
  private highMathUrl = 'http://localhost:3001/api/subjects/high';
  private discreteMathUrl = 'http://localhost:3001/api/subjects/discrete';

  constructor(private http: Http, private authHttp: AuthHttp) { }
  getHighMath() {
    return this.http
      .get(this.highMathUrl)
      .toPromise()
      .then(response => response.json() as SubjectsComponent)
      .catch(this.handleError);
  }

  getDiscreteMath() {
    return this.http
      .get(this.discreteMathUrl)
      .toPromise()
      .then(response => response.json() as SubjectsComponent)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
