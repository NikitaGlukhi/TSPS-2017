import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-high-mathematics',
  templateUrl: './app.highmathematics.html'
})

export class HighMathematicsComponent implements OnInit {
  private res = 0;
  private no_res = 0;

  private answer1: number;
  private answer2: number;
  private answer3: number;
  private answer4: number;
  private answer5: number;
  private answer6: number;
  private answer7: number;

  registerForm: FormGroup;
  searchControl1 = new FormControl();
  searchControl2 = new FormControl();
  searchControl3 = new FormControl();
  searchControl4 = new FormControl();
  searchControl5 = new FormControl();
  searchControl6 = new FormControl();
  searchControl7 = new FormControl();

  constructor (private router: Router) { }

  public Func() {
    if (this.answer1 == 4) {
      this.res += 1;
      console.log('Правильно');
    } else {
      this.no_res += 1;
      console.log('Неправильно');
    }

    if (this.answer2 == 1) {
      this.res += 1;
      console.log('Правильно');
    } else {
      this.no_res += 1;
      console.log('Неправильно');
    }

    if (this.answer3 == 1) {
      this.res += 1;
      console.log('Правильно');
    } else {
      this.no_res += 1;
      console.log('Неправльно');
    }

    if (this.answer4 == 3) {
      this.res += 1;
      console.log('Правильно');
    } else {
      this.no_res += 1;
      console.log('Неправильно');
    }

    if (this.answer5 == 2) {
      this.res += 1;
      console.log('Правильно')
    } else {
      this.no_res += 1;
      console.log('Неправильно');
    }

    if (this.answer6 == 4) {
      this.res += 1;
      console.log('Правильно');
    } else {
      this.no_res += 1;
      console.log('Неправильно');
    }

    if (this.answer7 == 5) {
      this.res += 1;
      console.log('Правильно');
    } else {
      this.no_res += 1;
      console.log('Неправильно');
    }

    if (this.res >= 4) {
      alert('Тест сдан!');
    } else {
      alert('Тест не сдан');
    }

   this.router.navigate(['/app-high-mathematics-results', this.res, this.no_res]);

    console.log( );
    return false
  }

  ngOnInit() {
    this.searchControl1.valueChanges.subscribe(value => {
      console.log(value);
      this.answer1 = value;
    });
    this.searchControl2.valueChanges.subscribe(value => {
      console.log(value);
      this.answer2 = value;
    });
    this.searchControl3.valueChanges.subscribe(value => {
      console.log(value);
      this.answer3 = value;
    });
    this.searchControl4.valueChanges.subscribe(value => {
      console.log(value);
      this.answer4 = value;
    });
    this.searchControl5.valueChanges.subscribe(value => {
      console.log(value);
      this.answer5 = value;
    });
    this.searchControl6.valueChanges.subscribe(value => {
      console.log(value);
      this.answer6 = value;
    });
    this.searchControl7.valueChanges.subscribe(value => {
      console.log(value);
      this.answer7 = value;
    });
  }
}

