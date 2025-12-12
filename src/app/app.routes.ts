import { Routes } from '@angular/router';
import { Startscreen } from './startscreen/startscreen';
import { Game } from './game/game';

export const routes: Routes = [
  { path: '', component: Startscreen },
  { path: 'game', component: Game },
];
