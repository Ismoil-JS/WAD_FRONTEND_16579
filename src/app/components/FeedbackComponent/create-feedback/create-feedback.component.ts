import { Component, inject, NgModule } from '@angular/core';
import { Feedback } from '../../../Interfaces/Feedback';
import { FeedbackService } from '../../../FeedbackSystemService/service-feedback.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../../Interfaces/User';
import { UserService } from '../../../FeedbackSystemService/service-user.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-create-feedback',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatInputModule,
    NgForOf,
  ],
  templateUrl: './create-feedback.component.html',
  styleUrl: './create-feedback.component.css',
  providers: [provideNativeDateAdapter()],
})
export class CreateFeedbackComponent {
  createFeedback = {
    userId: 0,
    comment: '',
  };

  feedbackService = inject(FeedbackService);
  userService = inject(UserService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data) => {
      this.Users = data;
    });
  }

  Users: User[] = [];
  UserId: number = 0;

  create() {
    this.createFeedback.userId = this.UserId;
    this.feedbackService.createFeedback(this.createFeedback).subscribe(
      (result) => {
        alert('Feedback created');
        this.router.navigateByUrl('feedback');
      },
      (error) => {
        console.error('Error creating feedback:', error);
      }
    );
  }
}
