import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-element4',
  templateUrl: './element4.component.html',
  styleUrls: ['./element4.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Element4Component implements OnInit {
  
  @Input() num: number;
  @Input() message: string;

  @Output() clickable = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  clickableClicked(): void {
    console.log('Clickable Clicked. Raising event...');
    this.clickable.emit(null);
  }

}
