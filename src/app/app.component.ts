import { Component } from '@angular/core';
import { businessEvent } from './businessevent.model'
import { TestBed } from '@angular/core/testing';
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

 

















  title = 'beat-the-virtual-market';
}
