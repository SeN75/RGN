import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { Tournament } from 'src/app/_common/types';
import { LanguageService } from 'src/app/_services/language.service';
import { TournamentService } from 'src/app/_services/tournament.service';
import { GamesService } from './../../../_services/games.service';
import { DialogService } from './../../../_services/dialog.service';
import { AngularFireStorage } from '@angular/fire/storage'
import { LoggerService } from './../../../_services/logger.service';
@Component({
  selector: 'app-tounaments-dialog',
  templateUrl: './tounaments-dialog.component.html',
  styleUrls: ['./tounaments-dialog.component.scss']
})
export class TounamentsDialogComponent implements OnInit {
  isLinear = true;
  isNew = true;
  logoFile: any;
  games = [
    {
      id: 0,
      logo: '../../../assets/images/games/d8b511aa-87ad-4780-9bc2-fce0e4e272cbfifa-21-intros.jpg',
      isSelected: false,
      platfroms: {
        pc: false,
        mobile: true,
        ps4: true,
        xbox: false,
        switch: true,
      }
    },
    {
      logo: '../../../assets/images/games/egs-rocketleague-psyonixllc-s3-2560x1440-56d55e752216.jpg',
      isSelected: false,
      platfroms: {
        pc: false,
        mobile: false,
        ps4: true,
        xbox: false,
        switch: true,
      }
    },
    {
      logo: '../../../assets/images/games/d8b511aa-87ad-4780-9bc2-fce0e4e272cbfifa-21-intros.jpg',
      isSelected: false,
      platfroms: {
        pc: false,
        mobile: true,
        ps4: true,
        xbox: true,
        switch: true,
      }
    },
    {
      logo: '../../../assets/images/games/league_of_legends_logo_wallpaper_by_xlzipx-d7z4i38.png',
      isSelected: false,
      platfroms: {
        pc: true,
        mobile: true,
        ps4: true,
        xbox: true,
        switch: true,
      }
    }
  ]
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
  inputs = [
    { name: 'TOURNAMENTS.name', controlName: 'name', grid: 'col', type: 'text' },
    { name: 'TOURNAMENTS.number-of-participants', controlName: 'numberOfParticipants', grid: 'col', type: 'number' },
  ]
  createForm: FormGroup | any;
  createForm2: FormGroup | any;
  minDate = new Date();
  constructor(public dialogRef: MatDialogRef<TounamentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public lang: LanguageService,
    public dialogSrv: DialogService,
    private formBuilder: FormBuilder, public tournamentsSrv: TournamentService,
    private logger: LoggerService,
    private gameSrv: GamesService) { }

  ngOnInit(): void {
    console.log(this.data.tournament)
    this.createForm = this.formBuilder.group({
      name: [(this.data.tournament ? this.data.tournament.name ? this.data.tournament.name : '' : ''), Validators.required],
      numberOfParticipants: [(this.data.tournament ? this.data.tournament.numberOfParticipants ? this.data.tournament.numberOfParticipants : 0 : 0), Validators.required],
      gameId: ['1', Validators.required],
      isTeam: [(this.data.tournament ? this.data.tournament.isTeam ? this.data.tournament.isTeam : false : false)],

    });
    this.createForm2 = this.formBuilder.group({
      startDate: [(this.data.tournament ? this.data.tournament.startDate ? this.data.tournament.startDate : '' : ''), Validators.required],
      endDate: [(this.data.tournament ? this.data.tournament.endDate ? this.data.tournament.endDate : '' : ''), Validators.required],
      logo: [{ value: (this.data.tournament ? this.data.tournament.logo ? this.data.tournament.logo : '' : ''), disabled: true }, Validators.required],
      prize: [(this.data.tournament ? this.data.tournament.prize ? this.data.tournament.prize : '' : ''), Validators.required],
      rule: [(this.data.tournament ? this.data.tournament.rule ? this.data.tournament.rule : '' : ''), Validators.required],
      description: [(this.data.tournament ? this.data.tournament.description ? this.data.tournament.description : '' : ''), Validators.required],

    })
    // this.gameSrv.postGame({ name: 'game', banner: "banner", logo: "logo" })
  }
  get createFormControls() { return this.createForm2 }
  onNoClick(): void {
    this.dialogRef.close();
  }

  selectGame(index: number) {
    for (let i = 0; i < this.platfroms.length; i++)
      this.platfroms[i].selected = false
    for (let i = 0; i < this.games.length; i++) {
      if (i != index)
        this.games[i].isSelected = false;
    }

    this.games[index].isSelected = !this.games[index].isSelected;
    if (this.games[index].isSelected) {
      this.createForm.get('gameId').setValue(this.games[index].id)
      for (let i = 0; i < this.platfroms.length; i++) {
        if (i == 0)
          this.platfroms[i].active = this.games[index].platfroms.pc;
        if (i == 1)
          this.platfroms[i].active = this.games[index].platfroms.mobile;
        if (i == 2)
          this.platfroms[i].active = this.games[index].platfroms.ps4;
        if (i == 3)
          this.platfroms[i].active = this.games[index].platfroms.xbox;
        if (i == 4)
          this.platfroms[i].active = this.games[index].platfroms.switch;
      }
    }
    else
      for (let i = 0; i < this.platfroms.length; i++)
        this.platfroms[i].active = false

  }


  getDate(date: string) {
    let _date = new Date(date);
    return { year: _date.getFullYear(), month: _date.getMonth() + 1, day: _date.getDate() }
  }
  fillObjToSend() {

    let endDate = new Date(this.createForm2.get('endDate')?.value.year + "-" + (this.createForm2.get('endDate')?.value.month) + "-" + this.createForm2.get('endDate')?.value.day)
    let startDate = new Date(this.createForm2.get('startDate')?.value)
    const _Tournament: Tournament = {
      ...this.tournamentsSrv.tournaments,
      name: this.createForm.get('name')?.value,
      description: this.createForm2.get('description')?.value,
      gameId: 1,
      endDate: this.createForm2.get('endDate')?.value,
      startDate: this.createForm2.get('startDate')?.value,
      logo: this.createForm2.get('logo')?.value,
      isTeam: this.createForm.get('isTeam').value,
      endRegistrationDate: this.createForm2.get('endDate')?.value,
      startRegistrationDate: this.createForm2.get('startDate')?.value,
      manuallyParticipantAccreditation: false,
      numberOfParticipants: this.createForm.get('numberOfParticipants')?.value,
      prizes: this.createForm2.get('prize')?.value,
      timeZone: startDate.toTimeString(),
      registrationBasedOnDates: false,
      rule: this.createForm2.get('rule')?.value,
    }
    return _Tournament
  }


  formTournament() {
    const _tournament = this.fillObjToSend()
    this.tournamentsSrv.tournaments = _tournament;
    if (this.data.state != 'edit')
      this.tournamentsSrv.postTournament(_tournament);
    else
      if ((_tournament.permalink ? _tournament.permalink : _tournament.guidId ? _tournament.guidId : _tournament.id))
        this.tournamentsSrv.updateTournament(_tournament, (_tournament.permalink ? _tournament.permalink : _tournament.guidId ? _tournament.guidId : _tournament.id))
    this.onNoClick();
  }
  selectImg(event: any) {
    this.createForm2.get('logo').setValue(event.target.files[0])
  }
}
