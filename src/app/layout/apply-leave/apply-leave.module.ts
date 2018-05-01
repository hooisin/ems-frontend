import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyLeaveRoutingModule } from './apply-leave-routing.module';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ApplyLeaveRoutingModule,
  ],
  declarations: [ApplyLeaveComponent]
})
export class ApplyLeaveModule { }
