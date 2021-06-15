import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TournamentRules } from 'src/app/_common/types';
import { TournamentService } from 'src/app/_services/tournament.service';
import { LoggerService } from 'src/app/_services/logger.service';
import { LanguageService } from 'src/app/_services/language.service';

@Component({
  selector: 'app-point-group',
  templateUrl: './point-group.component.html',
  styleUrls: ['./point-group.component.scss']
})
export class PointGroupComponent implements OnInit {
  isLinear = false;
  _pointPerPlace = true;
  _pointPerPoint = true;
  inputs = [
    { name: 'TOURNAMENTS.ex-number', controlName: 'orderItem', grid: 'col', type: 'number' },
    { name: 'TOURNAMENTS.ex-name', controlName: 'name', grid: 'col', type: 'text' },
    { name: 'TOURNAMENTS.number-of-participants', controlName: 'numberOfParticipants', grid: 'col', type: 'number' },
    { name: 'TOURNAMENTS.number-of-participants-in-group', controlName: 'numberOfParticipantsInGroup', grid: 'col', type: 'number' },
    { name: 'TOURNAMENTS.number-of-winner-in-group', controlName: 'numberOfWinnerInGroup', grid: 'col', type: 'number' },

  ]
  createForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    numberOfParticipants: ['', Validators.required],
    orderItem: ['', Validators.required],
    numberOfParticipantsInGroup: ['', Validators.required],
    numberOfWinnerInGroup: ['', Validators.required],

  })
  createForm2: FormGroup = this.formBuilder.group({
    firstPlace: [{ value: '', disabled: true }],
    secondPlace: [{ value: '', disabled: true }],
    thirdPlace: [{ value: '', disabled: true }],
    killPoint: [{ value: '', disabled: true }],
  })
  constructor(public dialogRef: MatDialogRef<PointGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public lang: LanguageService,
    private tournamentSrv: TournamentService, private logger: LoggerService) { }

  ngOnInit(): void {
  }
  _formRule() {
    let rules: TournamentRules = {
      tournamentId: this.tournamentSrv.tournaments.id,
      name: this.createForm.get('name')?.value,
      calculationBasedOnResult: this._pointPerPlace,
      calculatePoints: this._pointPerPoint,
      numberOfParticipantsInGroup: this.createForm.get('numberOfParticipantsInGroup')?.value,
      numberOfWinnerInGroup: this.createForm.get('numberOfWinnerInGroup')?.value,
      numberOfParticipants: this.createForm.get('numberOfParticipants')?.value,
      isRoundTrip: this.createForm2.get('isRoundTrip')?.value,
      isRandomDistribution: this.createForm2.get('isRandomDistribution')?.value,
      pointBasedOnKill: this.createForm2.get('killPoint')?.value,
      timezone: new Date().toUTCString(),
    }
    return rules;
  }
  formTournament() {
    if (this.createForm.invalid && this.createForm2.invalid) {
      this.logger.log('form1: ', this.createForm.value);
      this.logger.log('form2: ', this.createForm2.value);
    } else {
      this.tournamentSrv.postTournamentRules(this._formRule());
    }
  }

  pointPerPlace() {

    if (this._pointPerPlace) {
      this.createForm2.get('firstPlace')?.enable();
      this.createForm2.get('secondPlace')?.enable();
      this.createForm2.get('thirdPlace')?.enable();
    } else {
      this.createForm2.get('firstPlace')?.disable();
      this.createForm2.get('secondPlace')?.disable();
      this.createForm2.get('thirdPlace')?.disable();
    }
    this._pointPerPlace = !this._pointPerPlace;
  }
  pointPerPoint() {
    if (this._pointPerPoint)
      this.createForm2.get('killPoint')?.enable();
    else
      this.createForm2.get('killPoint')?.disable()
    this._pointPerPoint = !this._pointPerPoint;
  }
}
