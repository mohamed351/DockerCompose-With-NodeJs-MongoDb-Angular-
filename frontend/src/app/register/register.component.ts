import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {environment}  from '../../environments/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup = new FormGroup({
    userName:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    phone:new FormControl("",Validators.required)
  });
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  submitForm(){

    console.log("");
    this.http.post(""+"/api/auth/register",this.form.value).subscribe(result=>{
      console.log(result);
      alert("success");
    },(error =>{
      console.log(error);
    }));

  }

}
