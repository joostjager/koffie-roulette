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
  @Input() chance: number = 0;

  @Output() countChanged: EventEmitter<number> = new EventEmitter<number>();

  get cups() {
    return new Array(this.count);
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
