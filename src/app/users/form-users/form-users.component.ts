import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid'
@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit {
  @Input() inputValues: any;
  // 1. Định nghĩa sự kiện để bắn dữ liệu ngược lại
  @Output() handleSubmit: EventEmitter<any>;

  constructor() {
    // 2. Khai báo giá trị default
    this.handleSubmit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm) { // Nhận toàn bộ form
    console.log(userForm);
    // 3. Gửi dữ liệu đi
    this.handleSubmit.emit(userForm.value);

    userForm.resetForm({
      name: '',
      age: 0,
      email: ''
    });
  }
}
