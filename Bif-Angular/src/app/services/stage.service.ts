import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DemandStage } from '../Model/DemandStage.Model';

@Injectable({
  providedIn: 'root'
})
export class StageService {



  public host:string="http://localhost:8081/SpringMVC/servlet";

  constructor(private httpClient:HttpClient) { }




   public pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
      const data: FormData = new FormData();
      data.append('file', file);
      const newRequest = new HttpRequest('POST', 'http://localhost:8081/SpringMVC/servlet/add-Image', data, {
      reportProgress: true,
      responseType: 'text'
      });
      return this.httpClient.request(newRequest);
  }
  public pushFile2ToStorage(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://localhost:8081/SpringMVC/servlet/add-Image2', data, {
    reportProgress: true,
    responseType: 'text'
    });
    return this.httpClient.request(newRequest);
}


  public pushFile(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://localhost:8081/SpringMVC/servlet/add-Livrablefile', data, {
    reportProgress: true,
    responseType: 'text'
    });
    return this.httpClient.request(newRequest);
}

 public getdemande(){
  return this.httpClient.get(this.host+"/retrieve-all-StageDemande")
 }

 public GetDemandeparNameType(nom,type,status){
  return this.httpClient.get(this.host+"/getCustomerBynameroleJPQL/"+nom+"/"+type+"/"+status);
 }

 public getDelete(id){
  return this.httpClient.delete(this.host+"/remove-StageDemande/"+id);
 }

 public getDetails(id){
  return this.httpClient.get(this.host+"/retrieve-StageDemande/"+id);
 }

 public getdemandebyid(id){
  return this.httpClient.get(this.host+"/retrieve-StageDemande/"+id)
 }

 public getLivrablebyid(id){
  return this.httpClient.get(this.host+"/getLivrableByDemandeJPQL/"+id)
 }


  public SaveStagaire(url,data){
  return this.httpClient.post(url,data)
  }

  public SaveDemande(url,data){
    return this.httpClient.post(url,data)
  }

  public SaveLivrable(data){
    return this.httpClient.post(this.host+"/add-Livrable",data)
  }
  public updateDemande(url,data){
    return this.httpClient.put(url,data)
  }
   public testupdateDemande(id,data){
    return this.httpClient.put(this.host+"/modify-StageDemande/"+id,data);
  }

  public Saveimage(url,data){
    return this.httpClient.post(url,data)
  }
  public GetDemandeparName(nom){
    return this.httpClient.get(this.host+"/getCustomerBynameroleJPQL/"+nom);
  }
  public GetDemandeparetatrole(type,etat){
    return this.httpClient.get(this.host+"/getCustomerBynameroleJPQL/"+type+"/"+etat);
  }
}
