import { Component, inject } from '@angular/core';
import { FeedbackService } from '../../../FeedbackSystemService/service-feedback.service';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

interface Feedback {
  id?: number;
  userId: number;
  comment: string;
}

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatCardModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent {
  feedbackService = inject(FeedbackService);
  router = inject(Router);

  displayedColumns: string[] = ['id', 'comment', 'userId', 'actions'];
  ngOnInit() {
    this.feedbackService.getAllFeedback().subscribe((data) => {
      this.feedbacks = data;
    });
  }

  showDetails(id: number) {
    this.router.navigateByUrl('feedback/' + id);
  }
  editFeedback(id: number) {
    this.router.navigateByUrl(`feedback/${id}/edit`);
  }

  createFeedback() {
    this.router.navigateByUrl('feedback-create');
  }

  feedbacks: Feedback[] = [];

  deleteFeedback(id: number) {
    this.feedbackService.deleteFeedback(id).subscribe((_) => {
      this.feedbacks = this.feedbacks.filter((t) => t.id !== id);
    });
  }
}
