import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Options} from 'fullcalendar';
import {CalendarComponent} from 'ng-fullcalendar';
import {EventService} from '../event.service';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit {

    calendarOptions: Options;
    displayEvent: any;
    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
    constructor(
        protected eventService: EventService
    ) { }

    ngOnInit() {
        this.eventService.getEvents().subscribe(data => {
            this.calendarOptions = {
                editable: true,
                eventLimit: false,
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay,listMonth'
                },
                events: data
            };
        });
    }
    clickButton(model: any) {
        this.displayEvent = model;
    }
    eventClick(model: any) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title,
                allDay: model.event.allDay
                // other params
            },
            duration: {}
        }
        this.displayEvent = model;
    }
    updateEvent(model: any) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title
                // other params
            },
            duration: {
                _data: model.duration._data
            }
        }
        this.displayEvent = model;
    }

}