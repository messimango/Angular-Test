import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCompComponent } from "./new-comp/new-comp.component";
import { RepeatCompComponent } from './repeat-comp/repeat-comp.component';
import { Component1Component } from './component1/component1.component'
import { Component2Component } from './component2/component2.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  { path: 'Pageone', component: NewCompComponent },
  { path: 'Pagetwo', component: RepeatCompComponent},
  { path: 'Pagethree', component: Component1Component },
  { path: 'Pagefour', component: Component2Component },
  { path: 'Pagefive', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [NewCompComponent, RepeatCompComponent, Component1Component, Component2Component, StudentComponent]