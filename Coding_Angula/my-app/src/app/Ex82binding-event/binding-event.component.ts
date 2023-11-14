import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event',
  templateUrl: './binding-event.component.html',
  styleUrls: ['./binding-event.component.css']
})
export class BindingEventComponent {
  onClick(event:any){
    alert(event.pointerId)
    }
    onSubmit(value:string){
    alert(value)
    }
  public hesoa:any="1"
  public hesob:any="1"
  public ketqua:any="chua tinh"
  plusbutton(){
    this.ketqua="x="+(this.hesob+this.hesoa)
  }
  subtractbutton(){
    this.ketqua=this.hesoa-this.hesob
  }
  multiplybutton(){
    this.ketqua=this.hesoa*this.hesob
  }
  divideButton(){
    this.ketqua=this.hesoa/this.hesob
  }


}
