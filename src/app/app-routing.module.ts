import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { PostJobComponent } from './post-job/post-job.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: "", component: ContentComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "jobs-list", component: JobsListComponent },
  { path: "jobs-details/:id", component: JobsDetailsComponent },
  { path: "post-job", component: PostJobComponent },
  { path: "profile", component: ProfileComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
