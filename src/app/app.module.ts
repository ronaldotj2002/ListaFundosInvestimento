import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import ptBr from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AplicacaoMinimaComponentComponent } from './aplicacao-minima-component/aplicacao-minima-component.component';
import { PrazoResgateComponentComponent } from './prazo-resgate-component/prazo-resgate-component.component';
import { PerfilDeRiscoComponentComponent } from './perfil-de-risco-component/perfil-de-risco-component.component';
import {NgArrayPipesModule} from 'ngx-pipes';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgxTippyModule } from 'ngx-tippy-wrapper';



registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    AplicacaoMinimaComponentComponent,
    PrazoResgateComponentComponent,
    PerfilDeRiscoComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgArrayPipesModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxTippyModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
