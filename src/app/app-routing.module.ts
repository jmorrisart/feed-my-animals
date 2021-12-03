import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { BarnComponent } from './barn/barn.component';
import { HouseComponent } from './house/house.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'barn', component: BarnComponent },
  { path: 'house', component: HouseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
