let mobile=[
    {id:1, titel:"Android Mobile",cost:10000},
    {id:2, titel:"Iphone Mobile",cost:50000},
    {id:3, title:"Oppo Mobile",cost:12000}
];
let final=mobile
    .sort(function(a,b){
        return a.cost-b.cost;
    })
    .sort(function(a,b){
        if(a.title<b.titel) return -1;
        if(a.titel>b.titel) return 1;
        return 0;
    })
    .filter(function(value){
        return value.cost<=10000;
    })
    .map(function(value){
        return [value.titel,value.cost].join("- ₹");
    });

console.log(final);


// reduce method
let donation=[270,345,654,200,500];
let total=donation.reduce(function(perviourVal,currentVal){
    return perviourVal+currentVal;
})
console.log(total);