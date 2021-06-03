import { Component } from '@angular/core';
import { LanguageService } from './_services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private lang: LanguageService) { }
  title = 'RGN-dashboard';
}
