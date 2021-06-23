import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from "../components/components.module";
import { TournamentComponent } from "./tournament/tournament.component";
import { PageRoutingModule } from "./pages.routing";
import { TounamentsDialogComponent } from './tournament/tounaments-dialog/tounaments-dialog.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TournamentsInfoComponent } from './tournament/tournaments-info/tournaments-info.component';
import { MedforceComponent } from "./medforce/medforce.component";
import { CarouselModule } from "ngx-owl-carousel-2";
import { LoginComponent } from './login/login.component';
import { RegistationComponent } from './registation/registation.component';
import { ManageTournamentComponent } from './tournament/manage-tournament/manage-tournament.component';
import { TournamentsRulesComponent } from './tournament/tournaments-rules/tournaments-rules.component';
import { PointGroupComponent } from './tournament/tournaments-rules/point-group/point-group.component';
import { PointSimpleComponent } from './tournament/tournaments-rules/point-simple/point-simple.component';
import { BattleLeagueComponent } from './tournament/tournaments-rules/battle-league/battle-league.component';
import { BattleExclusionComponent } from './tournament/tournaments-rules/battle-exclusion/battle-exclusion.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { AboutUsComponent } from "./medforce/about-us/about-us.component";
import { ProfileComponent } from './profile/profile.component';
import { ProfileDialogComponent } from './profile/profile-dialog/profile-dialog.component';
import { PlayerDialogComponent } from './profile/player-dialog/player-dialog.component';
import { ParticipantsComponent } from './tournament/participants/participants.component';
import { MatTableModule } from '@angular/material/table';
import { ParticipantsDialogComponent } from './tournament/participants/participants-dialog/participants-dialog.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RemoveRuleAlertComponent } from './tournament/tournaments-rules/remove-rule-alert/remove-rule-alert.component';
import { ManageRegistrDialogComponent } from './tournament/manage-registr-dialog/manage-registr-dialog.component';
import { GameComponent } from './game/game.component';
import { GameDialogComponent } from './game/game-dialog/game-dialog.component';
import { HomeSliderComponent } from './medforce/home-slider/home-slider.component';
import { SwiperModule } from 'swiper/angular';
import { TournamentPageComponent } from './medforce/tournament-page/tournament-page.component';
import { SliderManagerComponent } from './slider-manager/slider-manager.component';
import { SlideDialogComponent } from './slider-manager/slide-dialog/slide-dialog.component';
import { HeroBannarComponent } from './medforce/hero-bannar/hero-bannar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NgbModule,
    MatIconModule,
    MatButtonModule,
    ComponentsModule,
    PageRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonToggleModule,
    SwiperModule

  ],
  declarations: [
    TournamentComponent,
    TounamentsDialogComponent,
    AboutUsComponent,
    TournamentsInfoComponent,
    MedforceComponent,
    LoginComponent,
    RegistationComponent,
    ManageTournamentComponent,
    TournamentsRulesComponent,
    PointGroupComponent,
    PointSimpleComponent,
    BattleLeagueComponent,
    BattleExclusionComponent,
    ProfileComponent,
    ProfileDialogComponent,
    PlayerDialogComponent,
    ParticipantsComponent,
    ParticipantsDialogComponent,
    RemoveRuleAlertComponent,
    ManageRegistrDialogComponent,
    GameComponent,
    GameDialogComponent,
    HomeSliderComponent,
    TournamentPageComponent,
    SliderManagerComponent,
    SlideDialogComponent,
    HeroBannarComponent,
  ],
  exports: [

  ],
  entryComponents: [

    TounamentsDialogComponent,
    PointGroupComponent,
    PointSimpleComponent,
    BattleLeagueComponent,
    BattleExclusionComponent
  ]
})

export class PageModule { }
