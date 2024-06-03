import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { CubePipe } from './cube.pipe';
import { TemplateformComponent } from './templateform/templateform.component';
import { ProdectDetailComponent } from './prodect-detail/prodect-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormComponent,StudentComponent,ShopComponent,TemplateformComponent,ProductComponent,RouterLink,CommonModule,CubePipe,TemplateformComponent,ProdectDetailComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularApp';
  doj:Date=new Date();

  logout(){
    sessionStorage.setItem("isloggedin","false");
  }
}

