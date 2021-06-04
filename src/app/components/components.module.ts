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
        ShowTournamentCardComponent
    ],
    exports: [
        ShowTournamentCardComponent
    ],


})

export class ComponentsModule { }