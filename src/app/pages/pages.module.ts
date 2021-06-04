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
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        TournamentComponent,
        TounamentsDialogComponent
    ],
    exports: [

    ],
    entryComponents: [TounamentsDialogComponent]
})

export class PageModule { }