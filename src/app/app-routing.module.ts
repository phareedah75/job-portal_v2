import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  
  {
    path: "job-listings",
    component: JobListingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
