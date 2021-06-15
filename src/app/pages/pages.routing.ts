import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AboutUsComponent } from "./medforce/about-us/about-us.component";
import { MedforceComponent } from "./medforce/medforce.component";
import { RegistationComponent } from "./registation/registation.component";
import { ManageTournamentComponent } from "./tournament/manage-tournament/manage-tournament.component";
import { TournamentComponent } from "./tournament/tournament.component";
import { TournamentsInfoComponent } from "./tournament/tournaments-info/tournaments-info.component";
import { TournamentsRulesComponent } from "./tournament/tournaments-rules/tournaments-rules.component";


const routes: Routes = [
    { component: MedforceComponent, path: "" },
    { component: AboutUsComponent, path: "about-us" },
    { component: TournamentComponent, path: "tournaments" },
    { component: TournamentsInfoComponent, path: "tournaments/:id" },
    { component: RegistationComponent, path: "login" },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }
