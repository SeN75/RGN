import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Slide } from 'src/app/_common/types';
import { GamesService } from 'src/app/_services/games.service';
import { LanguageService } from 'src/app/_services/language.service';
import { LoggerService } from 'src/app/_services/logger.service';
import { SettingsService } from 'src/app/_services/settings.service';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-slide-dialog',
  templateUrl: './slide-dialog.component.html',
  styleUrls: ['./slide-dialog.component.scss']
})
export class SlideDialogComponent implements OnInit {
  slideForm: FormGroup | any;
  inputs = [
    { name: 'SETTINGS.title', controlName: 'title', type: 'text', },
    { name: 'SETTINGS.description', controlName: 'description', type: 'text', },
    { name: 'SETTINGS.image-or-vedio-link', controlName: 'imageOrVedioLink', type: 'text', },
    { name: 'SETTINGS.order-slider', controlName: 'orderSlider', type: 'text', },
  ]
  constructor(
    public dialogRef: MatDialogRef<SlideDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public lang: LanguageService,
    private formBuilder: FormBuilder,
    public settingsSrv: SettingsService,
    private logger: LoggerService,
  ) { }

  ngOnInit(): void {
    this.slideForm = this.formBuilder.group({
      title: [this.data.slide ? this.data.slide.title ? this.data.slide.title : '' : '', Validators.required],
      description: [this.data.slide ? this.data.slide.description ? this.data.slide.description : '' : '', Validators.required],
      imageOrVedioLink: [this.data.slide ? this.data.slide.imageOrVedioLink ? this.data.slide.imageOrVedioLink : '' : '', Validators.required],
      orderSlider: [this.data.slide ? this.data.slide.orderSlider ? this.data.slide.orderSlider : '' : '', Validators.required],
      isVedio: [this.data.slide ? this.data.slide.isVedio ? true : false : null, Validators.required],
    })
  }
  fillDataToUpdate() {
    let slider: Slide = {
      id: this.data.slide.id,
      imageOrVedioLink: this.slideForm.get('imageOrVedioLink').value,
      description: this.slideForm.get('description').value,
      orderSlider: this.slideForm.get('orderSlider').value,
      isVedio: this.slideForm.get('isVedio').value,
      title: this.slideForm.get('title').value
    }

    return slider;
  }
  submit() {
    if (this.slideForm.invalid) {
      this.logger.log('slideForm: ', this.slideForm)
    } else {
      if (this.data.state == 'edit')
        this.settingsSrv.updateSlide(this.fillDataToUpdate(), this.data.slide.id)
      else
        this.settingsSrv.postSlide(this.slideForm.value);

      this.onNoClick();
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
