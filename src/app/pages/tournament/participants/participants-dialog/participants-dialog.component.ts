import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoggerService } from 'src/app/_services/logger.service';
import { RegistraionService } from 'src/app/_services/registraion.service';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-participants-dialog',
  templateUrl: './participants-dialog.component.html',
  styleUrls: ['./participants-dialog.component.scss']
})
export class ParticipantsDialogComponent implements OnInit {
  playerForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ParticipantsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private tournamentsSrv: TournamentService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.log('participant: ', this.data);
    this.playerForm = this.formBuilder.group({
      name: [{ value: this.data.participant ? this.data.participant.playerNavigation ? this.data.participant.playerNavigation.userNavigation ? this.data.participant.playerNavigation.userNavigation.fullname ? this.data.participant.playerNavigation.userNavigation.fullname : '' : '' : '' : '', disabled: true }],
      username: [{ value: this.data.participant ? this.data.participant.playerNavigation ? this.data.participant.playerNavigation.username ? this.data.participant.playerNavigation.username : '' : '' : '', disabled: true }],
      email: [{ value: this.data.participant ? this.data.participant.playerNavigation ? this.data.participant.playerNavigation.userNavigation ? this.data.participant.playerNavigation.userNavigation.email ? this.data.participant.playerNavigation.userNavigation.email : '' : '' : '' : '', disabled: true }],
      mobile: [{ value: this.data.participant ? this.data.participant.playerNavigation ? this.data.participant.playerNavigation.userNavigation ? this.data.participant.playerNavigation.userNavigation.mobile ? this.data.participant.playerNavigation.userNavigation.mobile : '' : '' : '' : '', disabled: true }],
      isApproved: [this.data.participant ? this.data.participant.isApproval : null],
    });

    // this.playerForm.disable();
    // this.playerForm.get('isApproved').enable()
    this.logger.log('participant: ', this.playerForm.value);
  }
  onNoClick() {
    this.dialogRef.close();
  }
  updateStatus() {

    this.logger.log('participant: ', this.playerForm.value);
    if (this.playerForm.valid) {
      this.data.participant.isApproval = this.playerForm.get('isApproved').value;
      this.tournamentsSrv.updateTournamentPlayer({ ...this.data.participant }, this.data.participant.id);
      this.onNoClick();
    }
  }
}
