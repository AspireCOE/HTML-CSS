let myMap = new Map();
myMap.set(1,"Book1");
myMap.set(2,"Book2");
myMap.set(3,"Book3");
myMap.set(4,"Book4");
myMap.set(5,"Book5");
console.log(myMap);

for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

for(let value of myMap.values()){
    console.log(`Value of myMap is ${value}`);
}

for(let [key,value] of myMap){
    console.log((`Key ${key} has value ${value}`));
}

myMap.forEach((value,key)=>console.log(`${value} & Key is ${key}`));



const input="Hello World Hello";
const wordFrequencyMap=countwordFrequency(input);
console.log(wordFrequencyMap);

function countwordFrequency(sentance){
    const words=sentance.split(" ");

    const frequencyMap=new Map();

    for(let word of words){
        frequencyMap.set(word,(frequencyMap.get(word)||0)+1);
    }

    return frequencyMap;
}
