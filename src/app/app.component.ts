import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openAssignment';
  value:string;
  toppings = new FormControl();

  toppingList: string[] = ['3 Months', '6 Months', '9 Months', '1 Year', '1 Year 3 Months', '1 Year 6 Months'];
}
