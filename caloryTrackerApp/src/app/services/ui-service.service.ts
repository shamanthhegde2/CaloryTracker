import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Food } from '../../Food';
@Injectable({
  providedIn: 'root',
})
export class UiServiceService {
  AddedItems: Food[] = [];
  private subject = new Subject();
  constructor() {}
  addedItem(food: Food) {
    const fd = this.AddedItems.find((f) => f.name == food.name);
    if (!fd) {
      this.AddedItems.push(food);
    }
    this.subject.next(this.AddedItems);
  }
  onTodayFood(): Observable<any> {
    return this.subject.asObservable();
  }
}
