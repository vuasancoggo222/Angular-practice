import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputValue = 'Type here !!';
  buttonShowHide = false;
  changeStatus() {
    console.log(this);

    this.buttonShowHide = !this.buttonShowHide;
  }
}
