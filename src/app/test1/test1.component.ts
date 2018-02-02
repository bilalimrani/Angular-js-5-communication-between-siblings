import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test1',
  template: `
    <h1>Child component one</h1>
    <input type="text" #myInput>
    <button (click)="onClick(myInput.value)">Send data to second component</button>
  `,
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onClick(val){
    this.data.setState(val);
  }

}
