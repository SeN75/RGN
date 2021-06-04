import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'plateform-select',
  templateUrl: './plateform-select.component.html',
  styleUrls: ['./plateform-select.component.scss']
})
export class PlateformSelectComponent implements OnInit {
  @Input() plateform: any = {
    name: 'Pc',
    logo: 'tv',
    active: false,
    selected: false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
