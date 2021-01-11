import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {

  phone:any = [{phoneNumber1:''}];
  constructor() {
   }

  ngOnInit(): void {
  }
 
  add() {
    this.phone.push({phoneNumber1: ''});
  }

  delete(){
    if(this.phone.length>1)
      this.phone.pop()
  }

  show(){
    console.log(this.phone);
  }
}
