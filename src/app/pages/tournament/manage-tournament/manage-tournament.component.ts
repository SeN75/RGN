import { Component, OnInit } from '@angular/core';
import { tournamentTest } from 'src/app/_common/globle';
import { DialogService } from 'src/app/_services/dialog.service';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-manage-tournament',
  templateUrl: './manage-tournament.component.html',
  styleUrls: ['./manage-tournament.component.scss']
})
export class ManageTournamentComponent implements OnInit {
  tournaemnt = tournamentTest;
  constructor(public tournamentsSrv: TournamentService, public dialogSrv: DialogService) {

    console.log('int')
    if (this.tournamentsSrv.tournaments) {
      this.tournamentsSrv.getTournament(this.tournamentsSrv.tournaments.id);
      setTimeout(() => {
        this.tournaemnt = this.tournamentsSrv.tournaments;
        console.log(this.tournaemnt);
      }, 500)
    }

  }

  ngOnInit(): void {
  }

}
