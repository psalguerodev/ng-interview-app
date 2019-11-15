import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface QuestionType {
  name: string;
  description?: string;
}

export interface Question {
  question: string;
  questionType: QuestionType;
  labels: string[],
  background: string;
  range: number;
}

export interface IQuestionService {
  saveQuestionType(questionType: QuestionType): void;
  saveQuestion(question: Question): void;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService implements IQuestionService {

  private readonly questionTypeCollection: string = 'question_type';
  private readonly questionCollection: string = 'question';

  constructor(
    private readonly db: AngularFirestore
  ) {}

  saveQuestionType(questionType: QuestionType): void {
    this.db.collection(this.questionTypeCollection).add(questionType);
  }

  saveQuestion(question: Question): void {
    this.db.collection(this.questionCollection).add(question);
  }

}
