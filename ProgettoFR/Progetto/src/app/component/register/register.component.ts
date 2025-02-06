import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from '../../model/userregister';
import { AuthService } from '../../servizi/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  showPasssword: boolean = true;//mostra la password
  registerGroup !: FormGroup;
  private  user !: UserRegister


  constructor(private auth : AuthService, private router : Router){
    this.registerGroup = new FormGroup({
      username : new FormControl('',Validators.required ),
      password : new FormControl('',[Validators.required , Validators.minLength(8)]),
      nome : new FormControl('',Validators.required ),
      cognome : new FormControl('',Validators.required ),
    });

  }



  mostraPassword()
  {
    this.showPasssword = !this.showPasssword;
    console.log("mostra password");
  }
  
  submit()
  {
    this.user = new UserRegister(this.registerGroup.value.username,this.registerGroup.value.nome,this.registerGroup.value.cognome,this.registerGroup.value.password);
    
    this.auth.register(this.user).subscribe((data:any) => {
      
      console.log("registerdata",data);
      sessionStorage.setItem('user', JSON.stringify(data));
      this.auth.setIsLogged();
      this.router.navigate(['/homepage']);

    },error => {
      console.error('Errore nella richiesta:', error);
    });
    console.log(this.registerGroup.value);
  }

  //controllare i campi e poi cambia il colori del bordo
  validateInputControl(form : FormGroup , controlName : string)
  {
    return form.get(controlName)?.invalid && form.get(controlName)?.touched;
  }



  


}

