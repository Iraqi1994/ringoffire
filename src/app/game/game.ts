import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GameModel } from '../../models/gameModel';
import { Player } from '../player/player';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddPlayerDialog } from '../add-player-dialog/add-player-dialog';
import { GameInfo } from '../game-info/game-info';

@Component({
  selector: 'app-game',
  imports: [
    CommonModule,
    Player,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    GameInfo,
  ],
  templateUrl: './game.html',
  styleUrls: ['./game.scss'],
})
export class Game {
  drawCardAnimation = false;
  currentCard: string = '';
  gameModel = new GameModel();

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  drawCard() {
    if (!this.drawCardAnimation) {
      this.currentCard = this.gameModel.stack.pop()!;
      this.drawCardAnimation = true;
      this.gameModel.currentPlayer =
        (this.gameModel.currentPlayer + 1) % this.gameModel.players.length;
      setTimeout(() => {
        this.gameModel.playedCards.push(this.currentCard);
        this.drawCardAnimation = false;
      }, 1000);
    }
  }

  newGame() {
    this.gameModel = new GameModel();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlayerDialog);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name) {
        this.gameModel.players.push(name);
        this.cdr.detectChanges();
      }
    });
  }
}
