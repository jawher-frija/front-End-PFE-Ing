import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }
  getAllDoctor() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', "Bearer "+ localStorage.getItem('token'))
    }
    return this.http.get(`${environment.baseurl}/Medecin`,header)
  }
  getOnedoctor(id: any){
    return this.http.get(`${environment.baseurl}/Medecin/${id}`)
  }
  Ondelete(id: any) {
    return this.http.delete(`${environment.baseurl}/Medecin/${id}`)
  }
  Updatedoctor(id: any,medecin : any){
   /* const header = {
      headers: new HttpHeaders()
        .set('Authorization', ""+ localStorage.getItem('token'))
    }*/
    return this.http.put(`${environment.baseurl}/Medecin/${id}`,medecin)
  }
}
