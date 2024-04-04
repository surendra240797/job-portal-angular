import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostJobComponent } from './post-job/post-job.component';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    RegistrationComponent,
    LoginComponent,
    JobsListComponent,
    JobsDetailsComponent,
    PostJobComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
