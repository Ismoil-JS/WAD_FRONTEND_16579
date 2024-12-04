import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UserService } from '../../../FeedbackSystemService/service-user.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { User } from '../../../Interfaces/User';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userService = inject(UserService);
  router = inject(Router);

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'username',
    'actions',
  ];
  ngOnInit() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  showDetails(id: number) {
    this.router.navigateByUrl('user/' + id);
  }
  editUser(id: number) {
    this.router.navigateByUrl(`user/${id}/edit`);
  }

  createUser() {
    this.router.navigateByUrl('user-create');
  }

  users: User[] = [];

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((_) => {
      this.users = this.users.filter((t) => t.id !== id);
    });
  }
}
