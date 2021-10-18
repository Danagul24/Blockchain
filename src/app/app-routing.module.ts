import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CoffeeComponent} from "./coffee/coffee.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {path: 'categories', component: HomeComponent},
  {path: 'categories/:id', component: CoffeeComponent},
  {path: '', redirectTo: 'categories', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

