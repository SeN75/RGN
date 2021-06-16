import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/_services/logger.service';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})

export class ParticipantsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email', 'status', 'action'];

  dataSource: any = [];
  constructor(private tournamentsSrv: TournamentService, private logger: LoggerService) {
    // if (this.tournamentsSrv.tournaments.tournamentParticipants) {
    //   this.dataSource = this.tournamentsSrv.tournaments.tournamentParticipants;
    //   this.logger.log('tournamnt srv: ', this.dataSource);
    // }
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
