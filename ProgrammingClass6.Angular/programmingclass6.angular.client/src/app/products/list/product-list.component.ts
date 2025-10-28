import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";

@Component({
  templateUrl: './product-list.component.html',
  standalone: false
})
export class ProductListComponent implements OnInit {
  private readonly _http: HttpClient;

  public products: Product[] = [];

  constructor(http: HttpClient) {
    this._http = http;
  }

  public ngOnInit(): void {
    this._http.get<Product[]>('api/products')
      .subscribe(productsFromApi => {
        this.products = productsFromApi;
      });
  }
}
