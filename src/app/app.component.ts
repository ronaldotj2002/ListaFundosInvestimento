import { Component } from '@angular/core';
import { AppComponentService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fundos de investumento';
  listar: any;
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
  paramFiltroApMinima: any;
  busca: any;
  filtroCheckBox: any;
  valorAplicacao: any;
  selectCheckBox:any = []; 

  ngOnInit() {
    this.listarDados(this.listar, '');        
  }

  constructor (private appService: AppComponentService ) {}
  
  listarDados(filtro:any, tipoFiltro:string ) {
   
    this.appService.getDados().subscribe(
      (res) => {
        this.listaDados = res;    
        
        //FILTRO APLICAÇÃO MÍNIMA
        if(filtro && 'AplicacaoMinima') {
          this.valorAplicacao = filtro
          console.log("filtro", this.valorAplicacao)
          this.listaDados = this.listaDados.filter((valor:any) => valor.operability.minimum_initial_application_amount <= filtro)
        }

        //FILTRO PERFIL RISCO
        if(filtro && 'PerfilRisco') {
          this.listaDados = this.listaDados.filter((valor:any) => valor.specification.fund_risk_profile.score_range_order <= filtro)
        }

        //FILTRO PRAZO DE RESGATE
        if(filtro && 'PrazoResgate') {
          this.listaDados = this.listaDados.filter((valor:any) => valor.operability.retrieval_quotation_days <= filtro)
        }
        
        //CHECKBOX 
        this.checkRendaFixa = this.listaDados.map((strategy: any) => {       
          return {label: strategy.specification.fund_macro_strategy.name,  value: strategy.specification.fund_main_strategy.name }      
        }) 

        //LABEL CHECKBOX 
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

        //REMOVENDO LABELS REPETIDAS
        this.listaCheckBoxRf = [...new Set (this.filtroRfixa)]
        this.listaCheckBoxEd = [...new Set (this.filtroEdif)]
        this.listaCheckBoxRv = [...new Set (this.filtroRvariavel)]

      })      
  }

    // ESCUTANDO O COMPONENTE FILHO - (aplicacao-minima-component)
    recebeFiltroAm(e:any) {
      this.listarDados(e, 'AplicacaoMinima');      
    }

    // ESCUTANDO O COMPONENTE FILHO - (perfil-de-risco-component)
    recebeFiltroPr(e:any) {
      this.listarDados(e, 'PerfilRisco');;
    }

    // ESCUTANDO O COMPONENTE FILHO - (prazo-resgate-component)
    recebeFiltroPrazo(e:any) {
      this.listarDados(e, 'PrazoResgate')
    }
    
    checked(e:any){
        this.filtroCheckBox = e.target.value
        this.selectCheckBox.push(this.filtroCheckBox)
        
        console.log("checked", this.selectCheckBox)
      }
   


}
