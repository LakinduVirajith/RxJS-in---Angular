import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},

  {path: 'observables', component: HomePageComponent},
  {path: 'operators', component: HomePageComponent},
  {path: 'subscription-management', component: HomePageComponent},
  {path: 'async-pipe', component: HomePageComponent},
  {path: 'http-requests', component: HomePageComponent},
  {path: 'event-handling', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
