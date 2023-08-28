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
  texto: string="Resultado:";

  IMC()
  {
    if(this.altura == 0)
    {
      this.resultado = 0;
    }
    else
    {
      this.resultado = this.peso/(this.altura*this.altura);
    }
  }
}

