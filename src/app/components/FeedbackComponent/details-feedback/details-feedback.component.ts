import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../../FeedbackSystemService/service-feedback.service';
import { Feedback } from '../../../Interfaces/Feedback';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-feedback',
  standalone: true,
  imports: [MatCard, MatCardModule, CommonModule],
  templateUrl: './details-feedback.component.html',
  styleUrl: './details-feedback.component.css',
})
export class DetailsFeedbackComponent {
  detailedFeedback: Feedback = {
    id: 0,
    userId: 0,
    comment: '',
  };

  router = inject(Router);
  feedbackService = inject(FeedbackService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.feedbackService
      .getFeedbackById(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.detailedFeedback = resultedItem;
      });
  }
}
