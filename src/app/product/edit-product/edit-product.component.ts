import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MsgService } from '../../shared/services/msg.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId;
  product;
  loading: boolean = true;
  submitting: boolean = false;
  filesToUpload = [];
  imgUrl: string;
  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public productService: ProductService,
    public msgService: MsgService
  ) {
    this.productId = this.activeRoute.snapshot.params.id;
    this.imgUrl = environment.imgUrl;

  }

  ngOnInit() {
    this.productService.getById(this.productId).subscribe(
      (data: any) => {
        console.log('data', data);
        this.loading = false;
        this.product = data;
        this.product.tags = data.tags.join(',');
        // this.product.manuDate = new Date(data.manuDate);
      }, err => {
        this.loading = false;
        this.msgService.showError(err);
      }
    )

  }

  edit() {
    this.submitting = true;
    this.productService.update(this.product).subscribe(
      data => {
        this.submitting = false;
        this.msgService.showSuccess('product updated successfully');
        this.router.navigate(['/product/list']);

      }, err => {
        this.submitting = false;
        this.msgService.showError(err);
      }
    )
  }
  fileChangeEvent(eve) {
    this.filesToUpload = eve.target.files;
  }

  upload() {
    this.submitting = true;
    this.productService.upload("PUT", this.filesToUpload, this.product).subscribe(
      data => {
        this.submitting = false;
        this.msgService.showSuccess("product updated sucessfully");
        this.router.navigate(['/product/list']);
      }, error => {
        this.submitting = false;
        this.msgService.showError(error);
      }
    )
  }

}
