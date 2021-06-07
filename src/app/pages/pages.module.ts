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
        ReactiveFormsModule,
        CarouselModule,

    ],
    declarations: [
        TournamentComponent,
        TounamentsDialogComponent,
        TournamentsInfoComponent,
        MedforceComponent,
        LoginComponent
    ],
    exports: [

    ],
    entryComponents: [TounamentsDialogComponent]
})

export class PageModule { }