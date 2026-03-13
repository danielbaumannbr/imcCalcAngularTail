import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';//Importa o FormsModule para usar ngModel
import { CommonModule } from '@angular/common';//importa o CommonModule para usar ngIf e ngFor


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculadoraimc');

   //protected readonly title = signal('calculador-imc');
peso: number = 0;
altura: number = 0
resultado: number = 0;
classificacao: string = '';

calcularIMC(){
  if(this.altura > 0 && this.peso > 0){
    this.resultado = this.peso / (this.altura * this.altura);
    if(this.resultado < 18.5){
      this.classificacao = 'Abaixo do peso';
    } else if(this.resultado >= 18.5 && this.resultado < 25){
      this.classificacao = 'Peso normal';
    } else if(this.resultado >= 25 && this.resultado < 30){
      this.classificacao = 'Sobrepeso';
    } else if(this.resultado >= 30 && this.resultado < 35){
      this.classificacao = 'Obesidade grau 1';
    } else if(this.resultado >= 35 && this.resultado < 40){
      this.classificacao = 'Obesidade grau 2';
    } else {
      this.classificacao = 'Obesidade grau 3';
    } 
}

}
}
