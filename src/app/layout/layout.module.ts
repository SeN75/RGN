import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { TranslateModule } from '@ngx-translate/core';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from "../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        TranslateModule,
        ComponentsModule
    ],
    declarations: [
        LayoutComponent,
    ],
    exports: [
    ]
})

export class LayoutsModule { }