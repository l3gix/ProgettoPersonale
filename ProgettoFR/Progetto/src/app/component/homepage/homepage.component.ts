import { Component } from '@angular/core';
import { User } from '../../model/user';
import { SessionstoregService } from '../../servizi/sessionstoreg.service';
import { OperationService } from '../../servizi/operation.service';
import { Router } from '@angular/router';
import { AuthService } from '../../servizi/auth.service';

@Component({
  selector: 'app-homepage',
  standalone: false,
  
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent 
{

  private user !: User;

  constructor(private st : SessionstoregService, private op : OperationService,private router : Router ,private auth : AuthService){}
  ngOnInit(): void {

    if(this.st.getSessionData() == null) {
      const userfound = JSON.parse(sessionStorage.getItem('user')!);
      this.user = new User(userfound.id,userfound.username,userfound.password,userfound.nome,userfound.cognome,userfound.credito);
    }else
    {
      //const userfound = JSON.parse(sessionStorage.getItem('user')!);
      let userfound !: any;
      this.st.user$.subscribe((data : any) => {
        //console.log("data",data);
        this.user = new User(data.id,data.username,data.password,data.nome,data.cognome,data.credito);
        console.log('Session Storage aggiornato:', this.user);
      })!;

      //this.st.setSessionData(userfound);
      //userfound = this.st.getSessionData();
      //this.user = new User(userfound.getId(),userfound.getUsername(),userfound.getPassword(),userfound.getNome(),userfound.getCognome(),userfound.getCredito());
    }
    console.log(this.user);
  }

  getCredito() : number
  {
    return this.user.getCredito() ;
  }

  logout() : void{
    this.st.clearSessionData();
    this.auth.setLogout();
    this.router.navigate(['/login']);
  }
}
