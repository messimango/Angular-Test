import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCompComponent } from "./new-comp/new-comp.component";
import { RepeatCompComponent } from './repeat-comp/repeat-comp.component';

const routes: Routes = [
  { path: 'pageone', component: NewCompComponent },
  { path: 'pagetwo', component: RepeatCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [NewCompComponent, RepeatCompComponent]