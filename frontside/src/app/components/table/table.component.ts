import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gilad-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Output() rowClicked = new EventEmitter();
  @Input() data;

  displayedColumns: string[] = ['id', 'name', 'Address'];

  constructor() { 
  }


  ngOnInit() {
    console.log('data', this.data)
  }


  selectItem(row){
    console.log('row', row);
    this.rowClicked.emit(row);
  }

}
