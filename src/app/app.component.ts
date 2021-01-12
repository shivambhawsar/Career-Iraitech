import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router){}

  question1() {
    this.router.navigate(['']);
  }

  question2() {
    this.router.navigate(['phone']);
  }

  question3() {
    this.router.navigate(['box1']);
  }

  question4() {
    this.router.navigate(['box1']);
  }
  
}
