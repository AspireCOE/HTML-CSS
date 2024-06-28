import { Component } from '@angular/core';
import { accDetail } from '../acc-details/acc-details.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-type-of-acc',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './type-of-acc.component.html',
  styleUrl: './type-of-acc.component.css'
})
export class TypeOfAccComponent {
  Type:string="Savings Account";
  Balance:number=5000;
  accDetails:accDetail[]=[
    {
      "accountNumber": 123456789,
      "accountHolderName": "John Doe",
      "accountType": "Savings Account",
      "accountCreationDate": new Date("2022-01-15"),
      "balanceAmount": 5000.00
    },
    {
      "accountNumber": 234567890,
      "accountHolderName": "Jane Smith",
      "accountType": "Current Account",
      "accountCreationDate": new Date("2022-02-20"),
      "balanceAmount": 8000.00
    },
    {
      "accountNumber": 345678901,
      "accountHolderName": "David Brown",
      "accountType": "Business Account",
      "accountCreationDate": new Date("2022-03-10"),
      "balanceAmount": 12000.00
    },
    {
      "accountNumber": 456789012,
      "accountHolderName": "Emma Lee",
      "accountType": "Salary Account",
      "accountCreationDate":new Date("2022-04-05") ,
      "balanceAmount": 3000.00
    },
    {
      "accountNumber": 567890123,
      "accountHolderName": "Michael Wilson",
      "accountType": "Savings Account",
      "accountCreationDate":new Date("2022-05-12"),
      "balanceAmount": 10000.00
    },
    {
      "accountNumber": 678901234,
      "accountHolderName": "Sarah Johnson",
      "accountType": "Current Account",
      "accountCreationDate":new Date("2022-06-18") ,
      "balanceAmount": 7500.00
    },
    {
      "accountNumber": 789012345,
      "accountHolderName": "Daniel Miller",
      "accountType": "Business Account",
      "accountCreationDate":new Date("2022-07-25") ,
      "balanceAmount": 15000.00
    },
    {
      "accountNumber": 890123456,
      "accountHolderName": "Olivia Brown",
      "accountType": "Salary Account",
      "accountCreationDate":new Date("2022-08-30") ,
      "balanceAmount": 5000.00
    },
    {
      "accountNumber": 901234567,
      "accountHolderName": "James Taylor",
      "accountType": "Savings Account",
      "accountCreationDate":new Date("2022-09-14") ,
      "balanceAmount": 6000.00
    },
    {
      "accountNumber": 101112131,
      "accountHolderName": "Sophia Davis",
      "accountType": "Current Account",
      "accountCreationDate":new Date("2022-03-10") ,
      "balanceAmount": 9000.00
    }
    
  ]
}
