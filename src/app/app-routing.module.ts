import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { PostJobComponent } from './post-job/post-job.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jobs-list', component: JobsListComponent },
  { path: 'jobs-details/:id', component: JobsDetailsComponent },
  { path: 'jobs-details', component: JobsDetailsComponent },
  { path: 'post-job', component: PostJobComponent },
  { path: 'edit-job/:id', component: PostJobComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'test/', component: TestComponent },
  { path: 'test/:id', component: TestComponent },
  { path: 'jobs-list/:id', component: JobsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
