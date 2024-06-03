import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-prodect-detail',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './prodect-detail.component.html',
  styleUrl: './prodect-detail.component.css'
})
export class ProdectDetailComponent {
  
  productdata:any
  constructor(private service:ProductService){  }
  ngOnInit(){
      this.service.getAllProducts().subscribe((data)=>{
        //console.log(data);      
        this.productdata=data;  
      })
  }
}
