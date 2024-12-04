import { Component, inject } from '@angular/core';
import { User } from '../../../Interfaces/User';
import { MatCard, MatCardModule } from '@angular/material/card';
import { UserService } from '../../../FeedbackSystemService/service-user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details-user',
  standalone: true,
  imports: [MatCard, MatCardModule],
  templateUrl: './details-user.component.html',
  styleUrl: './details-user.component.css',
})
export class DetailsUserComponent {
  detailedUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
  };

  router = inject(Router);
  userService = inject(UserService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.userService
      .getUserById(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.detailedUser = resultedItem;
      });
  }
}
