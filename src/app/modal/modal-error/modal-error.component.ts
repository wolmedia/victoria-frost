import { Component, Inject, OnInit, ElementRef, Renderer2  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.css']
})
export class ModalErrorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalErrorComponent>,) { }

  ngOnInit(): void {
  }
  closeModal() {
    this.dialogRef.close();
  }

}
