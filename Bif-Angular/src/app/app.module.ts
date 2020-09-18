import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Control } from './control';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutStagiaireComponent } from './ajout-stagiaire/ajout-stagiaire.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InscriptionStagiaireComponent } from './inscription-stagiaire/inscription-stagiaire.component';
import { FormsModule, ReactiveFormsModule }from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemandeStagiaireComponent } from './demande-stagiaire/demande-stagiaire.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModifDemandeComponent } from './modif-demande/modif-demande.component';
import { ListeLivrableComponent } from './liste-livrable/liste-livrable.component';
@NgModule({
  declarations: [
    AppComponent,
    AjoutStagiaireComponent,
    NavBarComponent,
    InscriptionStagiaireComponent,
    DemandeStagiaireComponent,
    FooterComponent,
    ModifDemandeComponent,
    ListeLivrableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Control,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
