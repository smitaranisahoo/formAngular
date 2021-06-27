import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  fb:FormBuilder = new FormBuilder;
  productForm:any;
  currentId:any;
  currentproductData: any;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute, private route:Router) {
    this.currentId = this.activatedRoute.snapshot.params.id;
   }

  ngOnInit(): void {
    this.currentproductData = this.productService.returnproductById(this.currentId);
    console.log(this.currentproductData)
    this.productForm = this.fb.group({
      "productname" : this.fb.control("", Validators.required),
      "productPrice" : this.fb.control("0",Validators.required),
      "discount" : this.fb.control("0",[Validators.min(0), Validators.max(5)]),
      "type" : this.fb.control("")
    })
    this.productForm.patchValue(this.currentproductData)
  }
  updateForm(){

  this.productService.updateProductBYId(this.currentId,this.productForm.value)
   this.route.navigate(["/product"]) 
}

}


