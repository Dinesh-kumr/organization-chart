import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OrgChartComponent } from './org-chart/org-chart.component';

const routes: Routes = [
  {
    path: 'orgchart',
    component: OrgChartComponent
  },
  {
    path: '',
    redirectTo: 'orgchart',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
