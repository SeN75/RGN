import { Component, OnInit } from '@angular/core';
import { RegistraionService } from './../../_services/registraion.service';
import { DialogService } from './../../_services/dialog.service';
import { Tournament } from 'src/app/_common/types';
import { TournamentService } from 'src/app/_services/tournament.service';
import { CountriesService } from 'src/app/_services/countries.service';
import { LanguageService } from 'src/app/_services/language.service';
import { citites } from './../../_common/cities';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  current_tournamnet: Tournament | any = []
  citites = citites;
  constructor(public registrSrv: RegistraionService, public dialogSrv: DialogService, public tournamentsSrv: TournamentService, private CouterySrv: CountriesService, public lang: LanguageService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllCurrentTournament();
    }, 1000)
  }
  getAllCurrentTournament() {
    if (this.registrSrv.userData)
      if (this.registrSrv.userData.playerNavigation && this.registrSrv.userData.playerNavigation.length != 0)
        if (this.registrSrv.userData.playerNavigation[0].tournamentParticipants && this.registrSrv.userData.playerNavigation[0].tournamentParticipants.length != 0) {
          this.tournamentsSrv.tournamentsCurrent = [];
          for (let i = 0; i < this.registrSrv.userData.playerNavigation[0].tournamentParticipants.length; i++) {
            this.tournamentsSrv.getTournamentReturnValue(this.registrSrv.userData.playerNavigation[0].tournamentParticipants[i].tournamentId, 'returnTournament')
          }
        }
  }
  getCity(id: any) {
    return this.citites.filter((s: any) => s.city_id === id)[0]
  }
}
