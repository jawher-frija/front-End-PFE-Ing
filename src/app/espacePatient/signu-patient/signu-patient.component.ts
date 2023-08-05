import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signu-patient',
  templateUrl: './signu-patient.component.html',
  styleUrls: ['./signu-patient.component.css']
})
export class SignuPatientComponent implements OnInit {

  signupform !:FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router) {
    this.signupform=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      telephone:['',Validators.required],
      adresse:['',Validators.required],
      genre:['',Validators.required],
      cinCarte:['',Validators.required],
      age:['',Validators.required],
      image:['',Validators.required],
      repeatPass:['',Validators.required]

    
    })
   }

  ngOnInit(): void {
  }

  signUpPatient()
{

}
}
