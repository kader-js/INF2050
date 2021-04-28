import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {MaladieComponent} from './maladie/maladie.component';
import {PreventionComponent} from './prevention/prevention.component';
import {TestComponent} from './test/test.component';
import {VaccinComponent} from './vaccin/vaccin.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'maladie', component: MaladieComponent},
  {path: 'prevention', component: PreventionComponent},
  {path: 'test', component: TestComponent},
  {path: 'vaccin', component: VaccinComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [AccueilComponent, MaladieComponent, PreventionComponent, TestComponent, VaccinComponent];
