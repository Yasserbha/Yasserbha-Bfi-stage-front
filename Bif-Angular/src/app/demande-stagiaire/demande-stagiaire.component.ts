import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StageService } from "../services/stage.service";
import { DemandStage } from "../Model/DemandStage.Model";
import { Router } from '@angular/router';

@Component({
  selector: "app-demande-stagiaire",
  templateUrl: "./demande-stagiaire.component.html",
  styleUrls: ["./demande-stagiaire.component.css"]
})
export class DemandeStagiaireComponent implements OnInit {
  public StageDemande: any;
  public currantDemande: any;
  constructor(public satgeservices: StageService , private router:Router) {}

  ngOnInit() {}

  ongetDemande() {
    this.satgeservices.getdemande().subscribe(
      data => {
        this.StageDemande = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onChercher(form: any) {
    if(form.type && form.nom && form.status ){
    this.satgeservices.GetDemandeparNameType(form.nom,form.type,form.status).subscribe(
      data => {
        this.StageDemande = data;
      },
      err => {
        console.log(err);
      }
    );}if(form.type && form.status){

      this.satgeservices.GetDemandeparetatrole(form.type,form.status).subscribe(
        data => {
          this.StageDemande = data;
        },
        err => {
          console.log(err);
        }
      );
     }if(form.nom){

      this.satgeservices.GetDemandeparName(form.nom).subscribe(
        data => {
          this.StageDemande = data;
        },
        err => {
          console.log(err);
        }
      );
     }else{
       alert("Aucune personne n'est trouvé")
     }
  }

  onDelete(StageDemande: any) {
    let conf = confirm("Etez vous sure ?");
    if (conf) {
      this.satgeservices.getDelete(StageDemande.id).subscribe(
        data => {
          this.StageDemande = data;
          this.ongetDemande();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  onDetails(StageDemande: DemandStage) {
    this.satgeservices.getDetails(StageDemande.id).subscribe(
      res => {
        this.currantDemande = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  onModif(StageDemande: DemandStage){
    this.router.navigateByUrl("/modif/"+StageDemande.id)
  }
  onLivrable(StageDemande: DemandStage){
    this.router.navigateByUrl("/Livrable/"+StageDemande.id)

  }
}
