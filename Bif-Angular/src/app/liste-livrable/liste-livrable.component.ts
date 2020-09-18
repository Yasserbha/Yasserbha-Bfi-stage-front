import { Component, OnInit } from '@angular/core';
import { StageService } from '../services/stage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-liste-livrable',
  templateUrl: './liste-livrable.component.html',
  styleUrls: ['./liste-livrable.component.css']
})
export class ListeLivrableComponent implements OnInit {

  constructor(public satgeservices:StageService,  private activeroute:ActivatedRoute , private router:Router) { }

  public Livrable: any;
  title = 'File-Upload-Save';
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;

  ngOnInit() {

    console.log(this.activeroute.snapshot.params.id);
    this.satgeservices.getLivrablebyid(this.activeroute.snapshot.params.id).subscribe(
      res => {
        this.Livrable = res;
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
      this.satgeservices.pushFile(this.currentFileUpload).subscribe(event => {
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




  onSaveLivrable(Livrable:any){
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
      this.satgeservices.pushFile(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
         alert('File Successfully Uploaded');
      }
      this.selectedFiles = undefined;

     }
    );
    this.satgeservices.SaveLivrable(Livrable).subscribe(res =>{this.router.navigateByUrl("/DemandeSatge");},err=>{console.log(err);});

  }

}
