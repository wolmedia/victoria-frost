import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal/modal.component';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router,  
    private cookieService: CookieService,
    public matDialog: MatDialog, 
    public dialog: MatDialog ) { }

  ngOnInit(): void {}

  day:any;
  month:any;
  year:any;



  private fecha = new Date();
  private ano = this.fecha.getFullYear();
  private edad;
  enter(){
  this.edad = this.ano - this.year ;
    if( this.day >31 || this.month >12 || this.year >this.ano ){
      this.modal();
    }
    else if(  this.day ==undefined || this.month ==undefined || this.year ==undefined ){
      this.modal();
    }
    else if(  this.day ==null || this.month ==null || this.year ==null ){
      this.modal();
    }
    else if(  this.day <=0 || this.month <=0  || this.year <=0  ){
      this.modal();
    }


        else{

            if(this.edad <18){ 
             this.modal();
            }
            if(this.edad >=18){   
            this.cookieService.set( 'ASkjfwuihJKFH', 'Victoria Frost', {expires: 0.1, sameSite: 'Lax'});
            this.router.navigate(['home']);
            }
  
        }

  }






  modal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
    });
  }





}
