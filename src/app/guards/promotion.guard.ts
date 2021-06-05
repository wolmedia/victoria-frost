import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckService } from '../check.service';
@Injectable({
  providedIn: 'root'
})
export class PromotionGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private _api: CheckService, private router: Router ){}

  canActivate(): boolean{
    if(this._api.isPromotionIn()){
      return true;
    }else{
      this.router.navigate(['home']);
      return false;
    }
  }

  
}
