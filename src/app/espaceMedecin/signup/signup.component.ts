import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators,FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MedecinModel } from 'src/app/Models/MedecinModel';
import Swal from 'sweetalert2';
import { SignupService } from '../../services/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform !:FormGroup

  constructor(private formBuilder:FormBuilder, private router:Router,private signup:SignupService) { 
      this.signupform=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      telephone:['',Validators.required],
      adresse:['',Validators.required],
      genre:['',Validators.required],
      specialite:['',Validators.required],
      parcours: this.formBuilder.array([]),    
      experience: this.formBuilder.array([]),
      image:['',Validators.required],
    repeatPass:['',Validators.required]

    
    })
  }

  ngOnInit(): void {    //en etape inciale 
  
  }

  get parcours() {
    return  this.signupform.get('parcours') as FormArray;

  }

  get experience() {
    return this.signupform.controls["experience"] as FormArray;
  }

  addNewParcours() {
    const parcoursFormGroup = this.formBuilder.group({
      diploma: ['', Validators.required],
      establishment: ['', Validators.required],
      field: ['', Validators.required],
    });
    this.parcours.push(parcoursFormGroup);
  }

  getExperienceArray(experienceFormGroup: FormGroup, controlName: string): AbstractControl[] {
    return (experienceFormGroup.get(controlName) as FormArray).controls;
  }

  addNewExperience() {
    const experienceFormGroup = this.formBuilder.group({
      establishment12: ['', Validators.required],
      specialty: ['', Validators.required],
    });
    this.experience.push(experienceFormGroup);
  }

  removePar(Index: number) {
    this.parcours.removeAt(Index);
  }

 

  removeEx(experienceIndex: number) {
    this.experience.removeAt(experienceIndex);
  }
  signUpMedecin(){


    let data = this.signupform.value;
    console.log("our form =>", data);
    let medecinModel = new MedecinModel(
      data.username,
       data.email,
      data.password,
      data.adresse,
      data.telephone,
      data.genre,
      data.specialite,
      data.parcours,
      data.experience,
      data.image,
      data.repeatPass
    )
    console.log("our model =>", medecinModel);
    this.signup.signupMedecin(medecinModel).subscribe((res:any)=>{
   console.log('result of signup',res)
   Swal.fire("registred ")
    })
  }
/**  selecteddeplome: string[] = [];
  togglediploma(diploma: string): void {
    const index = this.selecteddeplome.indexOf(diploma);
    this.selecteddeplome.push(diploma);
  }*/
}
