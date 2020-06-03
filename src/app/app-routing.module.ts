import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./view/home/home.component";
import { ProductCrudComponent } from "./view/product-crud/product-crud.component";
import { CreateComponent } from './components/product/create/create.component';



const routes: Routes = [
{
  path: "",
  component: HomeComponent
},
{
  path: "products",
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: CreateComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
