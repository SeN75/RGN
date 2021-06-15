import { Component, Input, OnInit } from '@angular/core';
import { Tournament } from 'src/app/_common/types';
import { DialogService } from './../../_services/dialog.service';
import { Router } from '@angular/router';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'show-tournament-card',
  templateUrl: './show-tournament-card.component.html',
  styleUrls: ['./show-tournament-card.component.scss']
})
export class ShowTournamentCardComponent implements OnInit {
  @Input() tournament: any = {
    logo: '../../../assets/images/games/d8b511aa-87ad-4780-9bc2-fce0e4e272cbfifa-21-intros.jpg',
    name: "Tournament",
    startDate: "2020/12/01",
    endDate: '2021/12/01',
    id: 0
  }
  @Input() isAdding = false;
  constructor(public dialogSrv: DialogService, private router: Router, private tournamentsSrv: TournamentService) {

  }

  ngOnInit(): void {
  }
  showTournaments(tournament: any) {
    this.tournamentsSrv.tournaments = tournament;
    this.router.navigateByUrl('/tournaments/' + tournament.id);
  }
  editTournamenets(tournament: any) {
    this.tournamentsSrv.tournaments = tournament;
    this.router.navigateByUrl('/tournaments/' + tournament.id + "/edit");

  }
}
