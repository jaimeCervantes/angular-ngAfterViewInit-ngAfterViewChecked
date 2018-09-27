import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';
import { LoggerService }  from '../services/logger.service';

@Component({
  selector: 'lch-after-view-child',
  templateUrl: './after-view-child.component.html', 
})
export class AfterViewChildComponent implements AfterViewChecked, AfterViewInit {
  private personaAnterior = '';
  comment = '';

  // Para buscar view childs del tipo ChildComponent
  @ViewChild(ChildComponent) viewChild: ChildComponent;

  constructor(private logger: LoggerService) {
    this.logIt('Ejecución del contructor');
  }

  ngAfterViewInit() {
    // contentChild is set after the content has been initialized
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.personaAnterior === this.viewChild.persona) {
      this.logIt('AfterViewChecked (Sin cambios)');
    } else {
      this.personaAnterior = this.viewChild.persona;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    let c = this.viewChild.persona.length > 10 ? `Es un nombre muy grande` : '';
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      this.logger.tick_then(() => this.comment = c);
    }
  }

  private logIt(method: string) {
    let child = this.viewChild;
    let message = `${method}: ${child ? child.persona : 'no'} child view`;
    this.logger.log(message);
  }
  // ...
}