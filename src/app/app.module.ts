import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { JobSelectComponent } from './job-select/job-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    JobListingsComponent,
    AppliedJobsComponent,
    FormSearchComponent,
    JobSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
