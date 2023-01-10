import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { JobSelectComponent } from './job-select/job-select.component';
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

  {
    path: "applied-jobs",
    component: AppliedJobsComponent
  },

  {
    path: "select-job",
    component: JobSelectComponent
  },

  {
    path: "company-info",
    component: CompanyInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
