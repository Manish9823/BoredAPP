import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoredManagerComponent } from './component/bored-manager/bored-manager.component';



@NgModule({
  declarations: [
    BoredManagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BoredManagerComponent
  ]
})
export class BoredModule { }
