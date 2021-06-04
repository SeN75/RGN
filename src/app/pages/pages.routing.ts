import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { TournamentComponent } from "./tournament/tournament.component";


const routes: Routes = [
    { component: TournamentComponent, path: "" },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }
