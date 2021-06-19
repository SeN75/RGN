import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TournamentRules } from 'src/app/_common/types';
import { TournamentService } from 'src/app/_services/tournament.service';
import { LoggerService } from 'src/app/_services/logger.service';
import { LanguageService } from 'src/app/_services/language.service';
import { RemoveRuleAlertComponent } from '../remove-rule-alert/remove-rule-alert.component';

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
  createForm: FormGroup | any;
  createForm2: FormGroup | any;
  constructor(public dialogRef: MatDialogRef<PointGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public lang: LanguageService,
    private tournamentSrv: TournamentService,
    private logger: LoggerService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: [this.data.tournament ? this.data.tournament.name ? this.data.tournament.name : '' : '', Validators.required],
      numberOfParticipants: [this.data.tournament ? this.data.tournament.numberOfParticipants ? this.data.tournament.numberOfParticipants : '' : '', Validators.required],
      orderItem: [this.data.tournament ? this.data.tournament.orderItem ? this.data.tournament.orderItem : '' : '', Validators.required],
      numberOfParticipantsInGroup: [this.data.tournament ? this.data.tournament.numberOfParticipantsInGroup ? this.data.tournament.numberOfParticipantsInGroup : '' : '', Validators.required],
      numberOfWinnerInGroup: [this.data.tournament ? this.data.tournament.numberOfWinnerInGroup ? this.data.tournament.numberOfWinnerInGroup : '' : '', Validators.required],

    })
    this.createForm2 = this.formBuilder.group({
      firstPlace: [{ value: '', disabled: true }],
      secondPlace: [{ value: '', disabled: true }],
      thirdPlace: [{ value: '', disabled: true }],
      killPoint: [{ value: this.data.tournament ? this.data.tournament.pointBasedOnKill ? this.data.tournament.pointBasedOnKill : '' : '', disabled: true }],
    })
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
      tournamentRuleTypeId: 6,
      numberOfRounds: this.data.tournament ? this.data.tournament.numberOfRounds ? this.data.tournament.numberOfRounds : 0 : 0,
      timezone: this.data.tournament ? this.data.tournament.timezone ? this.data.tournament.timezone : new Date().toUTCString() : new Date().toUTCString(),
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
      orderItem: this.createForm.get('orderItem').value,


    }
    return rules;
  }
  formTournament() {
    if (this.createForm.invalid && this.createForm2.invalid) {
      this.logger.log('form1: ', this.createForm.value);
      this.logger.log('form2: ', this.createForm2.value);
    } else {
      if (this.data.state != 'edit')
        this.tournamentSrv.postTournamentRules(this._formRule());
      else
        this.tournamentSrv.updateTournamentRules(this._formRule(), this.data.tournament.id);

      this.dialogRef.close();
    }
  }
  onNoClick() {
    this.dialogRef.close();
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
