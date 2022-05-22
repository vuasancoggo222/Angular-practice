import { Component, Input, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  inputValues = {
    name : '',
    id : 0,
    age : 0,
    email : '',
    sdt : '',
    avatarUrl:''
  }
  constructor() {
   
  }
  ngOnInit(): void {
  }
  onSubmit(userForm: any) {
    
   if(userForm.value.id === 0){
    const newId = uuidv4()
    this.users = [...this.users,{...userForm.value,id:newId}]
    userForm.resetForm({
      name: '',
      age: 0,
      email: '',
      sdt: '',
      avatarUrl: '',
    });
   }
   else{
    this.users = this.users.filter(user => user.id == userForm.id ? userForm.value : user)
   }

  }
  onEdit(user:any){
    this.inputValues = user
  }
  users = [
    {
      id: '1',
      name: 'John Sella',
      age: 18,
      email: 'james@gmail.com',
      sdt: '0376543567',
      avatarUrl:
        'https://i.picsum.photos/id/408/200/200.jpg?hmac=VJjKULX_XeyV5C9mbWyv6XTsG5EV-ZBsqbiQIi6xTeg',
    },
    {
      id: '6',
      name: 'John Sttella',
      age: 28,
      email: 'james@gmail.com',
      sdt: '0376543567',
      avatarUrl:
        'https://i.picsum.photos/id/408/200/200.jpg?hmac=VJjKULX_XeyV5C9mbWyv6XTsG5EV-ZBsqbiQIi6xTeg',
    },
    {
      id: '7',
      name: 'Joxxhn Sella',
      age: 28,
      email: 'james@gmail.com',
      sdt: '0376543567',
      avatarUrl:
        'https://i.picsum.photos/id/408/200/200.jpg?hmac=VJjKULX_XeyV5C9mbWyv6XTsG5EV-ZBsqbiQIi6xTeg',
    }
  ];
  onDelete(id:any){
    const confirm = window.confirm('Are you sure you want to delete this user ??')
    if(confirm){
      this.users = this.users.filter((user: { id: any; }) => user.id !== id)
    }
  }
}
