import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { CanAccessGuard} from './can-access.guard'

const routes: Routes = [
  {path:"inicio", component: IndexComponent},
  {path:"home", component:HomeComponent , canActivate: [CanAccessGuard]},
  {path: "", redirectTo: "/inicio", pathMatch: 'full' },
  { path: "**", redirectTo:  "/inicio" } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
