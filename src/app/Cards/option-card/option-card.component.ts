import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PopoverDirective } from 'ngx-bootstrap/popover';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent implements OnInit {
  @ViewChild(PopoverDirective)  popover: PopoverDirective;
@Input() cardData:{
title: string;
img: string;
subTitle:string;
optionList:string[];
link:string;
buttonText:string;
};
  constructor() { 
   
  }
  Details=["דרכון ישראלי","תעודת זהות","תעודת עולה","רב קו","פנקס חיסונים"]
  ngOnInit(): void {
  }
  close(){
    this.popover.hide();
  }

}
