import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { component: LayoutComponent, path: "" },
  { component: BaseComponent, path: "base" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
