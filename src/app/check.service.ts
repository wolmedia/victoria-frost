

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient , HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private cookieService: CookieService, private http:HttpClient ) { }

  headers = new Headers();
  
  url= 'https://solutionsomg.com/api/Frost/promocion/';

  getToken(){
    this.cookieService.get('ASkjfwuihJKFH');
  }
  isLoggedIn(){
    return !!this.cookieService.get('ASkjfwuihJKFH');
  }

  getPromotionToken(){
    this.cookieService.get('promotion');
  }

  isPromotionIn(){
    return !!this.cookieService.get('promotion');
  }

  async getPromotion(ip){
    this.headers.append("Access-Control-Allow-Methods","GET, POST");
    this.headers.append("Access-Control-Allow-Origin","*");
    return  this.http.get( this.url+ip)
  }

  postPromotion(ip, data){
  this.headers.append("Access-Control-Allow-Methods","GET, POST");
  this.headers.append("Access-Control-Allow-Origin","*");
    return this.http.post(this.url+ip ,data);
  }

}
