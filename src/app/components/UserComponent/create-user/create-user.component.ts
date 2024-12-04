import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { UserService } from '../../../FeedbackSystemService/service-user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../Interfaces/User';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
  ],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  createUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
  };

  userService = inject(UserService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.userService
        .getUserById(+this.activatedRoute.snapshot.params['id'])
        .subscribe(
          (user) => {
            this.createUser = user;
          },
          (error) => {
            console.error('Error retrieving user:', error);
          }
        );
    }
  }

  create() {
    this.userService.createUser(this.createUser).subscribe(
      (result) => {
        alert('User created');
        this.router.navigateByUrl('user');
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }
}
