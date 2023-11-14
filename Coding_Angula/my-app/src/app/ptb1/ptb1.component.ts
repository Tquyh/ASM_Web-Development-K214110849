import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb1',
  templateUrl: './ptb1.component.html',
  styleUrls: ['./ptb1.component.css']
})
export class Ptb1Component {
  public hesoa:any="5"
  public hesob:any="10"
  public ketqua:any="<chua tinh>"
  xulyGiai(){
    //alert(this.hesoa+","+this.hesob)
    if (this.hesoa==0 && this.hesob==0)
    {
      this.ketqua="Vo so nghiem"
    }
    else if (this.hesoa==0 && this.hesob!=0)
    {
      this.ketqua="Vo nghiem"
    }
    else
    {
      this.ketqua="x="+(-this.hesob/this.hesoa)
    }
  }

  xulyTiep(){
    this.hesoa=""
    this.hesob=""
    this.ketqua=""
  }
}
