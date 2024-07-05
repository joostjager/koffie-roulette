import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-coffee-cup-display',
  standalone: true,
  imports: [NgFor],
  templateUrl: './coffee-cup-display.component.html',
  styleUrl: './coffee-cup-display.component.css'
})
export class CoffeeCupDisplayComponent {
  @Input() count: number = 0;

  get cups() {
    return new Array(this.count);
  }

  increaseCount() {
    this.count++;
  }

  decreaseCount() {
    if (this.count > 0) {
      this.count--;
    }
  }
}
