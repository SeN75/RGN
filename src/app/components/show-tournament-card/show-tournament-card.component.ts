import { Component, Input, OnInit } from '@angular/core';
import { Tournament } from 'src/app/_common/types';

@Component({
  selector: 'show-tournament-card',
  templateUrl: './show-tournament-card.component.html',
  styleUrls: ['./show-tournament-card.component.scss']
})
export class ShowTournamentCardComponent implements OnInit {
  @Input() tournament: any = {
    logo: '../../../assets/images/games/d8b511aa-87ad-4780-9bc2-fce0e4e272cbfifa-21-intros.jpg',
    name: "Tournament",
    startDate: "2020/12/01",
    endDate: '2021/12/01'
  }
  isAdding = true;
  constructor() {

  }

  ngOnInit(): void {
  }

}
