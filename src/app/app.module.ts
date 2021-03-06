import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RobotModule} from './robot/robot.module';


@NgModule({
  exports: [],
  declarations: [
    AppComponent
  ],
  schemas: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    RobotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
