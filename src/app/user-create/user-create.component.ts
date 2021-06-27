import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {


  fb:FormBuilder = new FormBuilder;
  productForm:any;
   constructor(private productService:ProductService, private route:Router ) { }
 
   ngOnInit(): void {
     this.productForm = this.fb.group({
       "productname" : this.fb.control("", Validators.required),
       "productPrice" : this.fb.control("0",Validators.required),
       "discount" : this.fb.control("0",[Validators.min(0), Validators.max(5)]),
       "type" : this.fb.control("")
     })
   }
 submitForm(){
   this.productService.addProduct(this.productForm.value);
   this.route.navigate(["/user"])
 }
}
