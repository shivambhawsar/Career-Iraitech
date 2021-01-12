import { Component, OnInit } from '@angular/core';
import { TopLeftComponent } from '../top-left/top-left.component';

@Component({
  selector: 'app-top-right',
  templateUrl: './top-right.component.html',
  styleUrls: ['./top-right.component.css']
})
export class TopRightComponent implements OnInit {

  content: string = "";
  
  constructor(public topLeft : TopLeftComponent) { }

  ngOnInit(): void {
  }

}
