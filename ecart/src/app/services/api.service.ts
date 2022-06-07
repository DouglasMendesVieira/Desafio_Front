import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "https://dummyjson.com/products/";

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get(this.baseUrl).pipe(map((res:any) =>{
      return res;
    }))
  }

  getProductId(id:any)  {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url).pipe(map((res:any) =>{
      return res;
    }))
  }


}
