import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'game-select',
  templateUrl: './game-select.component.html',
  styleUrls: ['./game-select.component.scss']
})
export class GameSelectComponent implements OnInit {
  @Input() game: any = {
    logo: '../../../assets/images/games/d8b511aa-87ad-4780-9bc2-fce0e4e272cbfifa-21-intros.jpg',

  }
  @Input() selected: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
