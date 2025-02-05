import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from '../../model/userregister.model';
import { AuthService } from '../../servizi/auth.service';



@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  showPasssword: boolean = true;//mostra la password
  registerGroup !: FormGroup;



  constructor(private auth : AuthService,private  user : UserRegister){
    this.registerGroup = new FormGroup({
      username : new FormControl('',Validators.required ),
      email : new FormControl('',[Validators.required , Validators.email]),
      nome : new FormControl('',Validators.required ),
      cognome : new FormControl('',Validators.required ),
      password : new FormControl('',[Validators.required , Validators.minLength(8)]),
    });

    user = new UserRegister(this.registerGroup.value.username,this.registerGroup.value.email,this.registerGroup.value.nome,this.registerGroup.value.cognome,this.registerGroup.value.password);
  }



  mostraPassword()
  {
    this.showPasssword = !this.showPasssword;
    console.log("mostra password");
  }
  
  submit()
  {
    this.auth.register(this.user).subscribe((data:any) => {console.log(data)});
    console.log(this.registerGroup.value);
  }

  //controllare i campi e poi cambia il colori del bordo
  validateInputControl(form : FormGroup , controlName : string)
  {
    return form.get(controlName)?.invalid && form.get(controlName)?.touched;
  }



  


}

