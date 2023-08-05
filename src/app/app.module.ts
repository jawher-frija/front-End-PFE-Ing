import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentsingleComponent } from './departmentsingle/departmentsingle.component';
import { DoctorsComponent } from './espaceMedecin/doctors/doctors.component';
import { DoctorComponent } from './espaceMedecin/doctor/doctor.component';
import { TimetableComponent } from './timetable/timetable.component';
import { PricingComponent } from './pricing/pricing.component';

import { FaqComponent } from './faq/faq.component';

;
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModifierdoctorComponent } from './espaceMedecin/modifierdoctor/modifierdoctor.component';
import { AjouterdonsComponent } from './ajouterdons/ajouterdons.component';

import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';


import { PatientComponent } from './espacePatient/patient/patient.component';
import { ModifierpatientComponent } from './espacePatient/modifierpatient/modifierpatient.component';
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './espaceMedecin/signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SignuPatientComponent } from './espacePatient/signu-patient/signu-patient.component';
import { GalerieComponent } from './galerie/galerie.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
 
    ServiceComponent,
    HomeComponent,
    AboutComponent,
    DepartmentComponent,
    DepartmentsingleComponent,
    DoctorsComponent,
    DoctorComponent,
    TimetableComponent,
    PricingComponent,
  
    FaqComponent,
    
   
    ModifierdoctorComponent,
    AjouterdonsComponent,
   
    DetailsproductComponent,
    
    
    PatientComponent,
    ModifierpatientComponent,
    LayoutComponent,
    SignupComponent,
    LoginComponent,
    SignuPatientComponent,
    GalerieComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
