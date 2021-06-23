import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'dom7';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'tournament-page',
  templateUrl: './tournament-page.component.html',
  styleUrls: ['./tournament-page.component.scss']
})
export class TournamentPageComponent implements OnInit {
  toDayDate = new Date();
  @Input() isHomepage = false;
  constructor(public tournamentSrv: TournamentService, public router: Router) { }

  ngOnInit(): void {
  }
  showTournament(tournament: any) {
    this.tournamentSrv.tournaments = tournament;
    this.router.navigateByUrl("/tournament/" + (tournament.permalink ? tournament.permalink : tournament.guidId ? tournament.guidId : tournament.id))
  }
  isGone(tournaemntsDate: any) {
    let date = new Date(tournaemntsDate);
    return this.toDayDate.getTime() == date.getTime() ? 0 : this.toDayDate.getTime() > date.getTime() ? -1 : 1
  }
}
