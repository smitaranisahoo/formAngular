import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentProduct=0;
  currentId:any;
  productList:Array<any>=[]
  constructor(private productService: ProductService,private activatedRoute:ActivatedRoute) {
    this.currentId = this.activatedRoute.snapshot.params.id;
   }

  

  ngOnInit(): void {
    this.currentProduct = this.activatedRoute.snapshot.params.id;
    this.productList = this.productService.returnProduct();
  }
  deleteForm(){
    this.productService.removeProduct(this.currentId);
  }

}
