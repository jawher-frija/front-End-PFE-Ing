import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';


import { DepartmentComponent } from './department/department.component';
import { DepartmentsingleComponent } from './departmentsingle/departmentsingle.component';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { DoctorComponent } from './espaceMedecin/doctor/doctor.component';
import { DoctorsComponent } from './espaceMedecin/doctors/doctors.component';
import { FaqComponent } from './faq/faq.component';

import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ModifierdoctorComponent } from './espaceMedecin/modifierdoctor/modifierdoctor.component';
import { ModifierpatientComponent } from './espacePatient/modifierpatient/modifierpatient.component';

import { PatientComponent } from './espacePatient/patient/patient.component';

import { PricingComponent } from './pricing/pricing.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './espaceMedecin/signup/signup.component';


;

import { TimetableComponent } from './timetable/timetable.component';
import { SignuPatientComponent } from './espacePatient/signu-patient/signu-patient.component';
import { GalerieComponent } from './galerie/galerie.component';

const routes: Routes = [
  {path:"signupMedecin",component:SignupComponent},
  {path:'signuppatient', component:SignuPatientComponent},
  {path:"login",component:LoginComponent},
  
  {path:'',component:HomeComponent,children:[
    {path:'',component:LayoutComponent},
    {path:'about',component:AboutComponent},
    {path:'doctor',component:DoctorComponent},
    {path:'doctors',component:DoctorsComponent},
    {path:'galerie',component:GalerieComponent}
 
  ]},

  
  {path:'service',component:ServiceComponent},
  {path:'department',component:DepartmentComponent},
  {path:'departmentsingle',component:DepartmentsingleComponent},
  
  
  {path:'patient',component:PatientComponent},
  {path:'timetable',component:TimetableComponent},
  {path:'pricing',component:PricingComponent},
  
  {path:'faq',component:FaqComponent},
  {path:'modifierdoctor/:id',component:ModifierdoctorComponent},
  {path:'modifierpatient/:id',component:ModifierpatientComponent},

  
  {path:'detailsproduct',component:DetailsproductComponent},

  //patient
  {path:"signupPatient", component:SignuPatientComponent},
  
  
  






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
