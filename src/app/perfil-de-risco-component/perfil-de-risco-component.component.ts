import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-de-risco-component',
  templateUrl: './perfil-de-risco-component.component.html',
  styleUrls: ['./perfil-de-risco-component.component.css']
})
export class PerfilDeRiscoComponentComponent implements OnInit {

  tipoRisco: number = 12;
  listaRiscos = [
    {label: 'risco-1', value: '1'},
    {label: 'risco-2', value: '2'},
    {label: 'risco-3', value: '3'},
    {label: 'risco-4', value: '4'},
    {label: 'risco-5', value: '5'},
    {label: 'risco-6', value: '6'},
    {label: 'risco-7', value: '7'},
    {label: 'risco-8', value: '8'},
    {label: 'risco-9', value: '9'},
    {label: 'risco-10', value: '10'},
    {label: 'risco-11', value: '11'},
    {label: 'risco-12', value: '12'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  filtroRiscos(risco: any) {
    this.tipoRisco = risco.target.value;
  }

}
