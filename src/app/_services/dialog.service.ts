import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TounamentsDialogComponent } from '../pages/tournament/tounaments-dialog/tounaments-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }


  openTounamentsDialog(state?: string, tournament?: any): void {
    const dialogRef = this.dialog.open(TounamentsDialogComponent, {
      height: 'auto',
      minWidth: '450px',
      maxWidth: "950px",
      width: 'auto',
      data: { state: state, tournament: tournament }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
