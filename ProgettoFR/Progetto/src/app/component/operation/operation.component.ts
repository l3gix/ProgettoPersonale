import { Component, ElementRef, ViewChild } from '@angular/core';
import { OperationService } from '../../servizi/operation.service';
import { error } from 'console';

@Component({
  selector: 'app-operation',
  standalone: false,
  
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css'
})
export class OperationComponent {


  private id !: number
  listoperazioni !: any
  scrollEnabled : boolean = false;


  constructor(private op : OperationService) { }
  
  ngOnInit(): void {
    this.id = JSON.parse(sessionStorage.getItem('user')!).id;

    console.log(this.id);
    this.op.findOperation(this.id).subscribe((data:any) =>
      { 
        console.log(data);
        this.listoperazioni = data;
        this.checkScroll();
      },error => {
        console.log(error);
    });
    
    //this.checkScroll();
  }


  /*
  ngAfterViewInit(): void {
    this.checkScroll();
  }

  
  ngAfterContentInit(): void {
    this.checkScroll();
  }
*/
  checkScroll() {
    console.log("length",this.listoperazioni.length);
    
    if (this.listoperazioni.length > 2) {
      this.scrollEnabled = true;
    } else {
      this.scrollEnabled = false;
    }
  }

  /*
  getDate(operazione : any)
  {
    const data = operazione.data.split('-');
    return new Date(+data[2], +data[1] - 1, +data[0]);
  }
  */
  getDate(operazione : any)
  {
    const data = operazione.data.split('-'); // Splitta la data in [YYYY, MM, DD]
    const giorno = +data[2];   // Giorno
    const mese = +data[1] - 1; // Mese (deve essere -1)
    const anno = +data[0];     // Anno
    
    const dataObj = new Date(anno, mese, giorno); // Crea un oggetto Date
    
    return dataObj;
  }


}
