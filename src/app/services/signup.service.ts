import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { MedecinModel } from '../Models/MedecinModel';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  signupMedecin(SignupMedRequest: MedecinModel): Observable<any>{ // pour traiter la resultat de notre requete 
    return this.http.post(`${environment.baseurl}/Medecin/signup`,SignupMedRequest)
  
}
signupPatient(SignupMedRequest: any){
  return this.http.post(`${environment.baseurl}/api/auth/signup`,SignupMedRequest)

}
public setRole(role : string){
  localStorage.setItem("role",role);

}
public getRole(){
  return localStorage.getItem('role');
}

}
