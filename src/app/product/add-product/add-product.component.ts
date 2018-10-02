import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from './../services/product.service';
import { MsgService } from '../../shared/services/msg.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product;
  submitting: boolean = false;
  filesToUpload: Array<any>;
  constructor(
    public productService: ProductService,
    public msgService: MsgService,
    public router: Router
  ) {
    this.product = new Product({});
  }

  ngOnInit() {
  }


  add() {
    this.submitting = true;
    this.productService.add(this.product).subscribe(
      data => {
        this.submitting = false;
        this.msgService.showSuccess("product added sucessfully");
        this.router.navigate(['/product/list']);
      }, error => {
        this.submitting = false;
        this.msgService.showError(error);
      }
    )
  }
  fileChangeEvent(eve) {
    this.filesToUpload = eve.target.files;
  }

  upload() {
    this.submitting = true;
    this.productService.upload("POST", this.filesToUpload, this.product).subscribe(
      data => {
        this.submitting = false;
        this.msgService.showSuccess("product added sucessfully");
        this.router.navigate(['/product/list']);
      }, error => {
        this.submitting = false;
        this.msgService.showError(error);
      }
    )
  }
}
