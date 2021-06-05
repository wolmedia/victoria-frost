import { Component, Inject, OnInit, ElementRef, Renderer2  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-message3',
  templateUrl: './modal-message3.component.html',
  styleUrls: ['./modal-message3.component.css']
})
export class ModalMessage3Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalMessage3Component>) { }

  ngOnInit(): void {
  }
  closeModal() {
    this.dialogRef.close();
  }

}
