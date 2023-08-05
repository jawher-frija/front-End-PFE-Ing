import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {

  constructor(private http:HttpClient) { }
  addrendezvous(rendezvous: any)
  {
    return this.http.post(`${environment.baseurl}/RendezVous`,rendezvous)
  }
}
