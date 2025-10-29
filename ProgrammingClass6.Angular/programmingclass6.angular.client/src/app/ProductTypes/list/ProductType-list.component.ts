import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ProductTypes } from "../../shared/models/ProductType";


@Component({
    templateUrl: './ProductType-list.component.html',
  standalone: false
  })
export class ProductTypeListComponent implements OnInit {
  private readonly _httpClient: HttpClient;
  public productTypes: ProductTypes[] = [];

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }
  public ngOnInit(): void {
    this._httpClient.get<ProductTypes[]>('api/ProductTypes')
      .subscribe(productTypes => {
        this.productTypes = productTypes;
      });
  }
}
