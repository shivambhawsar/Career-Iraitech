import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-left',
  templateUrl: './top-left.component.html',
  styleUrls: ['./top-left.component.css']
})
export class TopLeftComponent implements OnInit {

  content: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
