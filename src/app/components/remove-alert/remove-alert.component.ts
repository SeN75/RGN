import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-remove-alert',
  templateUrl: './remove-alert.component.html',
  styleUrls: ['./remove-alert.component.scss']
})
export class RemoveAlertComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<RemoveAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private tounramentSrv: TournamentService) { }

  ngOnInit(): void {
  }
  onNoClick() {
    this.dialogRef.close();
  }
  remove() {
    if (this.data.state == 'tournament')
      this.tounramentSrv.removeTournament(this.data.id);


    this.onNoClick();
  }
}
