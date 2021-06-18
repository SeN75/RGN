import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'tournaments-card',
  templateUrl: './tournaments-card.component.html',
  styleUrls: ['./tournaments-card.component.scss']
})
export class TournamentsCardComponent implements OnInit {
  @Input() tournament: any = {
    logo: 'assets/images/game/d8b511aa-87ad-4780-9bc2-fce0e4e272cbfifa-21-intros.jpg',
    name: "Tournament",
    startDate: "2020/12/01",
    endDate: '2021/12/01',
    id: 0
  }
  constructor(private router: Router, private tournamentSrv: TournamentService) { }

  ngOnInit(): void {
  }
  showTournament(tournament: any) {
    this.tournamentSrv.tournaments = tournament;
    this.router.navigateByUrl("/tournaments/" + (tournament.permalink ? tournament.permalink : tournament.guidId ? tournament.guidId : tournament.id))
  }
}
