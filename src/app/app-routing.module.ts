import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ManufacturersComponent } from "./manufacturers/manufacturers.component";
import { AddVideoComponent } from "./add-video/add-video.component";
import { CustomersComponent } from "./customers/customers.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "customers", component: CustomersComponent },
  { path: "lists", component: ManufacturersComponent },
  { path: "add", component: AddVideoComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
