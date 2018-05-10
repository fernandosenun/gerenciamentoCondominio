import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { FormularioPautaComponent } from "./pauta/formulario-pauta/formulario-pauta.component";
import { FormularioLazerComponent } from "./lazer/formulario-lazer/formulario-lazer.component";
import { FormularioAtaComponent } from "./ata/formulario-ata/formulario-ata.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'formulario-pauta', component: FormularioPautaComponent},
    { path: 'formulario-lazer', component: FormularioLazerComponent},
    { path: 'formulario-ata', component: FormularioAtaComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutesModulo {

}