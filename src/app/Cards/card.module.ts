import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionCardComponent } from './option-card/option-card.component';
import { BottomCardComponent } from './bottom-card/bottom-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-bootstrap/popover';


@NgModule({
  declarations: [OptionCardComponent, BottomCardComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,PopoverModule.forRoot()
  ],
  exports:[OptionCardComponent,BottomCardComponent]
})
export class CardModule { }
