import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveAlertComponent } from '../components/remove-alert/remove-alert.component';
import { PlayerDialogComponent } from '../pages/profile/player-dialog/player-dialog.component';
import { ProfileDialogComponent } from '../pages/profile/profile-dialog/profile-dialog.component';
import { ManageRegistrDialogComponent } from '../pages/tournament/manage-registr-dialog/manage-registr-dialog.component';
import { TounamentsDialogComponent } from '../pages/tournament/tounaments-dialog/tounaments-dialog.component';
import { BattleExclusionComponent } from '../pages/tournament/tournaments-rules/battle-exclusion/battle-exclusion.component';
import { BattleLeagueComponent } from '../pages/tournament/tournaments-rules/battle-league/battle-league.component';
import { PointGroupComponent } from '../pages/tournament/tournaments-rules/point-group/point-group.component';
import { PointSimpleComponent } from '../pages/tournament/tournaments-rules/point-simple/point-simple.component';
import { ParticipantsDialogComponent } from './../pages/tournament/participants/participants-dialog/participants-dialog.component';
import { LoggerService } from 'src/app/_services/logger.service';
import { GameDialogComponent } from '../pages/game/game-dialog/game-dialog.component';
import { SlideDialogComponent } from './../pages/slider-manager/slide-dialog/slide-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog, private logger: LoggerService) { }


  openTounamentsDialog(state?: string, tournament?: any): void {
    const dialogRef = this.dialog.open(TounamentsDialogComponent, {

      minWidth: '450px',
      maxWidth: "950px",
      data: { state: state, tournament: tournament }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.log('The dialog was closed');
    });
  }
  openRulePointGroupDialog(state?: string, tournament?: any): void {
    const dialogRef = this.dialog.open(PointGroupComponent, {

      minWidth: '450px',
      maxWidth: "950px",
      data: { state: state, tournament: tournament }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.log('The dialog was closed');
    });
  }
  openRulePointSimpleDialog(state?: string, tournament?: any): void {
    const dialogRef = this.dialog.open(PointSimpleComponent, {

      minWidth: '450px',
      maxWidth: "950px",
      data: { state: state, tournament: tournament }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.log('The dialog was closed');
    });
  }
  openRuleBattleLeagueDialog(state?: string, tournament?: any): void {
    const dialogRef = this.dialog.open(BattleLeagueComponent, {

      minWidth: '450px',
      maxWidth: "90%",
      data: { state: state, tournament: tournament }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.log('The dialog was closed');
    });
  }
  openRuleBattleExclusionDialog(state?: string, tournament?: any): void {
    const dialogRef = this.dialog.open(BattleExclusionComponent, {

      minHeight: '300px',
      minWidth: '450px',
      maxWidth: "950px",
      data: { state: state, tournament: tournament }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.log('The dialog was closed');
    });
  }
  openUserProfileDialog(state?: string, user?: any): void {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {

      minWidth: '250px',
      maxWidth: "600px",
      data: { state: state, user: user }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.log('The dialog was closed');
    });
  }
  openPlayerDialog(state?: string, userId?: any, player?: any): void {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {

      minWidth: '250px',
      maxWidth: "600px",
      data: { state: state, player: player, userId: userId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.log('The dialog was closed');
    });
  }
  openParticipantDialog(state?: string, participant?: any): void {
    const dialogRef = this.dialog.open(ParticipantsDialogComponent, {

      minWidth: '250px',
      maxWidth: "600px",
      data: { state: state, participant: participant }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.log('The dialog was closed');
    });
  }
  openRemoveDialog(state?: string, data?: any): void {
    const dialogRef = this.dialog.open(RemoveAlertComponent, {

      minWidth: '250px',
      maxWidth: "600px",
      data: { state: state, id: data.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.log('The dialog was closed');
    });
  }
  openManageRegistrtionDialog(state?: string, data?: any): void {
    const dialogRef = this.dialog.open(ManageRegistrDialogComponent, {
      minWidth: '350px',
      maxWidth: "950px",
      data: { state: state, tournament: data }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.log('The dialog was closed');
    });
  }
  openGameDialog(state?: string, data?: any): void {
    const dialogRef = this.dialog.open(GameDialogComponent, {
      minWidth: '350px',
      maxWidth: "950px",
      data: { state: state, game: data }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.log('The dialog was closed');
    });
  }
  openSlideDialog(state?: string, data?: any): void {
    const dialogRef = this.dialog.open(SlideDialogComponent, {
      minWidth: '350px',
      maxWidth: "950px",
      data: { state: state, slide: data }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.logger.log('The dialog was closed');
    });
  }

}
