import { Component, inject } from '@angular/core';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../../Interfaces/User';
import { UserService } from '../../../FeedbackSystemService/service-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
  ],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  editUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
  };
  userService = inject(UserService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.userService
      .getUserById(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.editUser = resultedItem;
      });
  }

  toHome() {
    this.router.navigateByUrl('home');
  }
  edit() {
    const userId = this.activatedRoute.snapshot.params['id'];

    this.userService.updateUser(userId, this.editUser).subscribe((_) => {
      this.router.navigateByUrl('user');
    });
  }
}
