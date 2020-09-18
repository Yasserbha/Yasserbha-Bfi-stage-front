import { Component, OnInit } from '@angular/core';
import { StageService } from '../services/stage.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-stagiaire',
  templateUrl: './ajout-stagiaire.component.html',
  styleUrls: ['./ajout-stagiaire.component.css']
})




export class AjoutStagiaireComponent implements OnInit {

 niveau=['licence','Master','Cycle_ingenieur']

 title = 'File-Upload-Save';
  selectedFiles: FileList;
  selectedFiles2: FileList;

  currentFileUpload: File;
  currentFileUpload2: File;

  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  selectedFile2 = null;
  changeImage = false;
  changeImage2 = false;


  constructor(private stageservice:StageService , private router:Router) { }
  ngOnInit() {

  }

  change($event) {
    this.changeImage = true;
  }
  change2($event) {
    this.changeImage2 = true;
  }
  changedImage(event) {
    this.selectedFile = event.target.files[0];
  }
  changedImage2(event) {
    this.selectedFiles2 = event.target.files[0];
  }

  downloadFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '_File_Saved_Path');
    link.setAttribute('download', 'file_name.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
      this.stageservice.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {

      }
      this.selectedFiles = undefined;
     }
    );
  }
  upload2() {
    this.progress.percentage = 0;
    this.currentFileUpload2 = this.selectedFiles2.item(0);
      this.stageservice.pushFile2ToStorage(this.currentFileUpload2).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {

      }
      this.selectedFiles2 = undefined;
     }
    );
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  selectFile2(event2) {
    this.selectedFiles2 = event2.target.files;
  }


 onSaveDemandeStage(data:any){
      console.log(data);
      this.upload2();
      this.upload()


     this.stageservice.SaveDemande(this.stageservice.host+"/add-StageDemande",data)
       .subscribe(res =>{  this.router.navigateByUrl("/DemandeSatge");},err=>{console.log(err);});
   }

}


