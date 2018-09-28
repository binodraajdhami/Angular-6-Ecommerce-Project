import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MsgService } from '../../shared/services/msg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products = [];
  loading: boolean = true;
  constructor(
    public productService: ProductService,
    public msgService: MsgService,
    public router: Router
  ) { }

  ngOnInit() {
    this.productService.get().subscribe(
      (data: any) => {
        this.loading = false;
        this.products = data;
      },
      error => {
        this.loading = false;
        this.msgService.showError(error);
      }
    )
  }


  deleteProduct(id, i) {
    let delConfrim = confirm('are you sure to delete');
    if (delConfrim) {
      this.productService.remove(id).subscribe(
        data => {
          this.products.splice(i, 1);
          this.msgService.showSuccess("product deleted");
        }, err => {
          this.msgService.showError(err);
        }
      )
    }
  }

}
