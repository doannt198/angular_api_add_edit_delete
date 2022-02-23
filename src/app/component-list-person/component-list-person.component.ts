import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-list-person',
  templateUrl: './component-list-person.component.html',
  styleUrls: ['./component-list-person.component.css']
})
export class ComponentListPersonComponent implements OnInit {
  arrAccound=[
    { id:1,name:'Nguyen Van A',age:'14'},
    { id:2,name:'Nguyen Van B ',age:'18'},
    { id:3,name:'Nguyen Van C',age:'17'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
