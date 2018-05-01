import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MonthViewComponent} from './month-view/month-view.component';

const routes: Routes = [
    {
        path: '',
        component: MonthViewComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthViewRoutingModule { }
