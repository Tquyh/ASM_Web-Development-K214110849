import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent {
public product=[
                {"ProductId":"p1",
                  "ProductName":"Coca",
                  "UnitPrice":15,
                  "Image":"coca.png"
                },
                {"ProductId":"p2",
                  "ProductName":"pepsi",
                  "UnitPrice":18,
                  "Image":"pepsi.png"
                },
                {"ProductId":"p3",
                  "ProductName":"sting",
                  "UnitPrice":17,
                  "Image":"sting.png"
                }
              ]

public filterProducts:any=null
searchProducts(min:string,max:string)
{
  let minprice=parseFloat(min)
  let maxprice=parseFloat(max)
  this.filterProducts=this.product.filter(p=>p.UnitPrice>=minprice
                                          &&
                                          p.UnitPrice<=maxprice)
}
}
