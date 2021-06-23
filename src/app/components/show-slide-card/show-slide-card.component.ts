import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { Slide } from './../../_common/types';

@Component({
  selector: 'show-slide-card',
  templateUrl: './show-slide-card.component.html',
  styleUrls: ['./show-slide-card.component.scss']
})
export class ShowSlideCardComponent implements OnInit {
  @Input() slide: Slide | any = {
    id: '0',
    name: '',
    isVedio: true,
    imageOrVedioLink: 'assets/images/no-image-icon-23485.png'
  }
  @Input() isAdding = true;
  constructor(public dialogSrv: DialogService) { }

  ngOnInit(): void {
  }

}
