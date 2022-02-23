import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.css']
})
export class PipeComponentComponent implements OnInit {
   birthday= new Date(2022,1,22)
   person ={ name:'A', age:'16'}
  constructor() { }

  ngOnInit(): void {
  }

}
