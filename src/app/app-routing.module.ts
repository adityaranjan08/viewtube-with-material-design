import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LiveGuard } from './live.guard';
import { LiveComponent } from './live/live.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudioComponent } from './studio/studio.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { VideoDetailsComponent } from './video-details/video-details.component';


const routes: Routes = [
  { path: '', component: VideoContentComponent },
  {
    path: 'account', component: AccountComponent,

    children: [{ path: 'login', component: LoginComponent },
    {
      path: 'register',
      component: RegisterComponent
    }]
  },
  {
    path: 'studio',
    component: StudioComponent, canActivate: [AuthGuard],
    children: [
      { path: 'upload', component: VideoDetailsComponent },
      { path: 'live-stream', component: LiveComponent, canActivate: [LiveGuard] }
    ]
  }
  // { 
  //   path: 'studio', 
  //   component: StudioComponent,
  //   children: [
  //     { path: 'upload', component: VideoDetailsComponent }, 
  //     { path: 'live-stream', component: LiveComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
