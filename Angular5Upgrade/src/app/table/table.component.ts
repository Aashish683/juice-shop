import { BasketService } from './../Services/basket.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatDialog} from '@angular/material';
import { DisplayProductComponent } from '../display-product/display-product.component';
import { ProductService } from '../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'data-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns = ['Image','Product', 'Description', 'Price','Select'];
  tableData:Element[]=[];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog:MatDialog,private basketServe:BasketService,
     private productServe:ProductService,
     private route:ActivatedRoute,
     private router:Router) {

    }

  ngOnInit() {

  }

  ngAfterViewInit(){

    this.productServe.search().subscribe((tableData)=> {
      console.log(tableData);
      this.tableData=tableData;
      this.dataSource = new MatTableDataSource<Element>(this.tableData);
      this.dataSource.paginator=this.paginator;
      this.filterTable();
      this.router.events.subscribe(()=>{
      this.filterTable();
      });
   });
  }

  openDialog(element){
    console.log(element);
    let dialogRef=this.dialog.open(DisplayProductComponent,{
      width:'800px',
      height:'max-content',
      data:{
       productData:element
     }
    })
  }

  //To be called on change in route
  filterTable(){
    let queryParam:string=this.route.snapshot.queryParams.q;
      if(queryParam){
      queryParam=queryParam.trim();
      queryParam=queryParam.toLowerCase();
      this.dataSource.filter=queryParam;
      }
      else
      this.dataSource.filter="";
  }

}

export interface Element {
  createdAt:string;
  deletedAt:string;
  description:string;
  id:number;
  image:string;
  name:string;
  price: number;
  updatedAt:string;
}

/*const ELEMENT_DATA: Element[] = [
  {image: 1, product: 'Apple Juice', description: '....', price: '2.0'},
  {image: 2, product: 'Mango Juice', description: '....', price: '2.0'},
  {image: 3, product: 'Banana Juice', description: '....', price: '2.0'},
  {image: 4, product: 'Guava Juice', description: '....', price: '2.0'},
  {image: 5, product: 'Mixed Fruit Juice', description: '....', price: '2.0'},
  {image: 6, product: 'K Juice', description: '....', price: '2.0'},
  {image: 7, product: 'A Juice', description: '....', price: '2.0'},
  {image: 8, product: 'B Juice', description: '....', price: '2.0'},
  {image: 9, product: 'C Juice', description: '....', price: '2.0'},
  {image: 10, product: 'D Juice', description: '....', price: '2.0'},
  {image: 11, product: 'E Juice', description: '....', price: '2.0'},
  {image: 12, product: 'F Juice', description: '....', price: '2.0'},
  {image: 13, product: 'G Juice', description: '....', price: '2.0'},
  {image: 14, product: 'H Juice', description: '....', price: '2.0'},
  {image: 15, product: 'I Juice', description: '....', price: '2.0'},
  {image: 16, product: 'J Juice', description: '....', price: '2.0'},
  {image: 17, product: 'K Juice', description: '....', price: '2.0'},
  {image: 18, product: 'L Juice', description: '....', price: '2.0'},
  {image: 19, product: 'M Juice', description: '....', price: '2.0'},
]*/;
