import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'master', loadChildren: () => import('./master/master.module').then(m => m.MasterModule) },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect to the Auth module by default
  { path: '', redirectTo: '/login', pathMatch: 'full' },
 
  { path: 'home', component: HomeComponent ,canActivate: [authGuard]},
  { path: 'location', component: LocationComponent ,canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
