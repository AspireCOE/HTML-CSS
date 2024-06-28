import { CommonModule } from '@angular/common';
import { Component,ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  @ViewChild('regdata', { static: false }) regdata: any;
  register(regdata:NgForm){
    console.log(regdata.value);
    
  };
  formValid(regdata:NgForm){
    if(regdata.value.fname.dirty  || regdata.value.fname.touched){
      return true;
    }
    return false;
  }
}
