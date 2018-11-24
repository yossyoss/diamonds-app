import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BsDropdownModule } from "ngx-bootstrap";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { ListsComponent } from "./lists/lists.component";
import { DiamondsService } from "./diamonds.service";
import { HttpClientModule } from "@angular/common/http";
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { AddVideoComponent } from './add-video/add-video.component';
@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      ListsComponent,
      ManufacturersComponent,
      AddVideoComponent,
      AddVideoComponent
   ],
   imports: [
      FormsModule,
      HttpClientModule,
      BrowserModule,
      AppRoutingModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      DiamondsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
