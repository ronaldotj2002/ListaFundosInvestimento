import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aplicacao-minima-component',
  templateUrl: './aplicacao-minima-component.component.html',
  styleUrls: ['./aplicacao-minima-component.component.css']
})
export class AplicacaoMinimaComponentComponent implements OnInit {

  
  @Output() filtroAplicacaoMinima = new EventEmitter<any>();

  aplicacaoMinima: any = 500000;
  valores = [
    {'label': 0, 'value': 0},
    {'label': 1, 'value': 1.00}, 
    {'label': 2, 'value': 100.00},
    {'label': 3, 'value': 200.00},
    {'label': 4, 'value': 250.00},
    {'label': 5, 'value': 500.00},
    {'label': 6, 'value': 1000.00},
    {'label': 7, 'value': 2000.00},
    {'label': 8, 'value': 2500.00},
    {'label': 9, 'value': 3000.00},
    {'label': 10, 'value': 5000.00},
    {'label': 11, 'value': 10000.00},
    {'label': 12, 'value': 15000.00},
    {'label': 13, 'value': 20000.00},
    {'label': 14, 'value': 25000.00},
    {'label': 15, 'value': 30000.00},
    {'label': 16, 'value': 50000.00},
    {'label': 17, 'value': 100000.00},
    {'label': 18, 'value': 500000.00},    
  ];
  
  constructor() { }

  ngOnInit(): void {
    
  }

  valorAplicacao(valor:any) {      
    const apMinima = valor.target.value
    switch (apMinima) {
      case '0':
        this.aplicacaoMinima = this.valores[0].value;
        break;
      case '1':
        this.aplicacaoMinima = this.valores[1].value;
        break;
      case '2':
        this.aplicacaoMinima = this.valores[2].value;
        break;
      case '3':
        this.aplicacaoMinima = this.valores[3].value;
        break;
      case '4':
        this.aplicacaoMinima = this.valores[4].value;
        break;
      case '5':
        this.aplicacaoMinima = this.valores[5].value;
        break;
      case '6':
        this.aplicacaoMinima = this.valores[6].value;
        break;
      case '7':
        this.aplicacaoMinima = this.valores[7].value;
        break;
      case '8':
        this.aplicacaoMinima = this.valores[8].value;
        break;
      case '9':
        this.aplicacaoMinima = this.valores[9].value;
        break;
      case '10':
        this.aplicacaoMinima = this.valores[10].value;
        break;
      case '11':
        this.aplicacaoMinima = this.valores[11].value;
        break;
      case '12':
        this.aplicacaoMinima = this.valores[12].value;
        break;
      case '13':
        this.aplicacaoMinima = this.valores[13].value;
        break;
      case '14':
        this.aplicacaoMinima = this.valores[14].value;
        break;
      case '15':
        this.aplicacaoMinima = this.valores[15].value;
        break;
      case '16':
        this.aplicacaoMinima = this.valores[16].value;
        break;
      case '17':
        this.aplicacaoMinima = this.valores[17].value;
        break;
      case '18':
        this.aplicacaoMinima = this.valores[18].value;
        break;
      default:
        console.log("Esse valor n??o existe");
        break;
    }
    this.filtroAplicacaoMinima.emit(this.aplicacaoMinima)
     
  }


}
