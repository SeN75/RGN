import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GamesService } from 'src/app/_services/games.service';
import { LanguageService } from 'src/app/_services/language.service';
import { LoggerService } from 'src/app/_services/logger.service';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-game-dialog',
  templateUrl: './game-dialog.component.html',
  styleUrls: ['./game-dialog.component.scss']
})
export class GameDialogComponent implements OnInit {
  gameForm: FormGroup | any;
  inputs = [
    { name: 'GAME.name', controlName: 'name', type: 'text', },
    { name: 'GAME.logo', controlName: 'logo', type: 'text', },
    { name: 'GAME.banner', controlName: 'banner', type: 'text', }
  ]
  constructor(
    public dialogRef: MatDialogRef<GameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public lang: LanguageService,
    private formBuilder: FormBuilder,
    public tournamentsSrv: TournamentService,
    private logger: LoggerService,
    private gameSrv: GamesService) { }

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({
      name: [this.data.game ? this.data.game.name ? this.data.game.name : '' : '', Validators.required],
      logo: [this.data.game ? this.data.game.logo ? this.data.game.logo : '' : '', Validators.required],
      banner: [this.data.game ? this.data.game.banner ? this.data.game.banner : '' : '', Validators.required],
    })
  }
  submit() {
    if (this.gameForm.invalid) {
      this.logger.log('gameForm: ', this.gameForm)
    } else {
      if (this.data.statue == 'edit')
        this.gameSrv.updateGame(this.data.game, this.data.game.id)
      else
        this.gameSrv.postGame(this.gameForm.value);

      this.onNoClick();
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
