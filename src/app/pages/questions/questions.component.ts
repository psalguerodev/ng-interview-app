import { Component, OnInit } from '@angular/core';
import { QuestionType, QuestionsService, Question } from '../../services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  showQuestionForm: boolean;
  questionType: QuestionType;
  question: Question;

  constructor(private readonly questionsService: QuestionsService) { }

  ngOnInit() {
    this.showQuestionForm = true;
    this.cleanQuestionType();
    this.cleanQuestion();
  }

  saveQuestionType(): void {
    console.log(`QuestionType:`, this.questionType);
    this.questionsService.saveQuestionType(this.questionType);
    this.cleanQuestionType();
  }

  cleanQuestionType() {
    this.questionType = {
      description: '',
      name: ''
    };
  }

  cleanQuestion() {
    this.question = {
      background: '',
      labels: [],
      question: '',
      range: 0,
      questionType: null
    }
  }

}
