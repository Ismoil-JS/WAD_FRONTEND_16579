import { User } from './User';

export interface Feedback {
  id?: number;
  comment: string;
  userId: number;
  user?: User;
}
