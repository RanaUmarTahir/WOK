import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CardsComponent } from './components/cards/cards.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { DonateComponent } from './components/donate/donate.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CoreTeamComponent } from './components/core-team/core-team.component';
import { LoaderComponent } from './components/loader/loader.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'cards',
    component: CardsComponent,
  },
  {
    path: 'campaigns',
    component: CampaignsComponent,
  },
  {
    path: 'join-us',
    component: JoinUsComponent,
  },
  {
    path: 'donate',
    component: DonateComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'core-team',
    component: CoreTeamComponent,
  },
  {
    path: 'loader',
    component: LoaderComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
