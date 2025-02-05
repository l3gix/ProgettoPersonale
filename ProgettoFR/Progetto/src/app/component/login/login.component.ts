import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servizi/auth.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showPasssword: boolean = true;//per mostrare la pasword

  homeGroup: FormGroup;



  constructor(private auth : AuthService,private user:User){
    this.homeGroup = new FormGroup({
      username : new FormControl('',Validators.required ),
      password : new FormControl('',[Validators.required , Validators.minLength(8)]),
    })

    user = new User(this.homeGroup.value.username,this.homeGroup.value.password);
  }

  mostraPassword()
  {
    this.showPasssword = !this.showPasssword;
    console.log("mostra password");
  }
  
  submit()
  {
    this.auth.login(this.user).subscribe((data:any) => {console.log(data)});
    console.log(this.homeGroup.value);
  }

  validateInputControl(form : FormGroup , controlName : string)
  {
    return form.get(controlName)?.invalid && form.get(controlName)?.touched;
  }

}
