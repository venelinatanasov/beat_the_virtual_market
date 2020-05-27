import { Component, OnInit, Input, Output } from '@angular/core';
import { businessEvent } from '../businessevent.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  
  businesseventtest: businessEvent={
    name: 'kiro',
    income: 100,
    timeSpent: 1,
    energyUsed: 20
  }
  @Output('testevent') a=new EventEmitter<{businessevent: businessEvent}>();

  constructor() { }

  ngOnInit(): void {
  }
  emittest(){
    this.a.emit({businessevent: this.businesseventtest});
  }
}
