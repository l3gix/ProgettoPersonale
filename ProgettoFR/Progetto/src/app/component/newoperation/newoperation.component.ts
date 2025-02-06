import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OperationService } from '../../servizi/operation.service';
import { Operation } from '../../model/operation';
import { User } from '../../model/user';
import { SessionstoregService } from '../../servizi/sessionstoreg.service';

@Component({
  selector: 'app-newoperation',
  standalone: false,
  
  templateUrl: './newoperation.component.html',
  styleUrl: './newoperation.component.css'
})
export class NewoperationComponent 
{

  operationGroup !: FormGroup
  private oper !: Operation
  private user !: User

  constructor(private op : OperationService,private st:SessionstoregService){ 
    this.operationGroup = new FormGroup({
      importo : new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/) ]),
      data : new FormControl('',Validators.required),
      type : new FormControl('',Validators.required),
    });

  }




  transition()
  {
    const id = JSON.parse(sessionStorage.getItem('user')!).id;

    if(this.operationGroup.value.type == "debit") this.operationGroup.value.importo *= -1;

    this.oper = new Operation(id,this.operationGroup.value.importo,this.operationGroup.value.data);

    const userCook = JSON.parse(sessionStorage.getItem('user')!)

    this.user = new User(userCook.id,userCook.username,userCook.password,userCook.nome,userCook.cognome,userCook.credito);

    this.op.newOperation(this.oper).subscribe((data:any) =>{

      console.log(data);
      const somma = Number(this.user.getCredito()) + Number(data.importo);

      this.user.setCredito(Number(somma));

      this.st.setSessionData(this.user);

      //sessionStorage.setItem('user', JSON.stringify(this.user));

      console.log(this.user);

      this.operationGroup.reset();
    },error =>{
      console.log(error);

    });


  }

  validateInputControl(form : FormGroup , controlName : string)
  {
    return form.get(controlName)?.invalid && form.get(controlName)?.touched;
  }
}
