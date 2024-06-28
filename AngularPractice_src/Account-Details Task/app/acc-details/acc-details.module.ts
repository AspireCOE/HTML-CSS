export class accDetail{
    accountNumber:number;
    accountHolderName:string;
    accountType:string;
    accountCreationDate:Date;
    balanceAmount:number;
    
    constructor(accountNumber:number,accountHolderName:string,accountType:string,accountCreationDate:Date,balanceAmount:number){
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.accountType=accountType;
        this.accountCreationDate=accountCreationDate;
        this.balanceAmount=balanceAmount;
    }
}