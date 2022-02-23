import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model: any = {
    firstName: '',
    lastName: '',
    email: ''
  };

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

  constructor() { }

  ngOnInit(): void {
  }

  test(data: any) {
    console.log(data);
  }
}
