import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductHttpService {
    private _url:string="./assets/data/products.json";
    constructor(private _http: HttpClient) { }
    getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._url)
    }
    }
    