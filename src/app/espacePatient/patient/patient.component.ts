import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  listpatient : any
  patient:any
  username=JSON.parse(localStorage.getItem("username")!)
  email=JSON.parse(localStorage.getItem("email")!)
  id=JSON.parse(localStorage.getItem("id")!)
    constructor(private patientService:PatientService, private activeroute:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.getAllPatient()
      this.getOnepatient()
    }
    getAllPatient(){
      this.patientService.getAllPatient().subscribe((res:any)=>{
        this.listpatient=res
        console.log("list of doctor", this.listpatient)
      })
    }
    getOnepatient(){
      this.patientService.getOnepatient(this.id).subscribe((res:any)=>{
        this.patient=res
        console.log("patient information",this.patient)
       })
  
    }
    

}
