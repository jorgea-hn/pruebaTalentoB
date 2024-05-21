import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import jsPDF from "jspdf"

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [],
  templateUrl: './order-form-component.component.html',
  styleUrl: './order-form-component.component.css'
})
export class OrderFormComponentComponent {
  submitOrder(): void {
    const cedula = (document.getElementById('cedula') as HTMLInputElement).value;
    const telefono = (document.getElementById('telefono') as HTMLInputElement).value;
    const producto1 = (document.getElementById('producto1') as HTMLInputElement).value;
    const producto2 = (document.getElementById('producto2') as HTMLInputElement).value;
    const producto3 = (document.getElementById('producto3') as HTMLInputElement).value;

    const doc = new jsPDF();

    doc.text("MECATICO COMPANY",30,10);
    doc.text('Orden de compra', 10, 20);
    doc.text("-----------------------------------------------------",10,30)
    doc.text('Cédula o NIT: ' + cedula, 10, 40);
    doc.text('Teléfono: ' + telefono, 10, 50);
    doc.text("-----------------------------------------------------",10,60)
    doc.text('Producto 1: ' + producto1, 10, 70);
    doc.text('Producto 2: ' + producto2, 10, 80);
    doc.text('Producto 3: ' + producto3, 10, 90);
    doc.text("-----------------------------------------------------",10,100)


    doc.save('formulario_pedido.pdf');

    alert("Orden Generada")
  }
}
