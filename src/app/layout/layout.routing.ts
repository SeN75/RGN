import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { TournamentComponent } from "../pages/tournament/tournament.component";
import { LayoutComponent } from "./layout.component";


const routes: Routes = [
    {
        component: LayoutComponent, path: "", children: [
            { redirectTo: "/tournament", path: "", pathMatch: 'full' },
            { component: TournamentComponent, path: "tournament" },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
