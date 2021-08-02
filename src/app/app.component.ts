import { Component } from '@angular/core';
import { AppComponentService } from './app.component.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Orama';
  listaDados:  any;
  checkRendaFixa: any;
  checkEstrategiasDif: any;
  filtroRendaFixaDuplicada: any;
  listaCheckBoxRf: any;
  listaCheckBoxEd: any;
  listaCheckBoxRv: any;
  valorCheckRf: any;
  valorCheckEd: any;
  selectAll: any;
  filtroRfixa: any = [];
  filtroEdif: any = [];
  filtroRvariavel: any = [];
   
  ngOnInit() {
    this.listarDados();
    
  }

  constructor (private appService: AppComponentService ) {}

  async listarDados() {
    this.appService.getDados().subscribe(
      (res) => {
        this.listaDados = res;
      
         this.checkRendaFixa = this.listaDados.map((strategy: any) => {       
          return {label: strategy.specification.fund_macro_strategy.name,  value: strategy.specification.fund_main_strategy.name }      
        }) 

        this.filtroRendaFixaDuplicada = this.checkRendaFixa.forEach((str:any) => {
          if(str.label == "Renda Fixa") {
            this.filtroRfixa.push(str.value)
          }
          if(str.label == "Estratégias Diferenciadas") {
            this.filtroEdif.push(str.value)
          }
          if(str.label == "Renda Variável") {
            this.filtroRvariavel.push(str.value)
          }
          
        })
        this.listaCheckBoxRf = [...new Set (this.filtroRfixa)]
        this.listaCheckBoxEd = [...new Set (this.filtroEdif)]
        this.listaCheckBoxRv = [...new Set (this.filtroRvariavel)]
        console.log("FOI Renda Fixa", this.listaCheckBoxRf)
        console.log("FOI Estratégias Diferenciadas", this.listaCheckBoxEd)
        console.log("FOI Renda Variável", this.listaCheckBoxRv)

      })
    }

    
     
   


}
