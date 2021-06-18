import { Component, Input, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/_services/tournament.service';
import { Router } from '@angular/router';
import { RegistraionService } from 'src/app/_services/registraion.service';
let tournamentId = localStorage.getItem('tournamentId');

@Component({
  selector: 'app-tournaments-info',
  templateUrl: './tournaments-info.component.html',
  styleUrls: ['./tournaments-info.component.scss']
})
export class TournamentsInfoComponent implements OnInit {
  tournament: any = {
    logo: '../../../assets/images/games/d8b511aa-87ad-4780-9bc2-fce0e4e272cbfifa-21-intros.jpg',
    name: "Tournament",
    startDate: "2020/12/01",
    endDate: '2021/12/01',
    description: '',
    rule: '',
    prizes: '',
    timeZone: ''
  }
  platfroms = [
    {
      name: 'Pc',
      logo: 'tv',
      active: false,
      selected: false
    },
    {
      name: 'Mobile',
      logo: 'phone_iphone',
      active: false,
      selected: false
    },
    {
      name: 'PS4, PS5',
      logo: 'sports_esports',
      active: false,
      selected: false
    },
    {
      name: 'Xbox',
      logo: 'videogame_asset',
      active: false,
      selected: false
    },
    {
      name: 'Switch',
      logo: 'tv',
      active: false,
      selected: false
    },
  ]
  isParticipant = false;
  constructor(public tournamentsSrv: TournamentService, private router: Router, private userSrv: RegistraionService) {
    this.tournamentsSrv.getTournamentCheckLocalStorgae();
  }
  registrInTourn() {

    if (this.userSrv.userData) {
      if (this.userSrv.userData.playerNavigation)
        if (this.userSrv.userData.playerNavigation.length != 0 && this.userSrv.userData.playerNavigation[0].id)
          this.tournamentsSrv.postTournamentPlayer({ playerId: this.userSrv.userData.playerNavigation[0].id, tournamentId: (this.tournament.permalink ? this.tournament.permalink : this.tournament.guidId ? this.tournament.guidId : this.tournament.id) });
        else {
          this.userSrv.showForm = 'playerInfo';
          this.router.navigateByUrl('/login');
        }

    }
    else {
      this.router.navigateByUrl('/login');
    }
  }
  checkIfExist() {
    if (this.userSrv.userData) {
      if (this.userSrv.userData.playerNavigation && this.userSrv.userData.playerNavigation.length != 0)
        for (let i = 0; i < this.tournamentsSrv.tournaments.tournamentParticipants.length; i++) {
          if (this.userSrv.userData.playerNavigation)
            if (this.userSrv.userData.playerNavigation[0].id == this.tournamentsSrv.tournaments.tournamentParticipants[i].playerId) {

              this.isParticipant = true;
              console.log(this.isParticipant);
              break;
            }
        }
    }
  }
  ngOnInit(): void {
  }

}
