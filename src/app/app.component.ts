import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoffeeCupDisplayComponent } from './coffee-cup-display/coffee-cup-display.component';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoffeeCupDisplayComponent, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'koffie-roulette';

  capuCount: number = 0;
  coffCount: number = 0;

  capuPrice: number = 1.9;
  coffPrice: number = 1.25;

  capuEndChance: number = 5;
  randomNumber: number = 0;
  isRandomNumberFinal: boolean = false;
  finalRandomNumber: number = 0;
  stepsToGo: number = 0;

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

    this.capuEndChance = Math.round(100 * this.capuCount * this.capuPrice / totalPrice);
  }

  random(): void {
    this.finalRandomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(this.finalRandomNumber);

    this.randomNumber = 1;
    this.stepsToGo = this.finalRandomNumber - 1 + 500;

    this.setTimer();
  }

  setTimer(): void {
    var delay = 1 + 1000 / this.stepsToGo;

    // set timer
    setTimeout(() => {
      this.randomNumber++;
      if (this.randomNumber > 100)
        this.randomNumber = 1;

      this.stepsToGo--;

      if (this.stepsToGo > 0)
        this.setTimer()
      else
        this.isRandomNumberFinal = true;

    }, delay);
  }
}

