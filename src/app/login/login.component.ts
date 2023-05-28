import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router:Router){

}
user_record:any[]=[];

data={
  email:"",
  password:"",
}

  doLogin(Values:any){
    this.user_record=JSON.parse(localStorage.getItem("users")||"{}");
  if(this.user_record.some((v)=>{
    return v.email == this.data.email && v.password == this.data.password
  }))
  {
    alert("Login Sucessfull");
    this.router.navigate(['/showusers']);
  }
  else{
    alert("login Failed");
  }
  }
}
