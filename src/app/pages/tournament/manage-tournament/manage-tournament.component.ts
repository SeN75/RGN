import { Component, OnInit } from '@angular/core';
import { tournamentTest } from 'src/app/_common/globle';
import { DialogService } from 'src/app/_services/dialog.service';
import { TournamentService } from 'src/app/_services/tournament.service';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/_services/logger.service';
@Component({
  selector: 'app-manage-tournament',
  templateUrl: './manage-tournament.component.html',
  styleUrls: ['./manage-tournament.component.scss']
})
export class ManageTournamentComponent implements OnInit {
  constructor(public tournamentsSrv: TournamentService, public dialogSrv: DialogService, private router: Router, private logger: LoggerService) {
    this.tournamentsSrv.getTournamentCheckLocalStorgae();
  }
  goToAssociate() {
    this.router.navigateByUrl('tournament/' + (this.tournamentsSrv.tournaments.permalink ? this.tournamentsSrv.tournaments.permalink : this.tournamentsSrv.tournaments.guidId ? this.tournamentsSrv.tournaments.guidId : this.tournamentsSrv.tournaments.id) + '/edit/associate');
  }
  ngOnInit(): void {

  }
  isPublished(_isPublished: boolean) {
    this.tournamentsSrv.tournaments.isPublish = _isPublished;
    this.tournamentsSrv.updateTournament(this.tournamentsSrv.tournaments, this.tournamentsSrv.tournaments.id);
  }
}
