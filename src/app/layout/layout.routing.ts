import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from "../pages/profile/profile.component";
import { ManageTournamentComponent } from "../pages/tournament/manage-tournament/manage-tournament.component";
import { TournamentComponent } from "../pages/tournament/tournament.component";
import { TournamentsRulesComponent } from "../pages/tournament/tournaments-rules/tournaments-rules.component";
import { LayoutComponent } from "./layout.component";


const routes: Routes = [
    {
        component: LayoutComponent, path: "", children: [
            { redirectTo: "/tournament", path: "", pathMatch: 'full' },
            { component: TournamentComponent, path: "tournament" },
            { component: ProfileComponent, path: "profile" },
            { component: ManageTournamentComponent, path: "tournaments/:id/edit" },
            { component: TournamentsRulesComponent, path: "tournaments/:id/edit/rule" },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
