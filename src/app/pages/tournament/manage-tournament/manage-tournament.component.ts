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
    // setTimeout(() => this.removeAllRules(), 5000)
  }
  goToAssociate() {
    this.router.navigateByUrl('tournament/' + (this.tournamentsSrv.tournaments.permalink ? this.tournamentsSrv.tournaments.permalink : this.tournamentsSrv.tournaments.guidId ? this.tournamentsSrv.tournaments.guidId : this.tournamentsSrv.tournaments.id) + '/edit/associate');
  }
  ngOnInit(): void {

  }
  confirmedParticipants(data: any) {
    let confirmed = 0;
    for (let i = 0; i < data.length; i++)
      if (data[i].isApproval)
        confirmed++;

    return confirmed;
  }
  isPublished(_isPublished: boolean) {
    this.tournamentsSrv.tournaments.isPublish = _isPublished;
    this.tournamentsSrv.updateTournament(this.tournamentsSrv.tournaments, this.tournamentsSrv.tournaments.id);
  }
  removeAllRules() {
    this.tournamentsSrv.removeTournamentRules(this.tournamentsSrv.tournaments.tournamentRules[0].guidId);

    for (let i = 0; i < this.tournamentsSrv.tournaments.tournamentRules.length; i++)
      this.tournamentsSrv.removeTournamentRules(this.tournamentsSrv.tournaments.tournamentRules[i].guidId);
  }
}
