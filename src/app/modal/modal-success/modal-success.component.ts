import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.css']
})
export class ModalSuccessComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalSuccessComponent>) { }

    ngOnInit(): void {
    }
    closeModal() {
      this.dialogRef.close();
    }

    end(){
      this.closeModal();
    }

}
