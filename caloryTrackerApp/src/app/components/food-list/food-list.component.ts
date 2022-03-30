import { Component, OnInit } from '@angular/core';
import { foodItems } from '../../../FoodItems';
import { Food } from '../../../Food';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foods: Food[] = [];
  food?: any;
  count!: any;
  showForm: boolean = false;
  search: string = '';
  constructor() {}

  ngOnInit(): void {
    if (!this.search) this.foods = foodItems;
  }
  addNewFood() {
    //false->true
    this.showForm = !this.showForm;
  }
  newFood(food: any) {
    this.foods.push(food);
  }
  searchChange() {
    if (!this.search) this.foods = foodItems;
    else
      this.foods = foodItems.filter((f) =>
        f.name.toLowerCase().startsWith(this.search.toLowerCase())
      );
  }
}
