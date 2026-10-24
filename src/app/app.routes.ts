import { Routes } from '@angular/router';
import { Grades } from './grades/grades';

export const routes: Routes = [
  { path: 'grades', component: Grades },
  { path: '', pathMatch: 'full', redirectTo: 'grades' },
];
