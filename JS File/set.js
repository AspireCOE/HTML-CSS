let data = new Set();
data.add(3);
data.add(3);
data.add(4);
data.add(5);
data.add('hello')

console.log(data);

console.log(data.has(3));

let arr1=[2,3,5,6,3,4,2];
let arr2=[3,2,5,4,7,8,3];

let output=findSameData(arr1,arr2);
console.log(output);


function findSameData(input1,input2){
    let array1=new Set(input1);
    let array2=new Set(input2);

    let sameData=new Set();

    array1.forEach(element =>{
        if(array2.has(element)){
            sameData.add(element);
        }
    })    
    return sameData;
}