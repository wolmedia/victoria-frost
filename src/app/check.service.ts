

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private cookieService: CookieService ) { }


  getToken(){

    this.cookieService.get('ASkjfwuihJKFH');
  }

  isLoggedIn(){
    return !!this.cookieService.get('ASkjfwuihJKFH');
  }



}
