import { Component, OnInit } from '@angular/core';
import { StageService } from '../services/stage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscription-stagiaire',
  templateUrl: './inscription-stagiaire.component.html',
  styleUrls: ['./inscription-stagiaire.component.css']
})
export class InscriptionStagiaireComponent implements OnInit {

  constructor(private stageservice:StageService , private router:Router) { }

  ngOnInit() {
  }

  onSaveStagiaire(data:any){
    this.stageservice.SaveStagaire(this.stageservice.host+"/add-Stagiaire",data)
      .subscribe(res =>{ console.log(res); this.router.navigateByUrl("/AjoutStagiaire");},err=>{console.log(err);});


   }

}
