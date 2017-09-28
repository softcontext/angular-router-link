import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent } from './component/crisis-list/crisis-list.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroListComponent } from './component/hero-list/hero-list.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroListComponent, data: [{ title: 'Heroes List' }] },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'crisis-center', component: CrisisListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
