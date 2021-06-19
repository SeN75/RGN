import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-remove-rule-alert',
  templateUrl: './remove-rule-alert.component.html',
  styleUrls: ['./remove-rule-alert.component.scss']
})
export class RemoveRuleAlertComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveRuleAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private tounramentSrv: TournamentService) { }

  ngOnInit(): void {
  }
  onNoClick() {
    this.dialogRef.close();
  }
  remove() {
    this.tounramentSrv.removeTournamentRules(this.data);
  }
}
