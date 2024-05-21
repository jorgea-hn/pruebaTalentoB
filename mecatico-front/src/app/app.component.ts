import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderFormComponentComponent } from './order-form-component/order-form-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrderFormComponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mecatico-front';
}
