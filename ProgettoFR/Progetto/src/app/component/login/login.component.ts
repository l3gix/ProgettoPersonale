import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servizi/auth.service';
import { UserLogin } from '../../model/userlogin';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showPasssword: boolean = true;//per mostrare la pasword

  homeGroup: FormGroup;
  private user!:UserLogin;
  private ErrorLogin : boolean = false;



  constructor(private auth : AuthService,private router : Router){
    this.homeGroup = new FormGroup({
      username : new FormControl('',Validators.required ),
      password : new FormControl('',[Validators.required , Validators.minLength(8)]),
    })

  }

  mostraPassword()
  {
    this.showPasssword = !this.showPasssword;
    console.log("mostra password");
  }
  
  getErrorLogin(){return this.ErrorLogin;}

  submit()
  {
    this.user = new UserLogin(this.homeGroup.value.username,this.homeGroup.value.password);

    //console.log("user",this.user);

    this.auth.login(this.user).subscribe((data:any) => {
      console.log("risposta " , data);

      this.auth.setIsLogged();
      this.ErrorLogin = false;

      sessionStorage.setItem('user', JSON.stringify(data));

      this.auth.setIsLogged();
      this.router.navigate(['/homepage']);

    } ,error => {

      this.ErrorLogin = true;
      console.error('Errore nella richiesta:', error);
      alert("Username o password errati");
    });

    //console.log(this.homeGroup.value);

  }


  validateInputControl(form : FormGroup , controlName : string)
  {
    return form.get(controlName)?.invalid && form.get(controlName)?.touched;
  }

}
