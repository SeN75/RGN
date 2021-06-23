import { Component, OnInit } from '@angular/core';
import { SettingsService } from './../../_services/settings.service';

@Component({
  selector: 'app-slider-manager',
  templateUrl: './slider-manager.component.html',
  styleUrls: ['./slider-manager.component.scss']
})
export class SliderManagerComponent implements OnInit {
  slides = []
  constructor(public settingsSrv: SettingsService) { }

  ngOnInit(): void {
  }

}
