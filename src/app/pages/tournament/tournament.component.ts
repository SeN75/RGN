import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/_services/helper.service';
import { LoggerService } from 'src/app/_services/logger.service';
import { TournamentService } from 'src/app/_services/tournament.service';
import { GamesService } from './../../_services/games.service';

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
  constructor(
    private logger: LoggerService,
    private gameSrv: GamesService,
    public helperSrv: HelperService,
    public tournamentSrv: TournamentService) {
    localStorage.removeItem('tournamentId');
  }

  ngOnInit(): void {
    this.gameSrv.getGame();
    this.logger.log('', this.gameSrv.gamesData)

  }

}
