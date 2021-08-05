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
  tipoFundo: any;
  fundosRf: any = [];
  fundosRv: any = [];
  fundosEd: any = [];
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
        if(filtro && tipoFiltro === 'AplicacaoMinima') {
          this.valorAplicacao = filtro
          this.listaDados = this.listaDados.filter((valor:any) => valor.operability.minimum_initial_application_amount <= filtro)
        }

        //FILTRO PERFIL RISCO
        if(filtro && tipoFiltro === 'PerfilRisco') {
          console.log("PerfilRisco", filtro)
          this.listaDados = this.listaDados.filter((valor:any) => valor.specification.fund_risk_profile.score_range_order <= filtro)
        }

        //FILTRO PRAZO DE RESGATE
       if(filtro && tipoFiltro === 'PrazoResgate') {
          console.log("PrazoResgate", filtro)
          this.listaDados = this.listaDados.filter((valor:any) => valor.operability.retrieval_quotation_days <= filtro)
        }

        //FILTRO CHECKBOX
       if(filtro && tipoFiltro === 'checkboxRendaFixa') {
        //  this.selectRendaFixa
         console.log("checkboxRendaFixa", filtro);
       }
        
        //CHECKBOX 
        this.checkRendaFixa = this.listaDados.map((strategy: any) => {       
          return {"fundo": strategy.specification.fund_macro_strategy.name,  "estrategia": strategy.specification.fund_main_strategy.name }      
        }) 
       
        //LABEL CHECKBOX 
        this.filtroRendaFixaDuplicada = this.checkRendaFixa.forEach((str:any) => {
          if(str.fundo == "Renda Fixa") {
            this.filtroRfixa.push(str.estrategia)
            this.fundosRf.push(str.fundo)
          }
          if(str.fundo == "Estratégias Diferenciadas") {
            this.filtroEdif.push(str.estrategia)
            this.fundosRv.push(str.fundo)
          }
          if(str.fundo == "Renda Variável") {
            this.filtroRvariavel.push(str.estrategia)
            this.fundosEd.push(str.fundo)
          }
        })

        //REMOVENDO REPETIDAS
        this.listaCheckBoxRf = [...new Set (this.filtroRfixa)]
        this.listaCheckBoxEd = [...new Set (this.filtroEdif)]
        this.listaCheckBoxRv = [...new Set (this.filtroRvariavel)]
        const rendaFixa      = [...new Set (this.fundosRf)]
        const rendaVariavel  = [... new Set (this.fundosRv)]
        const estrategiaDife = [... new Set (this.fundosEd)]
        this.tipoFundo       = [...rendaFixa, ...rendaVariavel, ...estrategiaDife]
        
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
        this.listarDados(this.selectCheckBox, 'checkboxRendaFixa');
        
      }   

}
