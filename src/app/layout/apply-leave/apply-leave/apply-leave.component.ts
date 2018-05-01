import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent implements OnInit {

    applyLeaveForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
      this.applyLeaveForm = this.formBuilder.group({
          deptId: ['', Validators.required],
          leaveTypeId: ['', Validators.required],
          fromDate: ['', Validators.required],
          toDate: ['', Validators.required],
          isHalfDay: ['', Validators.required],
          reason: ['', Validators.required],
      })
  }

    submitLeave(formValue) {

    }
}
