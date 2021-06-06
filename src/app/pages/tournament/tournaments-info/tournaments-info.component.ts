import { Component, Input, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-tournaments-info',
  templateUrl: './tournaments-info.component.html',
  styleUrls: ['./tournaments-info.component.scss']
})
export class TournamentsInfoComponent implements OnInit {
  tournament: any = {
    logo: '../../../assets/images/games/d8b511aa-87ad-4780-9bc2-fce0e4e272cbfifa-21-intros.jpg',
    name: "Tournament",
    startDate: "2020/12/01",
    endDate: '2021/12/01',
    description: '',
    rule: '',
    prizes: '',
    timeZone: ''
  }
  platfroms = [
    {
      name: 'Pc',
      logo: 'tv',
      active: false,
      selected: false
    },
    {
      name: 'Mobile',
      logo: 'phone_iphone',
      active: false,
      selected: false
    },
    {
      name: 'PS4, PS5',
      logo: 'sports_esports',
      active: false,
      selected: false
    },
    {
      name: 'Xbox',
      logo: 'videogame_asset',
      active: false,
      selected: false
    },
    {
      name: 'Switch',
      logo: 'tv',
      active: false,
      selected: false
    },
  ]
  constructor(private tournamentsSrv: TournamentService) {

    if (this.tournamentsSrv.tournaments)
      this.tournament = this.tournamentsSrv.tournaments;
  }

  ngOnInit(): void {
  }

}
