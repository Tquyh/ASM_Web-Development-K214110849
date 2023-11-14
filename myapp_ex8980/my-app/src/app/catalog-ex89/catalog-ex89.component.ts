import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog-ex89',
  templateUrl: './catalog-ex89.component.html',
  styleUrls: ['./catalog-ex89.component.css']
})
export class CatalogEx89Component implements OnInit {
  products: any[] = [];
  constructor(private pservice: CatalogService, private router: Router) {}
  ngOnInit() {
    this.products = this.pservice.getCategories();
  }
}
