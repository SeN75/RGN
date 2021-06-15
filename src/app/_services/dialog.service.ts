import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayerDialogComponent } from '../pages/profile/player-dialog/player-dialog.component';
import { ProfileDialogComponent } from '../pages/profile/profile-dialog/profile-dialog.component';
import { TounamentsDialogComponent } from '../pages/tournament/tounaments-dialog/tounaments-dialog.component';
import { BattleExclusionComponent } from '../pages/tournament/tournaments-rules/battle-exclusion/battle-exclusion.component';
import { BattleLeagueComponent } from '../pages/tournament/tournaments-rules/battle-league/battle-league.component';
import { PointGroupComponent } from '../pages/tournament/tournaments-rules/point-group/point-group.component';
import { PointSimpleComponent } from '../pages/tournament/tournaments-rules/point-simple/point-simple.component';

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
  openRulePointGroupDialog(state?: string, tournament?: any): void {
    const dialogRef = this.dialog.open(PointGroupComponent, {
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
  openRulePointSimpleDialog(state?: string, tournament?: any): void {
    const dialogRef = this.dialog.open(PointSimpleComponent, {
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
  openRuleBattleLeagueDialog(state?: string, tournament?: any): void {
    const dialogRef = this.dialog.open(BattleLeagueComponent, {
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
  openRuleBattleExclusionDialog(state?: string, tournament?: any): void {
    const dialogRef = this.dialog.open(BattleExclusionComponent, {
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
  openUserProfileDialog(state?: string, user?: any): void {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
      height: 'auto',
      minWidth: '250px',
      maxWidth: "600px",
      width: 'auto',
      data: { state: state, user: user }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openPlayerDialog(state?: string, userId?: any, player?: any): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      height: 'auto',
      minWidth: '250px',
      maxWidth: "600px",
      width: 'auto',
      data: { state: state, player: player, userId: userId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
