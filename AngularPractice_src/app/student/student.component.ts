import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  studentName:string="Manju";
  studentMark:number=450;
  displayMessage( message:string) {
    alert(message);
  }
}
