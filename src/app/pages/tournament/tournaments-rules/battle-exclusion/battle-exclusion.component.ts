import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TournamentRules } from 'src/app/_common/types';
import { LanguageService } from 'src/app/_services/language.service';
import { LoggerService } from 'src/app/_services/logger.service';
import { TournamentService } from 'src/app/_services/tournament.service';
import { RemoveRuleAlertComponent } from '../remove-rule-alert/remove-rule-alert.component';

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
  createForm: FormGroup | any;
  createForm2: FormGroup | any;
  constructor(public dialogRef: MatDialogRef<BattleExclusionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder,
    private logger: LoggerService,
    public lang: LanguageService,
    private tournamentSrv: TournamentService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.logger.log('this.data.tournament.isRandomDistribution ', this.data.tournament.isRandomDistribution);
    this.createForm = this.formBuilder.group({
      name: [this.data.tournament ? this.data.tournament.name ? this.data.tournament.name : '' : '', Validators.required],
      numberOfParticipants: [this.data.tournament ? this.data.tournament.numberOfParticipants ? this.data.tournament.numberOfParticipants : '' : '', Validators.required],
      orderItem: [this.data.tournament ? this.data.tournament.orderItem ? this.data.tournament.orderItem : '' : '', Validators.required],
    });
    this.createForm2 = this.formBuilder.group({
      isRoundTrip: [{ value: this.data.tournament ? this.data.tournament.isRoundTrip ? true : false : null, disabled: false }],
      isRandomDistribution: [{ value: this.data.tournament ? this.data.tournament.isRandomDistribution ? true : false : null, disabled: false }],

    })
  }
  onNoClick() {
    this.dialogRef.close();
  }
  _formRule() {
    let rules: TournamentRules = {
      tournamentId: this.tournamentSrv.tournaments.id,
      name: this.createForm.get('name')?.value,
      numberOfParticipants: +this.createForm.get('numberOfParticipants')?.value,
      isRoundTrip: this.createForm2.get('isRoundTrip')?.value,
      isRandomDistribution: this.createForm2.get('isRandomDistribution')?.value,
      calculationBasedOnResult: this._pointPerPlace,
      timezone: this.data.tournament ? this.data.tournament.timezone ? this.data.tournament.timezone : new Date().toUTCString() : new Date().toUTCString(),
      tournamentRuleTypeId: 3,
      calculatePoints: false,
      countOfDraws: 0,
      countOfWins: 0,
      countOflosses: 0,
      // createdBy: this.data.tournament ? this.data.tournament.createdBy ? this.data.tournament.createdBy : 0 : 0,
      // createdDate: this.data.tournament ? this.data.tournament.createdDate ? this.data.tournament.createdDate : '' : '',
      // deletedBy: this.data.tournament ? this.data.tournament.deletedBy ? this.data.tournament.deletedBy : 0 : 0,
      // guidId: this.data.tournament ? this.data.tournament.guidId ? this.data.tournament.guidId : '' : '',
      id: this.data.tournament ? this.data.tournament.id ? this.data.tournament.id : 0 : 0,
      // lastModifyDate: this.data.tournament ? this.data.tournament.lastModifyDate ? this.data.tournament.lastModifyDate : '' : '',
      numberOfGroups: 0,
      numberOfParticipantsInGroup: 0,
      numberOfRounds: 0,
      numberOfWinnerInGroup: 0,
      orderItem: this.createForm.get('orderItem').value,
      pointBasedOnKill: 0,
    }
    return rules;
  }
  formTournament() {
    if (this.createForm.invalid && this.createForm2.invalid) {
      this.logger.log('form1: ', this.createForm.value);
      this.logger.log('form2: ', this.createForm2.value);
    } else {
      this.logger.log(' 0 ', this.data.tournament)
      if (this.data.state != 'edit')
        this.tournamentSrv.postTournamentRules(this._formRule());
      else
        this.tournamentSrv.updateTournamentRules(this._formRule(), this.data.tournament.id)
      this.dialogRef.close();
    }
  }
  remvoeRule() {
    const dialogRef = this.dialog.open(RemoveRuleAlertComponent, {
      height: 'auto',
      width: 'auto',
      minWidth: "300px",
      data: this.data.tournament.id
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogRef.close();
    });
  }
}
