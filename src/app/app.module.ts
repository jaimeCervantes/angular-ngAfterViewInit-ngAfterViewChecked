import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AfterViewModule } from './after-view/after-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AfterViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
