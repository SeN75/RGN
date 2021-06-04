import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  tournmaents = [
    {
      logo: '../../../assets/images/games/d8b511aa-87ad-4780-9bc2-fce0e4e272cbfifa-21-intros.jpg',
      name: "Tournament",
      startDate: "2020/12/01",
      endDate: '2021/12/01'
    },
    {
      logo: '../../../assets/images/games/league_of_legends_logo_wallpaper_by_xlzipx-d7z4i38.png',
      name: "Tournament",
      startDate: "2020/12/01",
      endDate: '2021/12/01'
    }, {
      logo: '../../../assets/images/games/egs-rocketleague-psyonixllc-s3-2560x1440-56d55e752216.jpg',
      name: "Tournament",
      startDate: "2020/12/01",
      endDate: '2021/12/01'
    },
    {
      logo: '../../../assets/images/games/d8b511aa-87ad-4780-9bc2-fce0e4e272cbfifa-21-intros.jpg',
      name: "Tournament",
      startDate: "2020/12/01",
      endDate: '2021/12/01'
    }, {
      logo: '../../../assets/images/games/d8b511aa-87ad-4780-9bc2-fce0e4e272cbfifa-21-intros.jpg',
      name: "Tournament",
      startDate: "2020/12/01",
      endDate: '2021/12/01'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
