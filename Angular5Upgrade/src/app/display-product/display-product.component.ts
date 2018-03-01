import { ChangeDetectorRef } from '@angular/core';
import { UserService } from './../Services/user.service';
import { ProductService } from './../Services/product.service';
import { ProductReviewService } from './../Services/product-review.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  author:string;
  reviews$:Observable<any[]>;
  userSubscription:Subscription;
  constructor(private dialogRef: MatDialogRef<DisplayProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private productReviewServe:ProductReviewService,
    private userServe:UserService) {
      this.data=this.data.productData;
      this.reviews$=this.productReviewServe.get(this.data.id);
      this.userSubscription = this.userServe.whoAmI().subscribe((user:any)=>{
        console.log(user)
        if (user && user.email) {
          this.author = user.email
        } else {
          this.author = 'Anonymous'
        }
      })
    }

  ngOnInit(){
  }


  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  addReview(rev){
      let review={message:rev,author:this.author};
      this.reviews$=this.reviews$.map((reviewArray)=>{
        reviewArray.push(review);
        return reviewArray;
      });
    }

}
