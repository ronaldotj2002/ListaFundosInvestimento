import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prazo-resgate-component',
  templateUrl: './prazo-resgate-component.component.html',
  styleUrls: ['./prazo-resgate-component.component.css']
})
export class PrazoResgateComponentComponent implements OnInit {
  @Output() filtroPrazoResgate = new EventEmitter();

  prazoDeResgate : number = 270;
  prazoDias = [
    {'label': 0, 'value': 0},
    {'label': 1, 'value': 1}, 
    {'label': 2, 'value': 2},
    {'label': 3, 'value': 3},
    {'label': 4, 'value': 4},
    {'label': 5, 'value': 5},
    {'label': 6, 'value': 6},
    {'label': 7, 'value': 7},
    {'label': 8, 'value': 8},
    {'label': 9, 'value': 9},
    {'label': 10, 'value': 10},
    {'label': 11, 'value': 12},
    {'label': 12, 'value': 13},
    {'label': 13, 'value': 14},
    {'label': 14, 'value': 15},
    {'label': 15, 'value': 17},
    {'label': 16, 'value': 18},
    {'label': 17, 'value': 19},
    {'label': 18, 'value': 20},   
    {'label': 19, 'value': 21},
    {'label': 20, 'value': 27}, 
    {'label': 21, 'value': 28},
    {'label': 22, 'value': 29},
    {'label': 23, 'value': 30},
    {'label': 24, 'value': 31},
    {'label': 25, 'value': 32},
    {'label': 26, 'value': 33},
    {'label': 27, 'value': 35},
    {'label': 28, 'value': 37},
    {'label': 29, 'value': 42},
    {'label': 30, 'value': 44},
    {'label': 31, 'value': 45},
    {'label': 32, 'value': 50},
    {'label': 33, 'value': 57},
    {'label': 34, 'value': 58},
    {'label': 35, 'value': 59},
    {'label': 36, 'value': 60},
    {'label': 37, 'value': 65}, 
    {'label': 38, 'value': 70},
    {'label': 39, 'value': 89},
    {'label': 40, 'value': 90},
    {'label': 41, 'value': 91},
    {'label': 42, 'value': 119},
    {'label': 43, 'value': 120},
    {'label': 44, 'value': 150},
    {'label': 45, 'value': 179},
    {'label': 46, 'value': 180},
    {'label': 47, 'value': 270},
  ];


  constructor() { }

  ngOnInit(): void {
  }

  resgate(prazo: any) {
    const pResgate = prazo.target.value;
    switch (pResgate) {
      case '0':
        this.prazoDeResgate = this.prazoDias[0].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '1':
        this.prazoDeResgate = this.prazoDias[1].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '2':
        this.prazoDeResgate = this.prazoDias[2].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '3':
        this.prazoDeResgate = this.prazoDias[3].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '4':
        this.prazoDeResgate = this.prazoDias[4].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '5':
        this.prazoDeResgate = this.prazoDias[5].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '6':
        this.prazoDeResgate = this.prazoDias[6].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '7':
        this.prazoDeResgate = this.prazoDias[7].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '8':
        this.prazoDeResgate = this.prazoDias[8].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '9':
        this.prazoDeResgate = this.prazoDias[9].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '10':
        this.prazoDeResgate = this.prazoDias[10].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '11':
        this.prazoDeResgate = this.prazoDias[11].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '12':
        this.prazoDeResgate = this.prazoDias[12].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '13':
        this.prazoDeResgate = this.prazoDias[13].value;
        this.filtroPrazo(this.prazoDeResgate)
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '14':
        this.prazoDeResgate = this.prazoDias[14].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '15':
        this.prazoDeResgate = this.prazoDias[15].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '16':
        this.prazoDeResgate = this.prazoDias[16].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '17':
        this.prazoDeResgate = this.prazoDias[17].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '18':
        this.prazoDeResgate = this.prazoDias[18].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '19':
        this.prazoDeResgate = this.prazoDias[19].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '20':
        this.prazoDeResgate = this.prazoDias[20].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '21':
        this.prazoDeResgate = this.prazoDias[21].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '22':
        this.prazoDeResgate = this.prazoDias[22].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '23':
        this.prazoDeResgate = this.prazoDias[23].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '24':
        this.prazoDeResgate = this.prazoDias[24].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '25':
        this.prazoDeResgate = this.prazoDias[25].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '26':
        this.prazoDeResgate = this.prazoDias[26].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '27':
        this.prazoDeResgate = this.prazoDias[27].value;
        break;
      case '28':
        this.prazoDeResgate = this.prazoDias[28].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '29':
        this.prazoDeResgate = this.prazoDias[29].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '30':
        this.prazoDeResgate = this.prazoDias[30].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '31':
        this.prazoDeResgate = this.prazoDias[31].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '32':
        this.prazoDeResgate = this.prazoDias[32].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '33':
        this.prazoDeResgate = this.prazoDias[33].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '34':
        this.prazoDeResgate = this.prazoDias[34].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '35':
        this.prazoDeResgate = this.prazoDias[35].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '36':
        this.prazoDeResgate = this.prazoDias[36].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '37':
        this.prazoDeResgate = this.prazoDias[37].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '38':
        this.prazoDeResgate = this.prazoDias[38].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '39':
        this.prazoDeResgate = this.prazoDias[39].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '40':
        this.prazoDeResgate = this.prazoDias[40].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '41':
        this.prazoDeResgate = this.prazoDias[41].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '42':
        this.prazoDeResgate = this.prazoDias[42].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '43':
        this.prazoDeResgate = this.prazoDias[43].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '44':
        this.prazoDeResgate = this.prazoDias[44].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '45':
        this.prazoDeResgate = this.prazoDias[45].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '46':
        this.prazoDeResgate = this.prazoDias[46].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      case '47':
        this.prazoDeResgate = this.prazoDias[47].value;
        this.filtroPrazo(this.prazoDeResgate)
        break;
      

      default:
        console.log("Esse valor não existe");
        break;
    }
  }
  filtroPrazo(prazo:any) {
    // this.prazoDeResgate = prazo.target.value; 
    this.filtroPrazoResgate.emit(this.prazoDeResgate)
  }

}
