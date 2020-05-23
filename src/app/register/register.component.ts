import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  emailPattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(
    public quizService: QuizService,
    private route: Router
  ) { }

  ngOnInit(): void {
    //this.emailPattern;
  }
  onSubmit(name: string, email: string) {
    this.quizService.insertParticipant(name, email).subscribe(
      (data: any) => {
        localStorage.clear();
        localStorage.setItem('participant', JSON.stringify(data));
        this.route.navigate(['/quiz']);
      }
    );

  }

}
