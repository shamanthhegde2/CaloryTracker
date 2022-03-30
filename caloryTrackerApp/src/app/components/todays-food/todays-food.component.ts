import { Component, OnInit } from '@angular/core';
import { Food } from '../../../Food';
import { UiServiceService } from '../../services/ui-service.service';
@Component({
  selector: 'app-todays-food',
  templateUrl: './todays-food.component.html',
  styleUrls: ['./todays-food.component.css'],
})
export class TodaysFoodComponent implements OnInit {
  totalCalories: number = 0;
  foods: Food[] = [];
  constructor(private uiService: UiServiceService) {
    uiService.onTodayFood().subscribe((f) => {
      this.foods = f;
      this.totalCalories = 0;
      this.foods.forEach((f) => {
        this.totalCalories += f.calories * f.count;
      });
    });
  }

  ngOnInit(): void {}
}
