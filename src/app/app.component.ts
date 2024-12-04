import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserComponent } from './components/UserComponent/user/user.component';
import { FeedbackComponent } from './components/FeedbackComponent/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { EditUserComponent } from './components/UserComponent/edit-user/edit-user.component';
import { DetailsUserComponent } from './components/UserComponent/details-user/details-user.component';
import { CreateUserComponent } from './components/UserComponent/create-user/create-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    UserComponent,
    FeedbackComponent,
    HomeComponent,
    EditUserComponent,
    DetailsUserComponent,
    EditUserComponent,
    CreateUserComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
