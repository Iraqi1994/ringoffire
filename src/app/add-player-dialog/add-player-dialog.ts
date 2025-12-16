import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-player-dialog',
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    MatDialogClose,
  ],
  templateUrl: './add-player-dialog.html',
  styleUrls: ['./add-player-dialog.scss'],
  standalone: true,
})
export class AddPlayerDialog {
  name: string = '';

  constructor(public dialogRef: MatDialogRef<AddPlayerDialog>) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
