import { Component } from '@angular/core';

@Component({
  selector: 'lch-child',
  template: '<input [(ngModel)]="persona">'
})
export class ChildComponent {
  persona = 'Jaime';
}