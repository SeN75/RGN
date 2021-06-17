import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/_services/logger.service';
import { TournamentService } from 'src/app/_services/tournament.service';
import { DialogService } from 'src/app/_services/dialog.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})

export class ParticipantsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'username', 'mobile', 'name', 'email', 'status', 'action'];

  dataSource: any = [];
  constructor(private tournamentsSrv: TournamentService, private logger: LoggerService, public dialogSrv: DialogService) {
    this.logger.log('tournament participants', this.tournamentsSrv.tournaments);
    if (this.tournamentsSrv.tournaments && this.tournamentsSrv.tournaments.tournamentParticipants) {
      this.dataSource = this.tournamentsSrv.tournaments.tournamentParticipants;
      this.logger.log('tournamnt srv: ', this.dataSource);
    }
  }

  ngOnInit(): void {
  }

}
const test = [
  { name: 'test', email: 'test@test.com', status: 'status', },
  { name: 'test', email: 'test@test.com', status: 'status', },
  { name: 'test', email: 'test@test.com', status: 'status', },
  { name: 'test', email: 'test@test.com', status: 'status', },
  { name: 'test', email: 'test@test.com', status: 'status', },
  { name: 'test', email: 'test@test.com', status: 'status', },
  { name: 'test', email: 'test@test.com', status: 'status', },
  { name: 'test', email: 'test@test.com', status: 'status', },
  { name: 'test', email: 'test@test.com', status: 'status', },
  { name: 'test', email: 'test@test.com', status: 'status', },
  { name: 'test', email: 'test@test.com', status: 'status', },
  { name: 'test', email: 'test@test.com', status: 'status', },
  { name: 'test', email: 'test@test.com', status: 'status', },
]
