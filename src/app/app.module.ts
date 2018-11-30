import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from './section/section.component';
import { BoardReportComponent } from './board-report/board-report.component';
import { BoardGraphicComponent } from './board-graphic/board-graphic.component';
import { BoardPizzaComponent } from './board-pizza/board-pizza.component';
import { BoardWordsComponent } from './board-words/board-words.component';

import { ChartsModule } from 'ng2-charts';
import { UserdetailsComponent } from './userdetails/userdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionComponent,
    BoardReportComponent,
    BoardGraphicComponent,
    BoardPizzaComponent,
    BoardWordsComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
