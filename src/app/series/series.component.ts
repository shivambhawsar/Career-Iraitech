import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  index : number;

  constructor() {
    this.index = 0;
   }

  ngOnInit(): void {
  }

  findNumber(){
    if(this.index % 2 == 0)
      this.index = Math.pow(this.index, 2) - 1;
    else
      this.index = Math.pow(this.index, 2) + 1;
  }

}
