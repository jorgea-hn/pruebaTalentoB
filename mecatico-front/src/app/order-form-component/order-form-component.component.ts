import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from "jspdf";

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-form-component.component.html',
  styleUrls: ['./order-form-component.component.css']
})
export class OrderFormComponentComponent {
  cedula: string = '';
  telefono: string = '';
  productos: string[] = [''];

  addProduct(): void {
    this.productos.push('');
  }

  submitOrder(): void {
    if (!this.validateForm()) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }

    const orderData = {
      cedula: this.cedula,
      telefono: this.telefono,
      productos: this.productos
    }

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("MECATICO COMPANY", 30, 10);
    doc.setFontSize(16);
    doc.text('Orden de compra', 10, 20);
    doc.setFontSize(12);
    doc.text("-----------------------------------------------------", 10, 30);
    doc.text('Cédula o NIT: ' + this.cedula, 10, 40);
    doc.text('Teléfono: ' + this.telefono, 10, 50);
    doc.text("-----------------------------------------------------", 10, 60);
    this.productos.forEach((producto, index) => {
      doc.text(`Producto ${index + 1}: ${producto}`, 10, 70 + (index * 10));
    });
    doc.text("-----------------------------------------------------", 10, 70 + (this.productos.length * 10));
    doc.save('formulario_pedido.pdf');

    alert("Orden Generada");

    this.resetForm();
  }

  validateForm(): boolean {
    const numberRegex = /^[0-9]+$/;
    const letterRegex = /^[a-zA-Z\s]+$/;

    if (!numberRegex.test(this.cedula)) {
      alert('La cédula debe contener solo números.');
      return false;
    }

    if (!numberRegex.test(this.telefono)) {
      alert('El teléfono debe contener solo números.');
      return false;
    }

    for (let producto of this.productos) {
      if (!letterRegex.test(producto)) {
        alert('Los productos deben contener solo letras.');
        return false;
      }
    }

    return true;
  }


  resetForm(): void {
    this.cedula = '';
    this.telefono = '';
    this.productos = [''];
  }

  onProductChange(event: any, index: number): void {
    const inputValue = event.target.value;
    this.productos[index] = inputValue;
}





}


