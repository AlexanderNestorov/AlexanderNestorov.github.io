import {Component, OnInit} from '@angular/core';
import {ProductService} from "./services/product/product.service";
import {Product} from "./models/product/Product";
import {HttpErrorResponse} from "@angular/common/http";
import {Deal} from "./models/deal/Deal";
import {DealService} from "./services/deal/deal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'grocery-shop';

  products?: Product[];
  deals?: Deal[];

  constructor(private productService: ProductService, private dealService: DealService) {
  }

  ngOnInit() {
    this.getAllProducts();
    this.getAllDeals();
  }

  public getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getAllDeals(): void {
    this.dealService.getAllDeals().subscribe(
      (response: Deal[]) => {
        this.deals = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
