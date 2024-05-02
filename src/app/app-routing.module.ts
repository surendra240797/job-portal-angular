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
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jobs-list', component: JobsListComponent, canActivate: [AuthGuard] },
  {
    path: 'jobs-details/:id',
    component: JobsDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'jobs-details',
    component: JobsDetailsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'post-job', component: PostJobComponent, canActivate: [AuthGuard] },
  {
    path: 'edit-job/:id',
    component: PostJobComponent,
    canActivate: [AuthGuard]
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'test/', component: TestComponent },
  { path: 'test/:id', component: TestComponent },
  {
    path: 'jobs-list/:id',
    component: JobsListComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
