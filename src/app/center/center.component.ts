import { Component, OnInit } from '@angular/core';
import { TopLeftComponent } from '../top-left/top-left.component';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  constructor(public topLeft : TopLeftComponent) { }

  ngOnInit(): void {
  }

}
