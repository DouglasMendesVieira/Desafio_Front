import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  filterValue = 0;
  productList:any;
  constructor(private api:ApiService, private cartApi: CartapiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res.products;
      this.productList.forEach((a:any) =>{
        Object.assign(a,{quantity:1, total:a.price})
      });
    })
  }

  addtoCart(item:any) {
    this.cartApi.addToCart(item);
  }

  findSmartphones(productList: any[]): any[] {
    return productList.filter(p => p.category == "smartphones");
  }

  findLaptops(productList: any[]): any[] {
    return productList.filter(p => p.category == "laptops");
  }

  findFragrances(productList: any[]): any[] {
    return productList.filter(p => p.category == "fragrances");
  }

  findSkincare(productList: any[]): any[] {
    return productList.filter(p => p.category == "skincare");
  }

  findGroceries(productList: any[]): any[] {
    return productList.filter(p => p.category == "groceries");
  }

  findHomeDecoration(productList: any[]): any[] {
    return productList.filter(p => p.category == "home-decoration");
  }

  lowerPrice(productList: any[]): any[] {
    return productList.sort(function (x, y){
      return x.price - y.price;
    })
  }
}
