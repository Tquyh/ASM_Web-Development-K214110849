import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property',
  templateUrl: './binding-property.component.html',
  styleUrls: ['./binding-property.component.css']
})
export class BindingPropertyComponent {
  public name:string="Phạm Vũ Trúc Quỳnh"
  public email:string="quynhpvt21411c@st.uel.edu.vn"
  public nameid:string="nameid"
  public emailid:string="emailid"
  public isDisabled:boolean=true
}
