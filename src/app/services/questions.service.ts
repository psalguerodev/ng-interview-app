import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface QuestionType {
  id?: string;
  name: string;
  description?: string;
}

export interface Question {
  id?: string;
  question: string;
  questionType: QuestionType;
  labels: string[],
  background: string;
  range: number;
}

export interface IQuestionService {
  saveQuestionType(questionType: QuestionType): void;
  saveQuestion(question: Question): void;
  questionTypeObserver(): Observable<QuestionType[]>;
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
    const idQuestionType = this.db.createId();
    questionType.id = idQuestionType;
    this.db.collection(this.questionTypeCollection)
        .doc(idQuestionType)
        .set(questionType);
  }

  saveQuestion(question: Question): void {
    const idQuestion  = this.db.createId();
    question.id = idQuestion;
    this.db.collection(this.questionCollection)
           .doc(idQuestion)
           .set(question);
  }

  questionTypeObserver(): Observable<QuestionType[]> {
    return this.db.collection<QuestionType>(this.questionTypeCollection).valueChanges();
  }

}
