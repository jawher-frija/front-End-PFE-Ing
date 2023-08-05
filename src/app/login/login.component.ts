import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!:FormGroup
  
 
  constructor(private formBuilder:FormBuilder,private route:Router , private login:LoginService, private signup:SignupService) { }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  onSubmit(){
    setTimeout(() => {
      location.reload();
    },1000);
  
    //methode
    this.login.login(this.loginform.value).subscribe(
      (res: any) => {
        Swal.fire('Connected');
        console.log('login', res);
        localStorage.setItem('userconnect', JSON.stringify(res));
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('refreshtoken', res.refreshToken);
        localStorage.setItem('state', '0');
        this.route.navigateByUrl('');
        
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: 'Email not found',
          footer: 'error',
        });
      }
    );
  }


  addRole(){
    this.signup.setRole("medecin");
    console.log("added role for doctor !");

  }
  addRolep(){
    this.signup.setRole("patient");
    console.log("added role Patient !");
  }
}
