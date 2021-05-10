import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor() { }



  setToken(token:any){
    localStorage.setItem('ASkjfwuihJKFH', token);
  }

  getToken(){
    localStorage.getItem('ASkjfwuihJKFH');
  }

  isLoggedIn(){
    return !!localStorage.getItem('ASkjfwuihJKFH');
  }






}
