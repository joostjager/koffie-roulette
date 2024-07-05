import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoffeeCupDisplayComponent } from './coffee-cup-display/coffee-cup-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoffeeCupDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'koffie-roulette';

  coffeeCount: number = 0;

  increaseCount() {
    this.coffeeCount++;
  }

  decreaseCount() {
    if (this.coffeeCount > 0) {
      this.coffeeCount--;
    }
  }
}

