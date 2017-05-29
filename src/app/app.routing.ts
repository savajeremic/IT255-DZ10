import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home.component';
import { AboutUsComponent } from './aboutus/aboutus.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutus', component: AboutUsComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
