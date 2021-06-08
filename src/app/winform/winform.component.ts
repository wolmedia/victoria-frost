import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { CheckService } from '../check.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalErrorComponent } from '../modal/modal-error/modal-error.component';
import { ModalSuccessComponent } from '../modal/modal-success/modal-success.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-winform',
  templateUrl: './winform.component.html',
  styleUrls: ['./winform.component.css']
})
export class WinformComponent implements OnInit {

  constructor(
    private _api: CheckService,
    private http:HttpClient,
    private viewportScroller: ViewportScroller, 
    private cookieService: CookieService, 
    public matDialog: MatDialog, 
    public dialog: MatDialog
  ) { this.contactForm = this.createForm(); }

  ngOnInit(): void {}

  public onClick(elementId: string): void { 
     this.viewportScroller.scrollToAnchor(elementId);
  }

  public contactForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private onlyNumbers: any = /[0-9\+\-\ ]/;

  get Nombre()    { return this.contactForm.get('Nombre'); } 
  get Apellido()  { return this.contactForm.get('Apellido'); }
  get Email()     { return this.contactForm.get('Email'); }
  get CUI()       { return this.contactForm.get('CUI'); }
  get telefono()  { return this.contactForm.get('telefono'); }
  get Direccion() { return this.contactForm.get('Direccion'); }

  createForm() {
    return new FormGroup({
      Nombre:     new FormControl('', [Validators.required, Validators.minLength(3)]),
      Apellido:   new FormControl('', [Validators.required, Validators.minLength(3)]),
      Email:      new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      CUI:        new FormControl('', [Validators.required, Validators.minLength(13)]),
      telefono:   new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.onlyNumbers)]),
      Direccion:  new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  onResetForm(): void {
    this.contactForm.reset();
  }

  ipAddress = '';
  data;
  result;
  success;
  err;
  error;

  onSendPromotion(): void {

    if (this.contactForm.valid) {

      this.contactForm.value
      this.data = this.contactForm.value;

      this.http.get("https://api.ipify.org/?format=json").subscribe((res:any)=>{
        this.ipAddress = res.ip;
          this._api.postPromotion(this.ipAddress,this.data).subscribe(data=>{      
            this.result = data;
            this.success = this.result.result;
         
            this.cookieService.delete('promotion', '/');
            this.modalSuccess();

          },(error =>{
   
            this.result = error;
            this.err = this.result.error;
            this.error = this.err.result;
        
            this.modalError();
          }));
        });
    }
  }

  modalError() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(ModalErrorComponent, {
      width: '250px',
      disableClose: false
    });
  }

  modalSuccess() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(ModalSuccessComponent, {
      width: '600px',
      disableClose: true
    });
  }


}