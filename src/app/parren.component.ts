import { Component } from '@angular/core';

@Component({
  selector: 'app-parren',
  template: `<button (click)="child.value=child.value+1"> Tăng lên thêm 1</button>
 <button (click)="child.value=child.value-1"> Giảm đi 1</button>
  <app-child #child></app-child> 
  `
})
export class ParrenComponent {
  value=0;
  
}
