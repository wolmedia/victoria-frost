import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckService } from '../check.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router, private check: CheckService) { }

  ngOnInit(): void {
  
  }


day:any;
month:any;
year:any;
dteDate:any;
valid:any;



fecha = new Date();
 ano = this.fecha.getFullYear();

edad:any;
enter(){
  console.log(this.ano);
this.edad = this.ano - this.year ;
console.log(this.year, this.month, this.day)
console.log(this.edad)
  if( this.day >31 || this.month >12 || this.year >this.ano ){
    console.log("ingresa una fecha valida")
  }

  else if(  this.day ==undefined || this.month ==undefined || this.year ==undefined ){
    console.log("ingresa una fecha valida")
  }
  else if(  this.day ==null || this.month ==null || this.year ==null ){
    console.log("ingresa una fecha valida")
  }
  else if(  this.day <=0 || this.month <=0  || this.year <=0  ){
    console.log("ingresa una fecha valida")
  }


else{

  if(this.edad <18){ 
    console.log("eres menos de edad wey");
  }
  if(this.edad >=18){ 
   console.log("ya eres un viejo");
   this.check.setToken(this.edad);
   this.router.navigate(['home']);
  }
  
}

}









}
