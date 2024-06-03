import { Component } from '@angular/core';
import { product } from './product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component2.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  categoryInput:string="Electronics";
  products:product[]=[{productId:101,productName:"Laptop",cost:40000,category:"Electronics"},
  {productId:102,productName:"Smartphone",cost:1000,category:"Electronics"},
  {productId:103,productName:"Headphones",cost:200,category:"Electronics"},
  {productId:104,productName:"Book",cost:20,category:"Books"},
  {productId:105,productName:"T-shirt",cost:30,category:"Clothing"},
  {productId:106,productName:"Sneakers",cost:80,category:"Clothing"},
  {productId:107,productName:"Desktop Computer",cost:60000,category:"Electronics"},
  {productId:108,productName:"Tablet",cost:500,category:"Electronics"},
  {productId:109,productName:"Fiction Book",cost:25,category:"Books"},
  {productId:110,productName:"Jeans",cost:50,category:"Clothing"},
  {productId:111,productName:"Backpack",cost:40,category:"Accessories"}
  ];
  
}
