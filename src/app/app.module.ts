import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { FormularioPautaComponent } from './pauta/formulario-pauta/formulario-pauta.component';
import { FormularioAtaComponent } from './ata/formulario-ata/formulario-ata.component';
import { FormularioLazerComponent } from './lazer/formulario-lazer/formulario-lazer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutesModulo } from './app.routes.modulo';


@NgModule({
  declarations: [
    AppComponent,
    FormularioPautaComponent,
    FormularioAtaComponent,
    FormularioLazerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModulo,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
