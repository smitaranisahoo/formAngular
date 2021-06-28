import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {
    path : "",
    component : DashboardComponent
  },

  {
    path : "product",
    component : ProductComponent
  },

  {
    path : "productedit/:id",
    component : ProductEditComponent
  },
  {
    path : "productview/:id",
    component : ProductViewComponent
  },
  {
    path : "productcreate",
    component : ProductCreateComponent
  },
  {
    path : "user",
    component : UserComponent
  },
  {
    path : "usercreate",
    component : UserCreateComponent
  },
  {
    path : "useredit/:id",
    component : UserEditComponent
  },
  {
    path : "userview/:id",
    component : UserViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
