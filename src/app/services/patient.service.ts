import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }
  getAllPatient() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', "Bearer "+ localStorage.getItem('token'))
    }
    return this.http.get(`${environment.baseurl}/Patient`,header)
  }
  getOnepatient(id: any){
    return this.http.get(`${environment.baseurl}/Patient/${id}`)
  }
  Ondelete(id: any) {
    return this.http.delete(`${environment.baseurl}/Patient/${id}`)
  }
  Updatepatient(id: any,patient : any){
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', ""+ localStorage.getItem('token'))
    }
    return this.http.put(`${environment.baseurl}/Patient/${id}`,patient,header)
  }
}
