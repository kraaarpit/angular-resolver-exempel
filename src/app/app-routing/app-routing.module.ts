import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HomeOneResolvedComponent } from '../home-one-resolved/home-one-resolved.component';
import { AppResolverService } from '../app-resolver.service';

const appRoutes: Routes=[{
  path: 'home', component: HomeComponent
},{
  path: 'homeres', component: HomeOneResolvedComponent, resolve:{
    cres: AppResolverService
  }
}];

@NgModule({
  imports: [
    CommonModule,
  RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers:[AppResolverService],
  declarations: []
})
export class AppRoutingModule { }