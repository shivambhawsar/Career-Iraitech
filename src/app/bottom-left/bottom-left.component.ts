import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-left',
  templateUrl: './bottom-left.component.html',
  styleUrls: ['./bottom-left.component.css']
})
export class BottomLeftComponent implements OnInit {

  content: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
