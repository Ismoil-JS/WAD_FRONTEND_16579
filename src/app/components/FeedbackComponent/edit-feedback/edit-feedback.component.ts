import { Component, inject } from '@angular/core';
import { Feedback } from '../../../Interfaces/Feedback';
import { FeedbackService } from '../../../FeedbackSystemService/service-feedback.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-edit',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './edit-feedback.component.html',
  styleUrls: ['./edit-feedback.component.css'],
})
export class FeedbackEditComponent {
  feedbackService = inject(FeedbackService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  editFeedback: Feedback = {
    id: 0,
    comment: '',
    userId: 0, // Retain this as part of the interface, even though it's not being edited
  };

  ngOnInit() {
    const feedbackId = this.activatedRoute.snapshot.params['id'];
    this.feedbackService.getFeedbackById(feedbackId).subscribe((feedback) => {
      this.editFeedback = feedback;
    });
  }

  toFeedbackList() {
    this.router.navigateByUrl('feedback');
  }

  update() {
    const feedbackId = this.activatedRoute.snapshot.params['id'];
    this.feedbackService
      .updateFeedback(feedbackId, this.editFeedback)
      .subscribe(
        () => {
          alert('Feedback updated successfully');
          this.router.navigateByUrl('feedback');
        },
        (error) => {
          console.error('Error updating feedback:', error);
        }
      );
  }
}
