import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TournamentRules } from 'src/app/_common/types';
import { LanguageService } from 'src/app/_services/language.service';
import { LoggerService } from 'src/app/_services/logger.service';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-battle-exclusion',
  templateUrl: './battle-exclusion.component.html',
  styleUrls: ['./battle-exclusion.component.scss']
})
export class BattleExclusionComponent implements OnInit {
  isLinear = false;
  _pointPerPlace = true;
  inputs = [
    { name: 'TOURNAMENTS.ex-number', controlName: 'orderItem', grid: 'col', type: 'number' },
    { name: 'TOURNAMENTS.ex-name', controlName: 'name', grid: 'col', type: 'text' },
    { name: 'TOURNAMENTS.number-of-participants', controlName: 'numberOfParticipants', grid: 'col', type: 'number' },
  ]
  createForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    numberOfParticipants: ['', Validators.required],
    orderItem: ['', Validators.required],

  })
  createForm2: FormGroup = this.formBuilder.group({
    isRoundTrip: [{ value: false, disabled: false }],
    isRandomDistribution: [{ value: false, disabled: false }],

  })
  constructor(public dialogRef: MatDialogRef<BattleExclusionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder,
    private logger: LoggerService,
    public lang: LanguageService,
    private tournamentSrv: TournamentService) { }

  ngOnInit(): void {
  }
  _formRule() {
    let rules: TournamentRules = {
      tournamentId: this.tournamentSrv.tournaments.id,
      name: this.createForm.get('name')?.value,
      numberOfParticipants: +this.createForm.get('numberOfParticipants')?.value,
      isRoundTrip: this.createForm2.get('isRoundTrip')?.value,
      isRandomDistribution: this.createForm2.get('isRandomDistribution')?.value,
      calculationBasedOnResult: this._pointPerPlace,
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
}
