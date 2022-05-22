import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {
  @Input() key: string;
  @Input() field: any;
  constructor() {
    this.key = '';
    
  }

  ngOnInit(): void {
  }

}
