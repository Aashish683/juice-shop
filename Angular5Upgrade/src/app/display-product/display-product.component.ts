import { ProductReviewService } from './../Services/product-review.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  reviews$:Observable<string[]>;
  constructor(private dialogRef: MatDialogRef<DisplayProductComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,private productReviewServe:ProductReviewService) {
      this.data=this.data.productData;
      this.reviews$=this.productReviewServe.get(this.data.id);
      this.reviews$.subscribe(x=>console.log(x))
    }

  ngOnInit(){
  }

  onSubmit(rev){
    let review ={
      rev:rev,
      author:"User"
    }
    this.data.reviews.push(review);
  }

}
