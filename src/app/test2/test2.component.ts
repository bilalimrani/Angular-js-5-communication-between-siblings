import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-test2',
  template: `
    <h1>Child component two</h1>
    <h3 *ngIf="selectionFormatState">{{selectionFormatState}}</h3>
  `,
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  private subscription : Subscription;
  selectionFormatState: any = "";
  constructor(private data: DataService) {
    this.data.getState("").subscribe(
      selectionFormatState=>{
        this.selectionFormatState = selectionFormatState;
      }
    )
  }

  ngOnInit() {
  }

}
