import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/UserComponent/user/user.component';
import { FeedbackComponent } from './components/FeedbackComponent/feedback/feedback.component';
import { DetailsUserComponent } from './components/UserComponent/details-user/details-user.component';
import { EditUserComponent } from './components/UserComponent/edit-user/edit-user.component';
import { CreateUserComponent } from './components/UserComponent/create-user/create-user.component';
import { DetailsFeedbackComponent } from './components/FeedbackComponent/details-feedback/details-feedback.component';
import { CreateFeedbackComponent } from './components/FeedbackComponent/create-feedback/create-feedback.component';
import { FeedbackEditComponent } from './components/FeedbackComponent/edit-feedback/edit-feedback.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: 'user/:id',
    component: DetailsUserComponent,
  },
  {
    path: 'feedback/:id',
    component: DetailsFeedbackComponent,
  },
  {
    path: 'user/:id/edit',
    component: EditUserComponent,
  },
  {
    path: 'feedback/:id/edit',
    component: FeedbackEditComponent,
  },
  {
    path: 'user-create',
    component: CreateUserComponent,
  },
  {
    path: 'feedback-create',
    component: CreateFeedbackComponent,
  },
];
