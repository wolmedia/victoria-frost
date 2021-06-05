import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-modal-winner',
  templateUrl: './modal-winner.component.html',
  styleUrls: ['./modal-winner.component.css']
})
export class ModalWinnerComponent implements OnInit {

  constructor(
    private router: Router,  
    public dialogRef: MatDialogRef<ModalWinnerComponent>
  ) { }

  ngOnInit(): void {}

  closeModal() {
    this.dialogRef.close();
  }

  reclamar(){
    this.router.navigate(['premio']);
    this.closeModal();
  }









}


