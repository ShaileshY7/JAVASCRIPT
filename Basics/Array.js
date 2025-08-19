const newArr=[0,1,2,3,4,5];
// console.log(newArr[0]);

// console.log(newArr.includes(45));
// console.log(newArr.indexOf(99));
//const arr=new Array(12,3,45,6);
// console.log(arr[2]);
// arr.push(98);
// console.log(arr);   
// arr.pop()
// console.log(arr);
// arr.unshift(20);
// console.log(arr);
// newArr.shift();
// console.log(newArr);
const Arr=newArr.join();
// console.log(typeof(Arr));
// console.log(typeof(newArr));

console.log("A",newArr);

const mna1=newArr.slice(1,3);
console.log(mna1);

console.log("B",newArr);

const mna2=newArr.splice(1,3);
console.log(mna2);