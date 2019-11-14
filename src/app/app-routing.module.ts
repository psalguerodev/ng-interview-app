import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { QuestionsComponent } from './pages/questions/questions.component';


const routes: Routes = [
  { component: DashboardComponent, path: 'dashboard' },
  { component: InterviewsComponent, path: 'interviews' },
  { component: QuestionsComponent, path: 'questions' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
