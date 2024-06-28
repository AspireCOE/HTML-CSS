import { Component, Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productdata:any
  constructor(private service:ProductService){  }
  ngOnInit(){
      this.service.getAllProducts().subscribe((data)=>{
        console.log(data);      
      
      })
  }
}
