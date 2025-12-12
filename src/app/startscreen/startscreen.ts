import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  imports: [],
  templateUrl: './startscreen.html',
  styleUrls: ['./startscreen.scss'],
  standalone: true,
})
export class Startscreen {
  constructor(private router: Router) {}
  newGame() {
    this.router.navigate(['/game']);
  }
}
