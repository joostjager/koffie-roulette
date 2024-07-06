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

  capuCount: number = 0;
  coffCount: number = 0;

  capuChance: number = 0;
  coffChance: number = 0;

  capuPrice: number = 1.9;
  coffPrice: number = 1.25;

  onCapuCountChanged(newValue: number) {
    this.capuCount = newValue;

    this.update();
  }

  onCoffCountChanged(newValue: number) {
    this.coffCount = newValue;

    this.update();
  }

  update(): void {
    var totalPrice = this.capuCount * this.capuPrice + this.coffCount * this.coffPrice;

    this.capuChance = this.capuPrice / totalPrice;
    this.coffChance = this.coffPrice / totalPrice;
  }
}

