import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DisplayProductComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
  }

  onSubmit(rev){
    let review ={
      rev:rev,
      author:"User"
    }
    this.data.reviews.push(review);
  }

}
