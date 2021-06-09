import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { TranslateModule } from '@ngx-translate/core';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from "../components/components.module";

import { LayoutRoutingModule } from './layout.routing';
import { PageModule } from "../pages/pages.module";
import { MatIconModule } from "@angular/material/icon";
@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule,
        TranslateModule,
        ComponentsModule,
        LayoutRoutingModule,
        PageModule,
        MatIconModule
    ],
    declarations: [
        LayoutComponent,
    ],
    exports: [
    ]
})

export class LayoutsModule { }