import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterViewParentComponent } from './after-view-parent.component';
import { AfterViewChildComponent } from './after-view-child.component';
import { ChildComponent } from './child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations:[
    AfterViewParentComponent,
    AfterViewChildComponent,
    ChildComponent
  ],
  exports: [
    AfterViewParentComponent
  ]
})
export class AfterViewModule {}
