import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameModel } from '../../models/gameModel';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrls: ['./game.scss'],
})
export class Game {
  drawCardAnimation = false;
  gameModel = new GameModel();
  drawCard() {
    this.drawCardAnimation = true;
  }
  newGame() {
    this.gameModel = new GameModel();
    console.log(this.gameModel);
  }
}
