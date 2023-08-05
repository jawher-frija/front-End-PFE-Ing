import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-modifierpatient',
  templateUrl: './modifierpatient.component.html',
  styleUrls: ['./modifierpatient.component.css']
})
export class ModifierpatientComponent implements OnInit {

  id=this.activeroute.snapshot.params["id"]
  email:any;
  username:any;
  patient: any
  patientform !:FormGroup
  constructor(private patientservice:PatientService,private activeroute:ActivatedRoute , private formbuilder:FormBuilder ) { }
  ngOnInit(): void {
    this.id=this.activeroute.snapshot.params["id"]
    
    this.username = localStorage.getItem('username')?.replace(/"/g, ''); // rplace "" en string 
    this.email = localStorage.getItem('email')?.replace(/"/g, '');
  
    this.getOnepatient();
    this.patientform=this.formbuilder.group({

      email:['',Validators.required],
      password:['',Validators.required],
      username: ['',Validators.required],
      age:['',Validators.required], 
      cinCarte:['',Validators.required],
      type:['',Validators.required],
      adresse:['',Validators.required],
      telephone:['',Validators.required],
      etatcivil:['',Validators.required],
      role:['',Validators.required]
      
    })
    console.log("id",this.id)
  }
  getOnepatient(){
    this.patientservice.getOnepatient(this.id).subscribe((res:any)=>{
      this.patient=res
      debugger
      console.log(res);
      console.log("details doctor", this.patient)
      this.patientform.patchValue({

        email:this.patient.email,
        password:"",
        username:this.patient.username,
        
      })
    })
  }
  Updatepatient(){
    this.patientservice.Updatepatient(this.id, this.patientform.value).subscribe((res:any)=>{
      console.log("list of doctor", res)
      this.showSuccessAlert();
    })
    }
    showSuccessAlert() {
      Swal.fire('Modifié avec succès', '', 'success')
    }
}
