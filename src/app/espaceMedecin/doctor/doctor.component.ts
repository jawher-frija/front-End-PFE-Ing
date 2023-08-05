import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {  
listdoctor : any
doctor:any
username=JSON.parse(localStorage.getItem("username")!)
email=JSON.parse(localStorage.getItem("email")!)
id=JSON.parse(localStorage.getItem("id")!)
  constructor(private doctorService:DoctorService, private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllDoctor()
    this.getOnedoctor()
  }
  getAllDoctor(){
    this.doctorService.getAllDoctor().subscribe((res:any)=>{
      this.listdoctor=res
      console.log("list of doctor", this.listdoctor)
    })
  }
  getOnedoctor(){
    this.doctorService.getOnedoctor(this.id).subscribe((res:any)=>{
      this.doctor=res
      console.log("doctor information",this.doctor)
     })

  }
  


}
