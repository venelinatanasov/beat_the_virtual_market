import { Component } from '@angular/core';
import { businessEvent } from './businessevent.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  businessEvents: businessEvent[];
  event: businessEvent={
    name: 'test',
    income: 20,
    timeSpent: 20,
    energyUsed: 10


  }

  energy: number=2500;
  balance: number=200;
  time: number=0;

  

  printtest(a: businessEvent){
    console.log(a);
  }















  title = 'beat-the-virtual-market';
}
