import { Component, OnInit } from '@angular/core';
import { TopLeftComponent } from '../top-left/top-left.component';

@Component({
  selector: 'app-bottom-left',
  templateUrl: './bottom-left.component.html',
  styleUrls: ['./bottom-left.component.css']
})
export class BottomLeftComponent implements OnInit {

  constructor(public topLeft : TopLeftComponent) { }

  ngOnInit(): void {
  }

}
