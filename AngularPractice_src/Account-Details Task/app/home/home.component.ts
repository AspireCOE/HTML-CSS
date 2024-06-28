import { Component } from '@angular/core';
import { TemplateDrivenFormComponent } from '../template-driven-form/template-driven-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TemplateDrivenFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
