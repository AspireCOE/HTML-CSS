import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { accDetail } from './acc-details/acc-details.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccDetailsComponent } from './acc-details/acc-details.component';
import { BalanceComponent } from './balance/balance.component';
import { HomeComponent } from './home/home.component';
import { TypeOfAccComponent } from './type-of-acc/type-of-acc.component';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ProductComponent } from './product/product.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,AccDetailsComponent,BalanceComponent,HomeComponent,TypeOfAccComponent
, RouterLink, LoginComponent,TemplateDrivenFormComponent,ProductComponent ,HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'accountDetails';
  router=inject(Router)
  logout(){
    const confirmation=confirm("Do you want to logout ? ")
    if(confirmation){
      sessionStorage.setItem("islogedin","false")
      this.router.navigate(['login'])
    }
    
  }
}

