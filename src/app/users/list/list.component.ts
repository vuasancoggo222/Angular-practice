import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() users: any;

  @Output() handleDelete: EventEmitter<number>;
  @Output() handleEdit: EventEmitter<number>;
  constructor() {
    this.handleDelete = new EventEmitter();
    this.handleEdit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onEdit(userId: number) {
    this.handleEdit.emit(userId);
  }

  onDelete(userId: number) {
    this.handleDelete.emit(userId);
  }
}
