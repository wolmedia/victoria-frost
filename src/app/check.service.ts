

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private cookieService: CookieService ) { }



  setToken(token:any){
    localStorage.setItem('ASkjfwuihJKFH', token);
  }

  getToken(){
  //  localStorage.getItem('ASkjfwuihJKFH');
    this.cookieService.get('ASkjfwuihJKFH');
  }

  isLoggedIn(){
    return !!this.cookieService.get('ASkjfwuihJKFH');
  }



















}
