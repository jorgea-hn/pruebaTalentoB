import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [],
  templateUrl: './order-form-component.component.html',
  styleUrl: './order-form-component.component.css'
})
export class OrderFormComponentComponent {
  submitOrder(): void{
    alert("Orden Generada")
  }
}
