import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import { Product } from 'src/model/product.model';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})
export class CallApiComponent implements OnInit {
  name: string = '';
  description: string = '';
  url: string = ''

  products: Product[] = [];
  constructor(private CallApiService: CallApiService) {

  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.CallApiService.getAll().subscribe((res: any) => {
      this.products = res
    })
  }
  onAdd(submitForm: any): void {
    if (this.idEdit) {
      const dataSave = {
        ...submitForm.value,
        id: this.idEdit
      };
      this.CallApiService.edit(dataSave)
      .subscribe(_ => {
        const index=  this.products.findIndex(e=>e.id===this.idEdit)
        this.products[index].name = this.name;
        this.products[index].description= this.description;
        this.products[index].url = this.url;
      })
      
    } else {
      this.CallApiService.add(submitForm.value).subscribe(insertedProduct =>  this.products.push(insertedProduct) )
      this.name = '';
      this.description = '';
      this.url = '';
    }
  }
  onDelete(id: number): void {
    this.CallApiService.delete(id).subscribe(_ => {
      this.products = this.products.filter(eachProduct => eachProduct.id !== id);
    });
    this.CallApiService.getAll().subscribe((res: any) => {
      this.products = res
    })
  }
  idEdit = 0;
  onEdit(product: Product) {
    this.name = product.name;
    this.description = product.description;
    this.url = product.url;
    this.idEdit = product.id;
  }
}
