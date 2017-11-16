import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discrete-mathematics',
  templateUrl: './app.discretemathematics.html',
})

export class DiscretemathematicsComponent implements OnInit {
  private res_dm = 0;
  private no_res_dm = 0;

  private answer8: number;
  private answer9: number;
  private answer10: number;
  private answer11: number;
  private answer12: number;

  registerForm: FormGroup;
  searchControl8 = new FormControl();
  searchControl9 = new FormControl();
  searchControl10 = new FormControl();
  searchControl11 = new FormControl();
  searchControl12 = new FormControl();

  constructor (private router: Router) { }

  public Func1() {
    if (this.answer8 == 2) {
      this.res_dm += 1;
      console.log('Правильно');
    } else {
      this.no_res_dm += 1;
      console.log('Неправльно');
    }

    if (this.answer9 == 5) {
      this.res_dm += 1;
      console.log('правильно');
    } else {
      this.no_res_dm += 1;
      console.log('Неправильно');
    }

    if (this.answer10 == 3) {
      this.res_dm += 1;
      console.log('Правильно');
    } else {
      this.no_res_dm += 1;
      console.log('Неправльно');
    }

    if (this.answer11 == 4) {
      this.res_dm += 1;
      console.log('Правильно');
    } else {
      this.no_res_dm += 1;
      console.log('Неправильно');
    }

    if (this.answer12 == 1) {
      this.res_dm += 1;
      console.log('Правильно')
    } else {
      this.no_res_dm += 1;
      console.log('Неправильно')
    }

    if (this.res_dm >= 4) {
      alert('Тест сдан!');
    } else {
      alert('Тест не сдан');
    }

    this.router.navigate(['/app-discrete-mathematics-results', this.res_dm, this.no_res_dm]);

    console.log( );
    return false
  }

  ngOnInit() {
    this.searchControl8.valueChanges.subscribe(value => {
      console.log(value);
      this.answer8 = value;
    });
    this.searchControl9.valueChanges.subscribe(value => {
      console.log(value);
      this.answer9 = value;
    });
    this.searchControl10.valueChanges.subscribe(value => {
      console.log(value);
      this.answer10 = value;
    });
    this.searchControl11.valueChanges.subscribe(value => {
      console.log(value);
      this.answer11 = value;
    });
    this.searchControl12.valueChanges.subscribe(value => {
      console.log(value);
      this.answer12 = value;
    })
  }
}
