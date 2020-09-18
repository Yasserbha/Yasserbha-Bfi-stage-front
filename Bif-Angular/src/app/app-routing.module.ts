import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutStagiaireComponent } from './ajout-stagiaire/ajout-stagiaire.component';
import { InscriptionStagiaireComponent } from './inscription-stagiaire/inscription-stagiaire.component';
import { DemandeStagiaireComponent } from './demande-stagiaire/demande-stagiaire.component';
import { ModifDemandeComponent } from './modif-demande/modif-demande.component';
import { ListeLivrableComponent } from './liste-livrable/liste-livrable.component';


const routes: Routes = [
  {
  path:'AjoutStagiaire',
  component: AjoutStagiaireComponent
  },
  {
     path: '',
      redirectTo: '/AjoutStagiaire',
       pathMatch: 'full'
   },
  {
    path:'Inscription',
    component: InscriptionStagiaireComponent
    },
    {
      path:'DemandeSatge',
      component: DemandeStagiaireComponent
      },
      {
        path:'modif/:id',
        component: ModifDemandeComponent
        },

        {
          path:'Livrable/:id',
          component: ListeLivrableComponent
          },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
