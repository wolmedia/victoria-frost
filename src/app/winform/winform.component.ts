import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { CheckService } from '../check.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalErrorComponent } from '../modal/modal-error/modal-error.component';
import { ModalSuccessComponent } from '../modal/modal-success/modal-success.component';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';


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

  ngOnInit(): void {
    if(!this._api.isPromotionIn()){
      window.location.reload(true);
    }
  }

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
      CUI:        new FormControl('', [Validators.required, Validators.minLength(14), CuiValidator.validarCedula]),
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



// VALIDACION CUI NICARAGUA 
export class CuiValidator {
  static validarCedula(control: AbstractControl) : ValidationErrors | null {

      const LETRAS = "ABCDEFGHJKLMNPQRSTUVWXY";
      let cedula = control.value;

      const preFixValid = [
        '001',
        '002',
        '003',
        '004',
        '005',
        '006',
        '007',
        '008',
        '009',
        '041',
        '042',
        '043',
        '044',
        '045',
        '046',
        '047',
        '048',
        '081',
        '082',
        '083',
        '084',
        '085',
        '086',
        '087',
        '088',
        '089',
        '090',
        '091',
        '092',
        '093',
        '121',
        '122',
        '123',
        '124',
        '125',
        '126',
        '127',
        '128',
        '129',
        '130',
        '161',
        '162',
        '163',
        '164',
        '165',
        '166',
        '201',
        '202',
        '203',
        '204',
        '241',
        '242',
        '243',
        '244',
        '245',
        '246',
        '247',
        '281',
        '283',
        '284',
        '285',
        '286',
        '287',
        '288',
        '289',
        '290',
        '291',
        '321',
        '322',
        '323',
        '324',
        '325',
        '326',
        '327',
        '328',
        '329',
        '361',
        '362',
        '363',
        '364',
        '365',
        '366',
        '401',
        '401',
        '402',
        '402',
        '403',
        '403',
        '404',
        '404',
        '405',
        '405',
        '406',
        '406',
        '407',
        '407',
        '408',
        '408',
        '409',
        '409',
        '441',
        '442',
        '443',
        '444',
        '445',
        '446',
        '447',
        '448',
        '449',
        '450',
        '451',
        '452',
        '453',
        '454',
        '481',
        '482',
        '483',
        '484',
        '485',
        '486',
        '487',
        '488',
        '489',
        '490',
        '491',
        '492',
        '493',
        '521',
        '522',
        '523',
        '524',
        '525',
        '526',
        '561',
        '562',
        '563',
        '564',
        '565',
        '566',
        '567',
        '568',
        '569',
        '570',
        '601',
        '602',
        '603',
        '604',
        '605',
        '606',
        '607',
        '608',
        '610',
        '611',
        '612',
        '615',
        '616',
        '619',
        '624',
        '626',
        '627',
        '628',
        '888',
        '001',
        '002',
        '003',
        '004',
        '005',
        '006',
        '007',
        '008',
        '009',
      ];
    
    
      if (cedula == null || cedula.length != 14) cedula = null;
      else cedula = cedula.toUpperCase();
    
      const getPrefijoCedula = () => {
        if (cedula != null) return cedula.substring(0, 3);
        else return null;
      };
    
      const isPrefijoValido = () => {
        const prefijo = getPrefijoCedula();
        if (!prefijo) return false;
        if (!preFixValid.includes(prefijo)) return false;
        const re = new RegExp("^[0-9]{3}$");
        if (prefijo.search(re) == -1) return false;
    
        return true;
      };
    
      const getFechaCedula = () => {
        if (cedula != null) return cedula.substring(3, 9);
        else return null;
      };
    
      const isFechaValida = () => {
        const fecha = getFechaCedula();
    
        if (fecha == null) return false;
    
        const re = new RegExp(
          "^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])([0-9]{2})$"
        );
        if (fecha.search(re) == -1) return false;
    
        return true;
      };
    
      const getSufijoCedula = () => {
        if (cedula != null) return cedula.substring(9, 14);
        else return null;
      };
    
      const isSufijoValido = () => {
        const sufijo = getSufijoCedula();
    
        if (sufijo == null) return false;
    
        const re = new RegExp("^[0-9]{4}[A-Y]$");
        if (sufijo.search(re) == -1) return false;
    
        return true;
      };
    
      const getCedulaSinLetra = () => {
        if (cedula != null) return cedula.substring(0, 13);
        else return null;
      };
    
      const getPosicionLetra = () => {
        let posicionLetra = 0;
        const cedulaSinLetra = getCedulaSinLetra();
        let numeroSinLetra = 0;
    
        if (cedulaSinLetra == null) return -1;
    
        numeroSinLetra = cedulaSinLetra;
    
        posicionLetra = numeroSinLetra - Math.floor(numeroSinLetra / 23.0) * 23;
    
        return posicionLetra;
      };
    
      const calcularLetra = () => {
        var posicionLetra = getPosicionLetra();
    
        if (posicionLetra < 0 || posicionLetra >= LETRAS.length) return "?";
    
        return LETRAS.charAt(posicionLetra);
      };
    
      const getLetraCedula = () => {
        if (!!cedula) return cedula.substring(13, 14);
        else return null;
      };
    
      const isLetraValida = () => {
        let letraValida = null;
        var letra = getLetraCedula();
        if (letra == null) return false;
    
        letraValida = calcularLetra();
        return letraValida == letra;
      };
    
      const isCedulaValida = () => {
        if (!isPrefijoValido()) return false;
        if (!isFechaValida()) return false;
        if (!isSufijoValido()) return false;
        if (!isLetraValida()) return false;
        return true;
      };
      const res = isCedulaValida();

    if(res == false){
        return {validarCedula: true}
    }

    return null;

  }
}










// VALIDACION QUE NO CONTENGA ESPACIOS EL INPUT

//     get f()         { return this.contactForm.controls;  }
//     CUI:        new FormControl('', [Validators.required, Validators.minLength(14),CuiWspaces.cannotContainSpace , CuiValidator.validarCedula]),

// export class CuiWspaces {
//   static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
//       if((control.value as string).indexOf(' ') >= 0){
//           return {cannotContainSpace: true}
//       }
//       return null;
//   }
// }
// TEMPLATE
//  <div class="container-error-message" *ngIf="f.CUI.errors.cannotContainSpace">CUI can not contain space.</div>
