import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-imc',
  templateUrl: './calc-imc.component.html',
  styleUrls: ['./calc-imc.component.css'],
})
export class CalcIMCComponent {
  peso: number=0;
  altura: number=0;
  resultado: number=0;

  IMC()
  {
    this.resultado = this.peso/(this.altura*this.altura);
  }
}
