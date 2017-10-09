import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-high-mathematics',
  templateUrl: './app.highmathematics.html'
})

export class HighMathematicsComponent {
  res = 0;
  nores = 0;

  public result1: 3;
  public answer1: number;

  registerForm: FormGroup;
  searchControl1 = new FormControl();

  public Func() {
    if (this.answer1 == 4) {
      this.res += 1;
      console.log('Правильно');
    } else {
      this.nores += 1;
      console.log('Неправильно');
    }

    console.log( );
    return false
  }

  ngOnInit() {
    this.searchControl1.valueChanges.subscribe(value => {
      console.log(value);
      this.answer1 = value;
    });
  }
}
