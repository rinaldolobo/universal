import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ai-abstract-components',
  templateUrl: './ai-abstract-components.component.html',
  styleUrls: ['./ai-abstract-components.component.css']
})
export class AiAbstractComponent implements OnInit {

  @ViewChild('card') card :ElementRef;

  constructor() { }
  hovering: boolean = false;
  @Input() datasetName;
  @Input() entityName;
  @Output() deleteEmit = new EventEmitter();

  showDesc: boolean = false;

  ngOnInit() {
  }

  flip() {
    this.showDesc = !this.showDesc;
  }

  abcClick(e, from) {
    // console.log("abcClick");
    // console.log(e);
    // console.log(from);
    console.log(this.card);
    
  }

  // @HostListener('window:scroll')
  // onScroll(e) {
  //   console.log("this.scroll");
  // }

  // @HostListener('click')
  // click(e) {
  //   console.log("this.click");
  // }

  clicki() {
    console.log("i");
    this.showDesc = !this.showDesc;

  }
  clickx(event) {
    console.log(this.datasetName);
    this.deleteEmit.emit({ event: event, id: this.datasetName });
  }

}
