import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product.model';
import { CallApiService } from '../call-api.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
  name:string='';
  description: string='';
  url:string ='';
  
  constructor(private callApiService: CallApiService) { }

  ngOnInit(): void {
  }

  
}
