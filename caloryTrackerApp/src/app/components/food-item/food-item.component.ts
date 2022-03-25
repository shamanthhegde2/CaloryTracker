import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from 'src/Food';
import { UiServiceService } from '../../services/ui-service.service';
@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css'],
})
export class FoodItemComponent implements OnInit {
  @Input() food!: Food;
  @Output() addbtn: EventEmitter<any> = new EventEmitter();
  count: number = 1;
  st: string = 'shamanth';
  constructor(private service: UiServiceService) {}

  ngOnInit(): void {}
  addClicked(food: any) {
    if (this.count == null && this.count <= 0) return;
    console.log(food.count, this.count);
    food.count += this.count;

    this.service.addedItem(food);
  }
}
