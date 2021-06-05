import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { CanAccessGuard} from './guards/can-access.guard';
import { WinformComponent } from './winform/winform.component';
import { PromotionGuard } from './guards/promotion.guard';

const routes: Routes = [
  {path:"inicio", component: IndexComponent},
  {path:"home", component:HomeComponent , canActivate: [CanAccessGuard]},
  {path:"premio", component:WinformComponent , canActivate: [PromotionGuard]},
  {path: "", redirectTo: "/inicio", pathMatch: 'full' },
  { path: "**", redirectTo:  "/inicio" } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
