export class product{
    productName:string;
    productId:number;
    cost:number;
    category:string;

    constructor(productName:string,
        productId:number,
        cost:number,
        category:string){
        this.productName=productName;
        this.productId=productId;
        this.cost=cost;
        this.category=category;
        
    }
}