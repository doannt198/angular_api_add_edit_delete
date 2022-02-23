import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.css']
})
export class ComponentTestComponent implements OnInit {
  @Input() nameinput:String;
  @Input() ageinput:String;
  en:string = "English";
  vi:string ="Việt Nam";
  forgot=false;
  urlImages="https://media.istockphoto.com/photos/travle-a-lot-as-a-photograher-picture-id841518302?s=612x612";
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  showToggle(){
    this.forgot=!this.forgot
  }
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];

  newEn='';
  newVn='';
  addForm(){
    this.arrWords.unshift({
      id:this.arrWords.length +1,
      en:this.newEn,
      vn:this.newVn,
      memorized:false
    })
    this.newEn='';
    this.newVn='';
    this.isShowForm=false;
  }
  deleteForm(id:any){
    const index = this.arrWords.findIndex(e=>e.id===id)
    this.arrWords.splice(index,1)
  }
  name="";
  sizeImage={ width:'100%' };
  isShowForm= false;
  showfilterForm="XEM_TAT_CA";
}
