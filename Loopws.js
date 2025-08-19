//const arr=[1,2,3,4,5]

// for(num of arr){
//    // console.log(num)
// }

const string="Hello Shailesh"
for(char of string){
    if(char==" "){
        //continue;
        break;
    }
 //   console.log(`Value of each char is ${char}`)
}

const  map=new Map()
map.set("IN","India")
map.set("RUS","Russia")
map.set("USA","United States of America")
map.set("Fr","France")

for(const [key,value] of map){
  //  console.log(key,":-",value);
}

// const myObject={
//     "game":"Free Fire",
//     "player":"Shailesh"
// }
//FOR EACH LOOP IS NOT APPLICABLE FOR OBJECTS
// for(const [key,value] of myObject){
//     //console.log(key,":-",value);
// }


const object={
    js:"javascript",
    ja:"java",
    py:"python",
    c:"c++"
}

for( const key in object){
   // console.log(`${key} is shortcut for ${object[key]}`);
}

const array=["js","java","python","c++"]
for(const key in array){
   // console.log(array[key]);
}

const coding=["js","java","Python","DSA"]
coding.forEach(function (element){
   // console.log(element);
})

coding.forEach((element)=>{
   // console.log(element);
})

function print(item){
   // console.log(item);
}
// coding.forEach(print)

coding.forEach((val,index,arr)=>{
     //console.log(val,index,arr)
})

const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    //console.log(item.languageFileName)
    console.log(item.languageName)
})

