import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  regdata: any;

  constructor(private _formbuilder:FormBuilder){}

  ngOnInit(){
    // this.regdata=new FormGroup({
    //   id: new FormControl(),
    //   fname:new FormControl(),
    //   lname:new FormControl(),
    //   email:new FormControl(),
    //   mobileNo : new FormControl(),
    //   password:new FormControl()

    // })
    this.regdata=this._formbuilder.group({
      id:[""],
      fname:["",[Validators.required,Validators.minLength(3)]],
      lname:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      mobileNo :["",Validators.required],
      password:["",[Validators.required,Validators.minLength(8)]]

    })
  }
  register(formData:FormGroup){
    console.log(formData.value);
    console.log(formData.valid);
    
    
  }
}
