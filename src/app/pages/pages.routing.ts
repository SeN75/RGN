import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AboutUsComponent } from "./medforce/about-us/about-us.component";
import { MedforceComponent } from "./medforce/medforce.component";
import { RegistationComponent } from "./registation/registation.component";
import { ManageTournamentComponent } from "./tournament/manage-tournament/manage-tournament.component";
import { ParticipantsComponent } from "./tournament/participants/participants.component";
import { TournamentComponent } from "./tournament/tournament.component";
import { TournamentsInfoComponent } from "./tournament/tournaments-info/tournaments-info.component";
import { TournamentsRulesComponent } from "./tournament/tournaments-rules/tournaments-rules.component";
import { TournamentPageComponent } from './medforce/tournament-page/tournament-page.component';


const routes: Routes = [
  { component: MedforceComponent, path: "" },
  { component: AboutUsComponent, path: "about-us" },
  { component: TournamentComponent, path: "tournaments" },
  { component: TournamentPageComponent, path: "tournaments-page" },
  { component: TournamentsInfoComponent, path: "tournament/:id" },
  // { component: TournamentsInfoComponent, path: "tournaments/:id/edit" },
  { component: RegistationComponent, path: "login" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
