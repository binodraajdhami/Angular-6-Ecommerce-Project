import { Component, OnInit } from '@angular/core';
import { MsgService } from '../../shared/services/msg.service';
import { ProductService, Product } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serach-product',
  templateUrl: './serach-product.component.html',
  styleUrls: ['./serach-product.component.css']
})
export class SerachProductComponent implements OnInit {
  public categoriesOnly: Array<any> = [];
  public product;
  public products;
  public wholeData;
  public namesOnly;
  public multiple: boolean = false;
  public submitting: boolean = false;
  public showResult: boolean = false;
  constructor(
    public msgService: MsgService,
    public productService: ProductService,
    public router: Router
  ) {
    this.product = new Product({});
    this.product.category = '';
  }

  ngOnInit() {
    this.productService.get().subscribe(
      (data: any) => {
        this.wholeData = data;
        data.forEach((item) => {
          if (this.categoriesOnly.indexOf(item.category) == -1) {
            this.categoriesOnly.push(item.category);
          }
        })
        console.log('categories list', this.categoriesOnly);
      }, error => {
        this.msgService.showError(error);
      }
    )
  }

  search() {
    if (!this.multiple) {
      this.product.toDate = null;
    }
    if (this.product.fromDate) {
      if (!this.product.toDate) {
        this.product.toDate = this.product.fromDate
      }
    }
    console.log('this product', this.product);
    this.submitting = true;
    this.productService.search(this.product).subscribe(
      data => {
        this.submitting = false;
        this.showResult = true;
        this.products = data;
      }, error => {
        this.submitting = false;
        this.msgService.showError(error);
      }
    )
  }
  searchAgain() {
    this.showResult = false;
    this.product = new Product({});
    this.product.category = '';
    this.multiple = false;
  }
  prepareName() {
    if (this.product.category) {
      this.namesOnly = this.wholeData.filter((item) => {
        if (item.category == this.product.category) {
          return item;
        }
      })
      this.product.name = '';
    }
  }

}
