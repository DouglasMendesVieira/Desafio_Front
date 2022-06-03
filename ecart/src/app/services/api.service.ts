import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct(){
    //usar a API https://dummyjson.com/products/
    //teste
    return this.http.get("https://fakestoreapi.com/products/").pipe(map((res:any) =>{
      return res;
    }))
  }
}
