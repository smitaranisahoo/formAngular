import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  currentProduct:any;
  currentId:any;
  productLists:any;
  currentproductData: any;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { 
    this.currentId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {



    this.productLists = this.productService.returnproductById(this.currentId);
   

  }


}
