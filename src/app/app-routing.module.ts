import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromotionComponent } from './promotion/promotion.component';
 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'promotion', component: PromotionComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }