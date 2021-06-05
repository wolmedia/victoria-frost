import { Component, Inject, OnInit, ElementRef, Renderer2  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-message2',
  templateUrl: './modal-message2.component.html',
  styleUrls: ['./modal-message2.component.css']
})
export class ModalMessage2Component implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalMessage2Component>,
 
  ) { }

  ngOnInit(): void {
  }
  closeModal() {
    this.dialogRef.close();
  }

}
