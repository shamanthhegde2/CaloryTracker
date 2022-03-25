import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from 'src/Food';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css'],
})
export class FoodFormComponent implements OnInit {
  constructor() {}
  name!: string;
  calories!: number;
  image!: string;
  foodItem!: Food;
  @Output() submitClicked = new EventEmitter();
  ngOnInit(): void {}

  formSubmitted() {
    if (!this.name) return;
    this.foodItem = {
      name: this.name,
      calories: this.calories,
      image: this.image,
      count: 1,
    };
    this.submitClicked.emit(this.foodItem);
  }
}
