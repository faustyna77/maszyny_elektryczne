import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

resulttask:string=''
resultmoment:string=''
amperresult:string=''
voltagedwaresult:string=''
  lostfunction(losts: string) {

 const lostsValue=parseFloat(losts)
   const wynik=lostsValue*6
    let wynik2=wynik*7
    this.resulttask=wynik2.toString()
    


  }


  znamionowymoment(power:string,speed:string)
  {
    const moment= 9.55*(parseFloat(power)/(parseFloat(speed)))
    this.resultmoment=moment.toString()+'N*m'

  }
   amper(power:string ,voltage:string,skill:string)
   {
    const ampervalue=parseFloat(power)/(parseFloat(voltage)*parseFloat(skill))
    this.amperresult=ampervalue.toString()+'A'
   }
   voltagefunction(voltage:string,voltagewz:string)
   {
    const napiecie=parseFloat(voltage)-parseFloat(voltagewz)
    this.voltagedwaresult=napiecie.toString() +'V'
   }
 
}
