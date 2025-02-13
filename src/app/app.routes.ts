import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { PackagesComponent } from './shared/components/packages/packages.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'packages',
    component: PackagesComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
