import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  @Input() selected;

  constructor() { }

  ngOnInit() {
    console.log('selected', this.selected)
  }

}
