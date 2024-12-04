import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Feedback } from '../Interfaces/Feedback';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  httpClient = inject(HttpClient);
  private apiUrl = 'https://localhost:7275/api';

  getAllFeedback() {
    return this.httpClient.get<Feedback[]>(`${this.apiUrl}/Feedbacks`);
  }
  getFeedbackById(id: number) {
    return this.httpClient.get<Feedback>(`${this.apiUrl}/Feedbacks/${id}`);
  }
  deleteFeedback(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/Feedbacks/${id}`);
  }
  createFeedback(feedback: Feedback) {
    return this.httpClient.post<Feedback>(`${this.apiUrl}/Feedbacks`, feedback);
  }

  updateFeedback(id: number, feedback: Feedback) {
    return this.httpClient.put<Feedback>(
      `${this.apiUrl}/Feedbacks/${id}`,
      feedback
    );
  }
}
