import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Swiper, SwiperOptions } from 'swiper';

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { SettingsService } from './../../../_services/settings.service';
SwiperCore.use([Autoplay, Pagination, Navigation]);


declare var $: any;
@Component({
  selector: 'home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  constructor(public settingsSrv: SettingsService, public sanitizer: DomSanitizer) { }
  ngOnInit(): void {


  }
  getYouTubeLike(link: string) {
    let list = link.split('/');
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + list[list.length - 1] + "?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=" + list[list.length - 1]);
  }
}
