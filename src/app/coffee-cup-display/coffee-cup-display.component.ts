import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffee-cup-display',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './coffee-cup-display.component.html',
  styleUrl: './coffee-cup-display.component.css'
})
export class CoffeeCupDisplayComponent {
  @Input() count: number = 0;
  @Input() startChance: number = 0;
  @Input() endChance: number = 0;

  @Input() type: string = '';
  @Input() randomNumber: number = 0;

  @Input() price: number = 0;

  @Output() countChanged: EventEmitter<number> = new EventEmitter<number>();

  get cups() {
    let cupsArray = [];
    var start = this.startChance;
    for (let i = 0; i < this.count; i++) {
      let end = Math.round(this.endChance - (this.count - 1 - i) * (this.endChance - this.startChance + 1) / this.count);
      cupsArray.push({
        idx: i,
        start: start,
        end: end,
        color: this.randomNumber >= start && this.randomNumber <= end ? "red" : "black"
      });

      start = end + 1;
    }
    return cupsArray;
  }

  increaseCount() {
    if (this.count >= 10)
      return;

    this.count++;

    this.countChanged.emit(this.count);
  }

  decreaseCount() {
    if (this.count == 0)
      return;

    this.count--;

    this.countChanged.emit(this.count);
  }
}
