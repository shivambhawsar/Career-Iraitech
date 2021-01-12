import { Component, OnInit } from '@angular/core';
import { TopLeftComponent } from '../top-left/top-left.component';

@Component({
  selector: 'app-bottom-right',
  templateUrl: './bottom-right.component.html',
  styleUrls: ['./bottom-right.component.css']
})
export class BottomRightComponent implements OnInit {

  constructor(public topLeft : TopLeftComponent) { }

  ngOnInit(): void {
  }

}
