import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoggerService } from 'src/app/_services/logger.service';
import { RegistraionService } from 'src/app/_services/registraion.service';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {
  playerForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<PlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private registerSrv: RegistraionService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      username: [(this.data.player.username ? this.data.player.username : ''), Validators.required],
      countryId: [(this.data.player.countryId ? this.data.player.countryId : ''), Validators.required],
      cityId: [(this.data.player.cityId ? this.data.player.cityId : ''), Validators.required],
      userId: [this.data.userId]
    })
  }
  onNoClick() {

  }
  playerInfo() {
    this.logger.log('dd', this.playerForm.value);
    if (this.data.state == 'edit') {
      this.registerSrv.updatePlayer(this.playerForm.value, this.data.player.id)
    }
    else {
      this.registerSrv.postPlayer(this.playerForm.value)
    }
  }
}
