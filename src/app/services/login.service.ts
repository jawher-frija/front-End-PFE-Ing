import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  login(LoginRequest: any) {
    return this.http.post(`${environment.baseurl}/api/auth/signin`,LoginRequest)
  }
  private httpOption={
    headers:new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem("token")}`
    })
  }
}
