import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  tipoFundo: any;
  fundosRf: any = [];
  fundosRv: any = [];
  fundosEd: any = [];
  selectCheckBox:any = []; 
  allRendaFixa: boolean = true;
  allEstrategiaDif: boolean = true;
  allRendaVariavel: boolean = true;
  valueRendaFixa: string = '';
  valueEstrategiaDif: string = '';
  valueRendaVariavel: string = '';
  acumuladorRendaFixa: any = [];
  acumuladorEstrategia: any = [];
  acumuladorRendaVariavel: any = [];  
  acumuladorInclusaoCheckBox: any = [];
  checkSelecionado: any = [];
  checkedRendaFixa: boolean = true;
  checkedEstrategia: boolean = true;
  checkedRendaVariavel: boolean = true;
  verificarConsulta: any = [];

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
          
          this.listaDados = this.listaDados.filter((valor:any) => valor.operability.minimum_initial_application_amount <= filtro);
          
        }

        //FILTRO PERFIL RISCO
        if(filtro && tipoFiltro === 'PerfilRisco') {
          this.listaDados = this.listaDados.filter((valor:any) => valor.specification.fund_risk_profile.score_range_order <= filtro);
        }

        //FILTRO PRAZO DE RESGATE
       if(filtro && tipoFiltro === 'PrazoResgate') {
          this.listaDados = this.listaDados.filter((valor:any) => valor.operability.retrieval_quotation_days <= filtro);
        }

        // ACUMULADORES
        this.acumuladorRendaFixa       = this.listaDados.filter((valor:any) => valor.specification.fund_macro_strategy.name == 'Renda Fixa');   
        this.acumuladorRendaVariavel   = this.listaDados.filter((valor:any) => valor.specification.fund_macro_strategy.name == 'Renda Variável');
        this.acumuladorEstrategia      = this.listaDados.filter((valor:any) => valor.specification.fund_macro_strategy.name == 'Estratégias Diferenciadas');
        this.checkSelecionado          = this.listaDados;
        
        //RENDA FIXA - REGRA CHECKBOX ALL
        if(tipoFiltro == 'rendaFixa' && this.allRendaFixa === true) {   
                    
            if(this.allRendaFixa === true && this.allEstrategiaDif === false && this.allRendaVariavel === false ) {

              this.listaDados = this.acumuladorRendaFixa;
              } 
              if(this.allRendaFixa === true && this.allEstrategiaDif === true && this.allRendaVariavel === false) {
                
                this.listaDados = [...this.acumuladorRendaFixa, ...this.acumuladorEstrategia,];  
                } 
                if(this.allRendaFixa === true && this.allEstrategiaDif === false && this.allRendaVariavel === true){

                  this.listaDados = [...this.acumuladorRendaFixa, ...this.acumuladorRendaVariavel];  
                }
                if(this.allRendaFixa === true && this.allEstrategiaDif === true && this.allRendaVariavel === true) {

                  this.listaDados = [...this.acumuladorRendaFixa, ...this.acumuladorEstrategia, ...this.acumuladorRendaVariavel];
                }
         
        } 
        else if(tipoFiltro == 'rendaFixa' && this.allRendaFixa === false) {
            
          if(this.allRendaFixa === false && this.allEstrategiaDif === true && this.allRendaVariavel === true ) {

              this.listaDados = [...this.acumuladorEstrategia, ...this.acumuladorRendaVariavel,]; 
              }
              if(this.allRendaFixa === false && this.allEstrategiaDif === true && this.allRendaVariavel === false) {

                this.listaDados = this.acumuladorEstrategia;
              }
              if(this.allRendaFixa === false && this.allEstrategiaDif === false && this.allRendaVariavel === true) {

                this.listaDados = this.acumuladorRendaVariavel; 
              }
              if(this.allRendaFixa === false && this.allEstrategiaDif === false && this.allRendaVariavel === false) {

                this.listaDados = []; 
                this.verificarConsulta = this.listaDados;
              }
              
            }// END RENDA FIXA

        //ESTRATÉGIA DIFERENCIADA - REGRA CHECKBOX ALL    
        if(tipoFiltro == 'estrategiaDiferenciada' && this.allEstrategiaDif === true) {   
          
          if(this.allEstrategiaDif === true && this.allRendaFixa === false && this.allRendaVariavel === false ) {

            this.listaDados = this.acumuladorRendaVariavel;
            } 
            if(this.allEstrategiaDif === true && this.allRendaFixa === true && this.allRendaVariavel === false) {
              
              this.listaDados = [...this.acumuladorEstrategia, ...this.acumuladorRendaFixa];  
              } 
              if(this.allEstrategiaDif === true && this.allRendaFixa === false && this.allRendaVariavel === true) {

                this.listaDados = [...this.acumuladorEstrategia, ...this.acumuladorRendaVariavel];  
              }
              if(this.allEstrategiaDif === true && this.allRendaFixa === true && this.allRendaVariavel === true) {

                this.listaDados = [...this.acumuladorEstrategia, ...this.acumuladorRendaFixa, ...this.acumuladorRendaVariavel];
              } 
                     
        } else if(tipoFiltro == 'estrategiaDiferenciada' && this.allEstrategiaDif === false) {
          
          if(this.allRendaFixa === true && this.allEstrategiaDif === false && this.allRendaVariavel === true ) {

            this.listaDados = [...this.acumuladorRendaFixa, ...this.acumuladorRendaVariavel,]; 
            }
            if(this.allRendaFixa === false && this.allEstrategiaDif === false && this.allRendaVariavel === true) {

              this.listaDados = this.acumuladorRendaVariavel;
            }
            if(this.allRendaFixa === true && this.allEstrategiaDif === false && this.allRendaVariavel === false) {
              
              this.listaDados = this.acumuladorRendaFixa; 
            }
            if(this.allRendaFixa === false && this.allEstrategiaDif === false && this.allRendaVariavel === false) {
              
              this.listaDados = []; 
              this.verificarConsulta = this.listaDados;
            }
        }//END ESTRATÉGIA DIFERENCIADA 


        //RENDA VARIÁVEL - REGRA CHECKBOX ALL
        if(tipoFiltro == 'rendaVariavel' && this.allRendaVariavel === true) {   
          
          if(this.allRendaVariavel === true && this.allRendaFixa === false && this.allEstrategiaDif === false ) {

            this.listaDados = this.acumuladorRendaVariavel;
            } 
            if(this.allRendaVariavel === true && this.allRendaFixa === true && this.allEstrategiaDif === false) {
              
              this.listaDados = [...this.acumuladorRendaVariavel, ...this.acumuladorRendaFixa];  
              } 
              if(this.allRendaVariavel === true && this.allRendaFixa === false && this.allEstrategiaDif === true) {

                this.listaDados = [...this.acumuladorRendaVariavel, ...this.acumuladorEstrategia]; 
              }
              if(this.allRendaVariavel === true && this.allRendaFixa === true && this.allEstrategiaDif === true) {

                this.listaDados = [...this.acumuladorRendaVariavel, ...this.acumuladorRendaFixa, ...this.acumuladorEstrategia];
              } 
       
        } 
        else if(tipoFiltro == 'rendaVariavel' && this.allRendaVariavel === false) {
          
          if(this.allRendaVariavel === false && this.allEstrategiaDif === false && this.allRendaFixa === true ) {

            this.listaDados = this.acumuladorRendaFixa;
            }
            if(this.allRendaVariavel === false && this.allEstrategiaDif === true && this.allRendaFixa === true) {

              this.listaDados = [...this.acumuladorEstrategia, ...this.acumuladorRendaFixa];
            }
            if(this.allRendaVariavel === false && this.allEstrategiaDif === true && this.allRendaFixa=== false) {

              this.listaDados = this.acumuladorEstrategia ;
            }
            if(this.allRendaVariavel === false && this.allEstrategiaDif === false && this.allRendaFixa=== false) {

              this.listaDados = [];
              this.verificarConsulta = this.listaDados;
            }
            
        }//END RENDA VARIÁVEL        

        //CHECKBOX 
        this.checkRendaFixa = this.listaDados.map((strategy: any) => {       
          return {"fundo": strategy.specification.fund_macro_strategy.name,  "estrategia": strategy.specification.fund_main_strategy.name }      
        }); 

        //LABEL CHECKBOX 
        this.filtroRendaFixaDuplicada = this.checkRendaFixa.forEach((str:any) => {
          if(str.fundo == "Renda Fixa") {
            this.filtroRfixa.push(str.estrategia);
            this.fundosRf.push(str.fundo);
          }
          if(str.fundo == "Estratégias Diferenciadas") {
            this.filtroEdif.push(str.estrategia);
            this.fundosRv.push(str.fundo);
          }
          if(str.fundo == "Renda Variável") {
            this.filtroRvariavel.push(str.estrategia);
            this.fundosEd.push(str.fundo);
          }
        });

        //REMOVENDO REPETIDAS
        this.listaCheckBoxRf = [...new Set (this.filtroRfixa)];
        this.listaCheckBoxEd = [...new Set (this.filtroEdif)];
        this.listaCheckBoxRv = [...new Set (this.filtroRvariavel)];
        const rendaFixa      = [...new Set (this.fundosRf)];
        const rendaVariavel  = [... new Set (this.fundosRv)];
        const estrategiaDife = [... new Set (this.fundosEd)];
        this.tipoFundo       = [...rendaFixa, ...rendaVariavel, ...estrategiaDife];
      },(err) => console.error("Erro ao conectar o serviço", err));    
  }

    // ESCUTANDO O COMPONENTE FILHO - (aplicacao-minima-component)
    recebeFiltroAm(e:any) {
      this.listarDados(e, 'AplicacaoMinima');      
    }

    // ESCUTANDO O COMPONENTE FILHO - (perfil-de-risco-component)
    recebeFiltroPr(e:any) {
      this.listarDados(e, 'PerfilRisco');
    }

    // ESCUTANDO O COMPONENTE FILHO - (prazo-resgate-component)
    recebeFiltroPrazo(e:any) {
      this.listarDados(e, 'PrazoResgate');
    }

    checkBoxIndividual(e:any) {
      this.filtroCheckBox = e.target.value;
      this.acumuladorInclusaoCheckBox  = this.listaDados;
      
      if(e.target.checked === true) {
        const dados = this.checkSelecionado.filter((valor:any) => valor.specification.fund_main_strategy.name === this.filtroCheckBox);
        
        this.listaDados = this.listaDados = [...this.acumuladorInclusaoCheckBox, ...dados];
        
      } else {
        this.listaDados = this.listaDados.filter((valor:any) => valor.specification.fund_main_strategy.name != this.filtroCheckBox);
        this.acumuladorInclusaoCheckBox = this.listaDados;
      }     

    }

    removeItemCheckBox (e:any) {
      let indice = this.selectCheckBox.indexOf(e);
      this.selectCheckBox.slice(indice);
      
    }
    
    checkedSelecionado(e:any){        

        this.valueRendaFixa = e.target.value;
        this.valueEstrategiaDif = e.target.value;
        this.valueRendaVariavel = e.target.value;
        
        if(this.valueRendaFixa === 'rendaFixa') {
          this.listarDados(this.allRendaFixa, e.target.value);
          this.checkedRendaFixa = !this.checkedRendaFixa;
        }

        if(this.valueEstrategiaDif === 'estrategiaDiferenciada') {
          this.listarDados(this.allEstrategiaDif, e.target.value);
          this.checkedEstrategia = !this.checkedEstrategia;
        }

        if(this.valueRendaVariavel == 'rendaVariavel') {
          this.listarDados(this.allRendaVariavel, e.target.value);
          this.checkedRendaVariavel = !this.checkedRendaVariavel;
        }
        
      }   

}
