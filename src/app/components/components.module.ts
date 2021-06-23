import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BaseComponent } from './base/base.component';
import { ShowTournamentCardComponent } from './show-tournament-card/show-tournament-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TounamentsDialogComponent } from "../pages/tournament/tounaments-dialog/tounaments-dialog.component";
import { GameSelectComponent } from './game-select/game-select.component';
import { PlateformSelectComponent } from './plateform-select/plateform-select.component';
import { TournamentsCardComponent } from "./tournaments-card/tournaments-card.component";
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RuleCardComponent } from './rule-card/rule-card.component';
import { RemoveAlertComponent } from './remove-alert/remove-alert.component';
import { ShowSlideCardComponent } from './show-slide-card/show-slide-card.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    TranslateModule,
    NgbModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    BaseComponent,
    ShowTournamentCardComponent,
    GameSelectComponent,
    PlateformSelectComponent,
    TournamentsCardComponent,
    NavbarComponent,
    SidebarComponent,
    RuleCardComponent,
    RemoveAlertComponent,
    ShowSlideCardComponent
  ],
  exports: [
    ShowTournamentCardComponent,
    GameSelectComponent,
    PlateformSelectComponent,
    TournamentsCardComponent,
    NavbarComponent,
    SidebarComponent,
    RuleCardComponent,
    ShowSlideCardComponent
  ],
  entryComponents: [RemoveAlertComponent]


})

export class ComponentsModule { }
