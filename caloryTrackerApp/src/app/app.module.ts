import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodItemComponent } from './components/food-item/food-item.component';
import { FoodFormComponent } from './components/food-form/food-form.component';
import { TodaysFoodComponent } from './components/todays-food/todays-food.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodListComponent,
    FoodItemComponent,
    FoodFormComponent,
    TodaysFoodComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
