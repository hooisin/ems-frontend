import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    addUserForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
      this.addUserForm = this.formBuilder.group({
          emailAddress: ['', Validators.required],
          lastName: ['', Validators.required],
          firstName: ['', Validators.required],
          phoneNo: ['', Validators.required],
          address1: ['', Validators.required],
          address2: ['', Validators.required],
      });
  }

  addUser(form) {

  }

    backToUserList() {

    }
}
