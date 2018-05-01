import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {PageHeaderModule} from '../../shared/modules';
import {UsersComponent} from './users.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,
      UsersRoutingModule,
      FormsModule,
      ReactiveFormsModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
