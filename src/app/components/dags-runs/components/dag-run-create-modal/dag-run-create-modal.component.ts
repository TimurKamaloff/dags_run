import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dag-run-create-modal',
  templateUrl: './dag-run-create-modal.component.html',
  styleUrls: ['./dag-run-create-modal.component.scss']
})
export class DagRunCreateModalComponent  implements OnInit {

  constructor(private dialogRef: MatDialogRef<DagRunCreateModalComponent>) {}

  onClose() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
