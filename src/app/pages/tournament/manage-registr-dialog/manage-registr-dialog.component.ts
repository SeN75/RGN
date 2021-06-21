import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tournament } from 'src/app/_common/types';
import { LanguageService } from 'src/app/_services/language.service';
import { LoggerService } from 'src/app/_services/logger.service';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-manage-registr-dialog',
  templateUrl: './manage-registr-dialog.component.html',
  styleUrls: ['./manage-registr-dialog.component.scss']
})
export class ManageRegistrDialogComponent implements OnInit {
  registrForm: FormGroup | any;
  constructor(public dialogRef: MatDialogRef<ManageRegistrDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public lang: LanguageService,
    private formBuilder: FormBuilder, public tournamentsSrv: TournamentService,
    private logger: LoggerService) { }
  minDate = new Date();
  ngOnInit(): void {
    this.registrForm = this.formBuilder.group({
      startRegistrationDate: [(this.data.tournament ? this.data.tournament.startRegistrationDate ? this.data.tournament.startRegistrationDate : '' : ''), Validators.required],
      endRegistrationDate: [(this.data.tournament ? this.data.tournament.endRegistrationDate ? this.data.tournament.endRegistrationDate : '' : ''), Validators.required],
      manuallyParticipantAccreditation: [(this.data.tournament ? this.data.tournament.manuallyParticipantAccreditation ? true : false : null)],
      registrationBasedOnDates: [(this.data.tournament ? this.data.tournament.registrationBasedOnDates ? true : false : null)],
      registrationMessage: [(this.data.tournament ? this.data.tournament.registrationMessage ? this.data.tournament.registrationMessage : '' : ''), Validators.required],
      approvalMessage: [(this.data.tournament ? this.data.tournament.approvalMessage ? this.data.tournament.approvalMessage : '' : ''), Validators.required],
      rejectMessage: [(this.data.tournament ? this.data.tournament.rejectMessage ? this.data.tournament.rejectMessage : '' : ''), Validators.required],
    })
  }
  get registr() { return this.registrForm }
  fillObjToSend() {
    const _tournament: Tournament = {
      ...this.data.tournament,
      name: this.data.tournament.name,
      description: this.data.tournament.description,
      gameId: this.data.tournament.gameId,
      endDate: this.data.tournament.endDate,
      startDate: this.data.tournament.startDate,
      logo: this.data.tournament.logo,
      isTeam: this.data.tournament.isTeam,
      numberOfParticipants: this.data.tournament.numberOfParticipants,
      prizes: this.data.tournament.prizes,
      timeZone: this.data.tournament.timeZone,
      rule: this.data.tournament.rule,
      registrationBasedOnDates: this.registrForm.get('registrationBasedOnDates')?.value,
      endRegistrationDate: this.registrForm.get('endRegistrationDate')?.value,
      startRegistrationDate: this.registrForm.get('startRegistrationDate')?.value,
      manuallyParticipantAccreditation: this.registrForm.get('manuallyParticipantAccreditation')?.value,
      approvalMessage: this.registrForm.get('approvalMessage')?.value,
      rejectMessage: this.registrForm.get('rejectMessage')?.value,
      registrationMessage: this.registrForm.get('registrationMessage')?.value,
    }
    return _tournament
  }
  onNoClick() {
    this.dialogRef.close();
  }
  updateRegistraionInfo() {
    const updatedTournament = this.fillObjToSend();
    if (this.registrForm.invalid) {
      this.logger.log('w', this.registr)
    } else
      this.tournamentsSrv.updateTournament(updatedTournament, updatedTournament.id)
    this.onNoClick();
  }
}
