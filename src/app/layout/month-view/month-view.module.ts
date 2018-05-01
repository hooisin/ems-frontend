import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonthViewRoutingModule } from './month-view-routing.module';
import { MonthViewComponent } from './month-view/month-view.component';
import {FullCalendarModule} from 'ng-fullcalendar';
import {EventService} from './event.service';

@NgModule({
  imports: [
    CommonModule,
    MonthViewRoutingModule,
    FullCalendarModule
  ],
  declarations: [
      MonthViewComponent
  ],
   providers: [
       EventService
   ]
})
export class MonthViewModule { }
