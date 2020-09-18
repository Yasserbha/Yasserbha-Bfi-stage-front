import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DemandStage } from '../Model/DemandStage.Model';
import { StageService } from '../services/stage.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-modif-demande',
  templateUrl: './modif-demande.component.html',
  styleUrls: ['./modif-demande.component.css']
})
export class ModifDemandeComponent implements OnInit {

  constructor(private satgeservices: StageService , private router:Router , private activeroute:ActivatedRoute) { }

  StageDemande: DemandStage;
  public currantDemande: any;

  title = 'File-Upload-Save';
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
 private url:string ;


  ngOnInit() {
    this.url =this.activeroute.snapshot.params.id;
    console.log(this.activeroute.snapshot.params.id);
    this.satgeservices.getdemandebyid(this.activeroute.snapshot.params.id).subscribe(
      res => {
        this.currantDemande = res;
      },
      err => {
        console.log(err);
      }
    );

  }

  change($event) {
    this.changeImage = true;
  }
  changedImage(event) {
    this.selectedFile = event.target.files[0];
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
      this.satgeservices.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
         alert('File Successfully Uploaded');
      }
      this.selectedFiles = undefined;
     }
    );
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


 onupdateDemandeStage(data:any){
      console.log(this.currantDemande.id);

     this.satgeservices.testupdateDemande(this.currantDemande.id,data)
       .subscribe(res =>{  this.router.navigateByUrl("/DemandeSatge");alert("mise ajour effectuée avec succés")},err=>{console.log(err);});
   }

}
