import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  
  change(){
    console.log(this);
    this.name = Math.random().toString();
  }
  @Input() name: string;
  constructor() {
    this.name = '';
  }

  ngOnInit(): void {
  }

}
