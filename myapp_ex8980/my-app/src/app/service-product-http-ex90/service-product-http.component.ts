import { Component } from '@angular/core';
import { ProductHttpService } from '../producthttp.service';

@Component({

  selector: 'app-service-product-http',
  templateUrl: './service-product-http.component.html',
  styleUrls: ['./service-product-http.component.css']
})
export class ServiceProductHttpComponent {
  products:any;
  constructor(private _service: ProductHttpService){
  this._service.getProducts().subscribe({
  next:(data)=>{this.products=data}
  })
  }
}

