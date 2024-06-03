import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    // constructor(private router: Router){

    // }
    router=inject(Router)
    login(userID:any,pass:any){
        if(userID=="Manju" && pass=="123"){
        sessionStorage.setItem("islogedin","true");
        this.router.navigate(['home']);
        }
        else{
            alert("Enter Valid Input")
        sessionStorage.setItem("islogedin","false");
        }

        
    }
}
