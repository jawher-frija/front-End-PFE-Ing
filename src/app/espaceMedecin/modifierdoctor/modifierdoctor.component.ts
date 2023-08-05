import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DoctorService } from '../../services/doctor.service';


@Component({
  selector: 'app-modifierdoctor',
  templateUrl: './modifierdoctor.component.html',
  styleUrls: ['./modifierdoctor.component.css']
})
export class ModifierdoctorComponent implements OnInit {
  id=this.activeroute.snapshot.params["id"]
  email:any;
  username:any;
  medecin: any
 doctorform !:FormGroup
  constructor(private doctorservice : DoctorService,private activeroute:ActivatedRoute , private formbuilder:FormBuilder, private router:Router) { }
  ngOnInit(): void {
    this.id=this.activeroute.snapshot.params["id"]
    
    this.username = localStorage.getItem('username')?.replace(/"/g, ''); // rplace "" en string 
    this.email = localStorage.getItem('email')?.replace(/"/g, '');
  
    this.getOnedoctor();
    this.doctorform=this.formbuilder.group({

      email:['',Validators.required],
     // password:['',Validators.required],
     // username: ['',Validators.required],
      adresse:['',Validators.required], 
      telephone:['',Validators.required],
      specialite:['',Validators.required],
      qualification:['',Validators.required],
      //role:['',Validators.required]
      
    })
    console.log("id",this.id)
  }
  getOnedoctor(){
    this.doctorservice.getOnedoctor(this.id).subscribe((res:any)=>{
      this.medecin=res
      debugger
      console.log(res);
      console.log("details doctor", this.medecin)
      this.doctorform.patchValue({

        email:this.medecin.email,
        password:"",
        username:this.medecin.username,
        adresse:this.medecin.adresse,
        telephone:this.medecin.telephone,
        specialite:this.medecin.specialite,
        qualification:this.medecin.qualification,
        
      })
    })
  }
  Updatedoctor1(){
    this.doctorservice.Updatedoctor(this.id, this.doctorform.value).subscribe((res:any)=>{
      console.log("list of doctor", res)
      this.showSuccessAlert();
      //this.router.navigateByUrl("/Doctor")
    })

    }
    showSuccessAlert() {
      Swal.fire('Modifié avec succès', '', 'success')
    }
}
